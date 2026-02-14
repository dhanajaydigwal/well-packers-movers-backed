const { google } = require("googleapis");
const auth = require("../config/googleAuth"); // uses environment variables now

const SPREADSHEET_ID = process.env.SHEET_ID;

async function addToSheet(data) {
  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "Sheet1!A:H",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[
        data.name,
        data.movingDate,
        data.email,
        data.phone,
        data.movingFrom,
        data.movingTo,
        data.message,
        new Date().toLocaleString()
      ]],
    },
  });
}

module.exports = addToSheet;