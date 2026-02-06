// const express = require("express");
// const cors = require("cors");
// const router = express.Router();
// require("dotenv").config();

// const leadRoutes = require("./routes/leadRoutes");
// const { createLead } = require("./controllers/leadController");

// const app = express();

// app.use(cors());
// app.use(express.json());

// router.post("/lead", createLead);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on ${PORT}`));

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const leadRoutes = require("./routes/leadRoutes"); // ✅ make sure path is correct

const app = express();

app.use(cors());
app.use(express.json()); // ✅ must be BEFORE the routes

app.use("/api", leadRoutes); // ✅ all routes inside leadRoutes are prefixed with /api

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
