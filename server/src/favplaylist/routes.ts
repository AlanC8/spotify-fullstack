import { Router } from "express";
import LikedPlaylist from "./models";
import { authMiddleware } from "../middlewares/auth-middleware";
import { UserRequest } from "../auth/auth-router";
const favPlaylistRouter = Router();

favPlaylistRouter.post("/fav-playlist", authMiddleware, async (req, res) => {
  try {

    const user = req.user as UserRequest;
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    const userId = user.id;
    const { playlistId } = req.body;
    const likedPlaylist = new LikedPlaylist({
      userId,
      playlistId,
    });

    await likedPlaylist.save();

    res.status(201).json({ message: "Playlist added to favorites" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add playlist to favorites", error });
  }
});

favPlaylistRouter.delete("/fav-playlist/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await LikedPlaylist.findByIdAndDelete(id);

    res.status(200).json({ message: "Playlist removed from favorites" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to remove playlist from favorites", error });
  }
});

favPlaylistRouter.get("/fav-playlist/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const likedPlaylists = await LikedPlaylist.find({ userId }).populate(
      "playlistId"
    );

    res.status(200).json(likedPlaylists);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch user's favorite playlists", error });
  }
});

favPlaylistRouter.get("/fav-playlist", async (req, res) => {
  try {
    const likedPlaylists = await LikedPlaylist.find().populate("playlistId");

    res.status(200).json(likedPlaylists);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch favorite playlists", error });
  }
});
export default favPlaylistRouter;
