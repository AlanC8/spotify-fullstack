import { Router } from "express";
import Playlist from "./models";
import Music from "../music/model";
import { authMiddleware } from "../middlewares/auth-middleware";
import { UserRequest } from "../auth/auth-router";

const playlistRouter = Router();

playlistRouter.get("/playlists", async (req, res) => {
  try {
    const playlists = await Playlist.find().populate("music");

    res.json(playlists);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

playlistRouter.get("/playlists/:id", async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id).populate("music");
    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }
    res.json(playlist);
  } catch (error) {
    res.json({ message: error });
  }
});

playlistRouter.post("/playlists", authMiddleware, async (req, res) => {
  try {
    const { name, description } = req.body;
    const user = req.user as UserRequest;
    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }

    const playlist = new Playlist({
      name,
      description,
      userId: user?.id,
    });

    console.log(user?.id);
    

    const savedPlaylist = await playlist.save();
    res.json(savedPlaylist);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

playlistRouter.post("/playlists/:id/add-song", async (req, res) => {
  try {
    const { musicId } = req.body;
    const playlist = await Playlist.findById(req.params.id);
    const music = await Music.findById(musicId);
    if (!playlist || !music) {
      return res.status(404).json({ message: "Playlist or music not found" });
    }
    playlist.music.push(music);
    await playlist?.save();
    res.json(playlist);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

playlistRouter.post("/playlists/:id/remove-song", async (req, res) => {
  const { musicId } = req.body;
  const playlist = await Playlist.findById(req.params.id);
  if (!playlist) {
    return res.status(404).json({ message: "Playlist not found" });
  }

  playlist.music = playlist.music.filter(
    (id) => id.toString() !== musicId.toString()
  );

  await playlist.save();
  res.json(playlist);
});

playlistRouter.delete("/playlists/:id", async (req, res) => {
  try {
    const playlist = await Playlist.findByIdAndDelete(req.params.id);
    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
export default playlistRouter;
