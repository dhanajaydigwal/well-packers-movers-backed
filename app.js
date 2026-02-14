const express = require("express");
const cors = require("cors");
require("dotenv").config();

const leadRoutes = require("./routes/leadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Base route for API
app.use("/api", leadRoutes);

module.exports = app;
