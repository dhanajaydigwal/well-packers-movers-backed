// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// async function sendEmail(data) {
//   try {
//     const info = await transporter.sendMail({
//       from: `"CarryLog Pack And Move" <${process.env.EMAIL_USER}>`,
//       to: data.email,
//       subject: "Moving Request Received 🚚",
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//           <p>Hello ${data.name},</p>

//           <p>
//             Thank you for choosing <b>CarryLog Pack And Move</b>.
//             We have successfully received your moving request. Here are the details:
//           </p>

//           <table style="border-collapse: collapse; margin-top: 10px;">
//             <tr>
//               <td style="padding:6px 10px;"><b>Moving From</b></td>
//               <td style="padding:6px 10px;">: ${data.movingFrom}</td>
//             </tr>
//             <tr>
//               <td style="padding:6px 10px;"><b>Moving To</b></td>
//               <td style="padding:6px 10px;">: ${data.movingTo}</td>
//             </tr>
//             <tr>
//               <td style="padding:6px 10px;"><b>Moving Date</b></td>
//               <td style="padding:6px 10px;">: ${data.movingDate}</td>
//             </tr>
//             <tr>
//               <td style="padding:6px 10px;"><b>Phone Number</b></td>
//               <td style="padding:6px 10px;">: ${data.phone}</td>
//             </tr>
//           </table>

//           <p style="margin-top: 15px;">
//             Our team will get in touch with you shortly to discuss the next steps and pricing.
//           </p>

//           <p>
//             We look forward to making your move smooth and stress-free 😊
//           </p>

//           <br/>

//           <p>
//             Regards,<br/>
//             <b>CarryLog Pack And Move</b><br/>
//             📞 8949437619<br/>
//             ✉️ ${process.env.EMAIL_USER}
//           </p>
//         </div>
//       `
//     });

//     console.log("Email sent:", info.messageId);
//   } catch (err) {
//     console.error("Email error:", err.message);
//   }
// }



// module.exports = sendEmail;

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(data) {
  try {
    // =========================
    // 1️⃣ CUSTOMER CONFIRMATION MAIL
    // =========================
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

    // =========================
    // 2️⃣ ADMIN LEAD ALERT MAIL
    // =========================
    await transporter.sendMail({
      from: `"CarryLog Lead Alert" <${process.env.EMAIL_USER}>`,
      to: "carrypacklogistics@gmail.com",
      subject: "🚨 New Moving Lead Received",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2>New Lead Details</h2>

          <table style="border-collapse: collapse; margin-top: 10px;">
            <tr>
              <td style="padding:6px 10px;"><b>Name</b></td>
              <td style="padding:6px 10px;">: ${data.name}</td>
            </tr>
            <tr>
              <td style="padding:6px 10px;"><b>Email</b></td>
              <td style="padding:6px 10px;">: ${data.email}</td>
            </tr>
            <tr>
              <td style="padding:6px 10px;"><b>Phone</b></td>
              <td style="padding:6px 10px;">: ${data.phone}</td>
            </tr>
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
          </table>

          <p style="margin-top: 15px;">
            Please contact this customer as soon as possible.
          </p>
        </div>
      `
    });

    console.log("Email sent:", info.messageId);
    console.log("Admin notified successfully ✅");

  } catch (err) {
    console.error("Email error:", err.message);
  }
}

module.exports = sendEmail;
