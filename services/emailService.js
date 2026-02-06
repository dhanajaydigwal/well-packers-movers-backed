const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(data) {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: "Moving Request Received 🚚",
    html: `
      <h2>Hello ${data.name}</h2>
      <p>We received your moving request.</p>
      <b>From:</b> ${data.movingFrom}<br/>
      <b>To:</b> ${data.movingTo}<br/>
      <b>Date:</b> ${data.movingDate}<br/>
      <b>Phone:</b> ${data.phone}<br/>
      <p>We will contact you shortly.</p>
    `,
  });
}

module.exports = sendEmail;