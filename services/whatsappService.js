// const axios = require("axios");

// async function sendWhatsapp(data) {

//   const message = `
// New Moving Lead 🚚

// Name: ${data.name}
// Phone: ${data.phone}
// From: ${data.movingFrom}
// To: ${data.movingTo}
// Date: ${data.movingDate}
// Message: ${data.message}
//   `;

//   await axios.get(
//     `https://api.callmebot.com/whatsapp.php?phone=${process.env.ADMIN_PHONE}&text=${encodeURIComponent(message)}&apikey=${process.env.WHATSAPP_APIKEY}`
//   );
// }

// module.exports = sendWhatsapp;

const axios = require("axios");

async function sendWhatsapp(data) {

  // =========================
  // 1️⃣ ADMIN MESSAGE
  // =========================
  const adminMessage = `
New Moving Lead 🚚

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
From: ${data.movingFrom}
To: ${data.movingTo}
Date: ${data.movingDate}
Message: ${data.message}
  `;

  await axios.get(
    `https://api.callmebot.com/whatsapp.php?phone=${process.env.ADMIN_PHONE}&text=${encodeURIComponent(adminMessage)}&apikey=${process.env.WHATSAPP_APIKEY}`
  );


  // =========================
  // 2️⃣ CUSTOMER CONFIRMATION MESSAGE
  // =========================
  const customerMessage = `
Hello ${data.name} 👋

Thank you for choosing CarryLog Pack And Move 🚚

We have received your moving request.

From: ${data.movingFrom}
To: ${data.movingTo}
Date: ${data.movingDate}

Our team will contact you shortly.

Regards,
CarryLog Pack And Move
📞 8949437619
✉️ ${process.env.EMAIL_USER}
  `;

  await axios.get(
    `https://api.callmebot.com/whatsapp.php?phone=${data.phone}&text=${encodeURIComponent(customerMessage)}&apikey=${process.env.WHATSAPP_APIKEY}`
  );
}

module.exports = sendWhatsapp;
