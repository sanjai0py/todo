"use strict";

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Init
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log(module);
  res.send("SMD");
});

// Run sever
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
