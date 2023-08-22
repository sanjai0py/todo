"use strict";

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// Database Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndex: true,
  })
  .then(() =>
    console.log(
      "Database Connected"
    )
  )
  .catch((err) => console.error(err));

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const todoRouter = require("./routes/todo");

app.get("/", (req, res) => {
  res.send("The app is starting");
});

app.use("/todo", todoRouter);

// Run sever
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
