const axios = require("axios");

async function sendWhatsapp(data) {

  const message = `
New Moving Lead 🚚

Name: ${data.name}
Phone: ${data.phone}
From: ${data.movingFrom}
To: ${data.movingTo}
Date: ${data.movingDate}
Message: ${data.message}
  `;

  await axios.get(
    `https://api.callmebot.com/whatsapp.php?phone=${process.env.ADMIN_PHONE}&text=${encodeURIComponent(message)}&apikey=${process.env.WHATSAPP_APIKEY}`
  );
}

module.exports = sendWhatsapp;