const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// async function sendEmail(data) {
//   try {
//     const info = await transporter.sendMail({
//       from: `"CarryLog Packs And Move" <${process.env.EMAIL_USER}>`,
//       to: data.email,
//       subject: "Moving Request Received 🚚",
//       html: `
//   <div style="font-family: Arial, sans-serif; line-height: 1.6;">
//     <h2>Moving Request Received 🚚</h2>

//     <p>Thank you for contacting <b>CarryLog Packs And Move</b>.</p>

//     <p>We have successfully received a moving request with the following details:</p>

//     <table style="border-collapse: collapse;">
//       <tr>
//         <td><b>Moving From</b></td>
//         <td>: ${data.movingFrom}</td>
//       </tr>
//       <tr>
//         <td><b>Moving To</b></td>
//         <td>: ${data.movingTo}</td>
//       </tr>
//       <tr>
//         <td><b>Moving Date</b></td>
//         <td>: ${data.movingDate}</td>
//       </tr>
//       <tr>
//         <td><b>Phone Number</b></td>
//         <td>: ${data.phone}</td>
//       </tr>
//     </table>

//     <p>Our team will contact you shortly to assist you with your move.</p>

//     <p>Thank you for choosing <b>CarryLog Packs And Move</b>.</p>

//     <br/>
//     <p>
//       Regards,<br/>
//       <b>Well Packers & Movers</b><br/>
//       📞 8949437619
//     </p>
//   </div>
// `


//     });

//     console.log("Email sent:", info.messageId);
//   } catch (err) {
//     console.error("Email error:", err.message);
//   }
// }

async function sendEmail(data) {
  try {
    const info = await transporter.sendMail({
      from: `"CarryLog Pack And Move" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Moving Request Received 🚚",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>Hello ${data.name},</p>

          <p>
            Thank you for choosing <b>CarryLog Pack And Move</b>.
            We have successfully received your moving request. Here are the details:
          </p>

          <table style="border-collapse: collapse; margin-top: 10px;">
            <tr>
              <td style="padding:6px 10px;"><b>Moving From</b></td>
              <td style="padding:6px 10px;">: ${data.movingFrom}</td>
            </tr>
            <tr>
              <td style="padding:6px 10px;"><b>Moving To</b></td>
              <td style="padding:6px 10px;">: ${data.movingTo}</td>
            </tr>
            <tr>
              <td style="padding:6px 10px;"><b>Moving Date</b></td>
              <td style="padding:6px 10px;">: ${data.movingDate}</td>
            </tr>
            <tr>
              <td style="padding:6px 10px;"><b>Phone Number</b></td>
              <td style="padding:6px 10px;">: ${data.phone}</td>
            </tr>
          </table>

          <p style="margin-top: 15px;">
            Our team will get in touch with you shortly to discuss the next steps and pricing.
          </p>

          <p>
            We look forward to making your move smooth and stress-free 😊
          </p>

          <br/>

          <p>
            Regards,<br/>
            <b>CarryLog Pack And Move</b><br/>
            📞 8949437619<br/>
            ✉️ ${process.env.EMAIL_USER}
          </p>
        </div>
      `
    });

    console.log("Email sent:", info.messageId);
  } catch (err) {
    console.error("Email error:", err.message);
  }
}



module.exports = sendEmail;