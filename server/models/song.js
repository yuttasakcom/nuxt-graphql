const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SongSchema = new Schema({
  title: { type: String },
  lyrics: [
    {
      type: Schema.Types.ObjectId,
      ref: "lyric"
    }
  ]
});

SongSchema.statics.findLyrics = function(id) {
  return this.findById(id)
    .populate("lyrics")
    .then(song => song.lyrics);
};

module.exports = mongoose.model("song", SongSchema);
