import { Router } from "express";
import Music from "./model";
import { deleteBucket, s3, upload, uploadFile } from "../middlewares/s3-middleware";
import { v4 as uuidv4 } from 'uuid';
const multer = require('multer');
const uploader = multer({ dest: 'uploads/' });
const musicRouter = Router();

musicRouter.get("/musics", async (req, res) => {
  try {
    const musics = await Music.find();
    res.json(musics);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

musicRouter.post("/musics", uploader.single('audioUrl'), async (req, res) => {
  try {
    const {
      title,
      artist,
      duration,
      coverImage,
      album,
      releaseDate,
      genre,
    } = req.body;

    if (!title || !artist || !duration || !coverImage) {
      return res.status(400).json({ message: "Please provide all required fields." });
    }

    
    const audioUrl = await uploadFile(req.body.audioUrl, "spotify-nfactorial", uuidv4() + ".mp3");
    const music = new Music({
      title,
      artist,
      duration,
      coverImage,
      audioUrl, 
      album,
      releaseDate,
      genre,
    });
    console.log(title, artist, duration, coverImage, audioUrl, album, releaseDate, genre);
    
    const savedMusic = await music.save();
    res.json(savedMusic);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

musicRouter.get("/musics/:id", async (req, res) => {
  try {
    const music = await Music.findById(req.params.id);
    res.json(music);
  } catch (error) {
    res.json({ message: error });
  }
});

musicRouter.put("/musics/:id", uploader.single('audioUrl') ,async (req, res) => {
  try {
    const {audioUrl, ...rest} = req.body;
    const audioUrls = await uploadFile(req.body.audioUrl, "spotify-nfactorial", uuidv4() + ".mp3");
    const music = await Music.findByIdAndUpdate(req.params.id, {rest, audioUrls}, {
      new: true,
    });
    res.json(music);
  } catch (error) {
    res.json({ message: error });
  }
});

musicRouter.delete("/musics/:id", async (req, res) => {
  try {
    const music = await Music.findByIdAndDelete(req.params.id);
    s3.deleteObject({ Bucket: "spotify-nfactorial", Key: music.audioUrl });
    res.json(music);
  } catch (error) {
    res.json({ message: error });
  }
});




export default musicRouter;
