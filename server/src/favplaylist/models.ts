import mongoose from "mongoose";

const likedPlaylistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  playlistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Playlist",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const LikedPlaylist = mongoose.model("LikedPlaylist", likedPlaylistSchema);

export default LikedPlaylist;
