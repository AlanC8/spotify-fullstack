import { Router } from "express";

import Artist from "./model";
import Music from "../music/model";

const artistRouter = Router();

artistRouter.get("/artists", async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

artistRouter.post("/artists", async (req, res) => {
  try {
    const { name, bio, coverImage, genre } = req.body;
    if (!name || !bio || !coverImage || !genre) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }

    const artist = new Artist({
      name,
      bio,
      coverImage,
      genre,
    });

    const savedArtist = await artist.save();
    res.json(savedArtist);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

artistRouter.get("/artists/:id", async (req, res) => {
    try {
      const artist = await Artist.findById(req.params.id);
      if (!artist) {
        return res.status(404).json({ message: "Artist not found" });
      }
      const songs = await Music.find({ artist: req.params.id }).populate('artist');
      res.json({ artist, songs });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  });

artistRouter.put("/artists/:id", async (req, res) => {
  try {
    const { name, bio, coverImage, genre } = req.body;
    if (!name || !bio || !coverImage || !genre) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }

    const updatedArtist = await Artist.findByIdAndUpdate(
      req.params.id,
      {
        name,
        bio,
        coverImage,
        genre,
      },
      { new: true }
    );

    res.json(updatedArtist);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
export default artistRouter;
