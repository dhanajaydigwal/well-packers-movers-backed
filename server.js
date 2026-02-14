// // const express = require("express");
// // const cors = require("cors");
// // const router = express.Router();
// // require("dotenv").config();

// // const leadRoutes = require("./routes/leadRoutes");
// // const { createLead } = require("./controllers/leadController");

// // const app = express();

// // app.use(cors());
// // app.use(express.json());

// // router.post("/lead", createLead);

// // const PORT = 5000;
// // app.listen(PORT, () => console.log(`Server running on ${PORT}`));

// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const leadRoutes = require("./routes/leadRoutes"); 

// const app = express();

// app.use(cors());
// app.use(express.json()); 

// app.use("/api", leadRoutes); 

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on ${PORT}`));
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const leadRoutes = require("./routes/leadRoutes"); 

const app = express();

app.use(cors());
app.use(express.json());

// Base API route
app.use("/api", leadRoutes);

if (process.env.LOCAL === "true") {
  // Only listen when running locally
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app; // Export app for Netlify
