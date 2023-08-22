const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    maxlength: 30,
  },
  taskDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("todos", todoSchema);
