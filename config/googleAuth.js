const { google } = require("googleapis");
const keys = require("../lead-api.json");

const auth = new google.auth.GoogleAuth({
  credentials: keys,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

module.exports = auth;