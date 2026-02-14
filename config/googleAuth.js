const { google } = require("googleapis");

// Use environment variable on Netlify, fallback to local JSON for dev
let keys;
if (process.env.LEAD_API_JSON) {
  keys = JSON.parse(process.env.LEAD_API_JSON);
} else {
  keys = require("../lead-api.json"); // local dev only
}

const auth = new google.auth.GoogleAuth({
  credentials: keys,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

module.exports = auth;
