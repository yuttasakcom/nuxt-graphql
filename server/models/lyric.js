const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LyricSchema = new Schema({
  song: {
    type: Schema.Types.ObjectId,
    ref: "song"
  },
  likes: { type: Number, default: 0 },
  content: { type: String }
});

module.exports = mongoose.model("lyric", LyricSchema);
