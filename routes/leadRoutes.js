const express = require("express");
const router = express.Router();
const { createLead } = require("../controllers/leadController");

router.post("/lead", createLead);

module.exports = router;
