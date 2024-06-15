import { Router } from "express";
import { authMiddleware } from "../middlewares/auth-middleware";
import FavoriteSong from "./model";
const favRouter = Router();

interface UserRequest {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

favRouter.get("/favmuz", authMiddleware, async (req, res) => {
  try {
    const user = req.user as UserRequest;
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    const userId = user.id;
    const favoriteSongs = await FavoriteSong.find({ userId }).populate(
      "musicId"
    );
    res.status(200).json(favoriteSongs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching favorite songs", error });
  }
});

favRouter.post("/favmuz", authMiddleware, async (req, res) => {
  try {
    const user = req.user as UserRequest;
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    const userId = user.id;
    const { musicId } = req.body;
    const favoriteSong = new FavoriteSong({ userId, musicId });
    await favoriteSong.save();
    res.status(200).json(favoriteSong);
  } catch (error) {
    res.status(500).json({ message: "Error adding favorite song", error });
  }
});

favRouter.delete("/favmuz/:id", authMiddleware, async (req, res) => {
    try {
        const user = req.user as UserRequest;
        if (!user) return res.status(401).json({ message: "Unauthorized" });
        const userId = user.id;
        const { id } = req.params;
        await FavoriteSong.findOneAndDelete({ _id: id, userId });
        res.status(200).json({ message: "Favorite song deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting favorite song", error });
    }
});

export default favRouter;
