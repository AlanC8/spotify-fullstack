import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  music: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Music",
    },
  ],
});

const Playlist = mongoose.model("Playlist", playlistSchema);

export default Playlist;
