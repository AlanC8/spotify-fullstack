const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    audioUrl: {
      type: String,
      required: true,
    },
    album: {
      type: String,
      trim: true,
    },
    releaseDate: {
      type: Date,
    },
    genre: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);



const Music = mongoose.model("Music", musicSchema);

export default Music;
