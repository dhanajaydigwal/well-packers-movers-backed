// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const leadRoutes = require("./routes/leadRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api", leadRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on ${PORT}`));

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const leadRoutes = require("./routes/leadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", leadRoutes);

module.exports = app;
