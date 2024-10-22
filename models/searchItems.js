const mongoose = require("mongoose");

const searchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  citation: {
    type: String,
    required: true,
  },
});

const SearchItem = mongoose.model("SearchItem", searchSchema);

module.exports = SearchItem;
