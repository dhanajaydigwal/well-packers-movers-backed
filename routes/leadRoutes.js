const express = require("express");
const router = express.Router();

const { createLead } = require("../controllers/leadController");

// 👇 URL yahin define hota hai
router.post("/lead", createLead);

module.exports = router;