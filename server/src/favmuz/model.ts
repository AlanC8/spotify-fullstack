import mongoose from "mongoose";

const favoriteSongSchema = new mongoose.Schema({
  musicId: { type: mongoose.Schema.Types.ObjectId, ref: "Music" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const FavoriteSong = mongoose.model("FavoriteMusic", favoriteSongSchema);

export default FavoriteSong;
