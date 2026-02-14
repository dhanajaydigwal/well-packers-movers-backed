const serverless = require("serverless-http");
const app = require("../../server"); // relative path from function to server.js

module.exports.handler = serverless(app);
