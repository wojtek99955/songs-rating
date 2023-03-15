const Song = require("../models/Song");
const asyncHandler = require("express-async-handler");

const addSong = async (req, res) => {

  const { title, artist, genre, year, rating } = req.body;

  const newSong = await Song.create({
    title,
    artist,
    genre,
    year,
    rating
  });

  console.log(req.body)

  if (newSong) {
    return res.status(201).json({ message: "New song created" });
  } else {
    return res.status(400).json({ message: "Invalid song data received" });
  }
};

const deleteSong = async (req, res) => {
  const { id } = req.body;
  console.log(id);

  if (!id) {
    return res.status(400).json({ message: "Song ID required" });
  }

  const song = await Song.findById(id).exec();

  if (!song) {
    return res.status(400).json({ message: "Song not found" });
  }

  const result = await song.deleteOne();

  const reply = `Song ${result.title} with ID ${result._id} deleted`;

  res.json(reply);
};

const getSongs = asyncHandler(async(req,res)=>{
    const songs = await Song.find()

    res.json(songs);

})

const updateSong = async (req, res) => {
  const { title, artist, genre, year, rating, id } = req.body.form;

  const song = await Song.findById(id).exec();

  song.title = title;
  song.artist = artist;
  song.genre = genre;
  song.year = year;
  song.rating = rating;

  const updatedSong = await song.save();

  res.json(` Song with ID '${updatedSong._id}' updated`);
};

module.exports = {
    addSong, deleteSong, getSongs, updateSong
}