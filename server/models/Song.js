const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
    {
        title: String,
        artist: String,
        genre: String,
        year: String,
        rating: Number,
    },
      { timestamps: true }

)

module.exports = mongoose.model("Song", songSchema);