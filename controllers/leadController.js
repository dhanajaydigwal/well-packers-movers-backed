const leadSchema = require("../validators/leadValidator");
const addToSheet = require("../services/googleSheetService");
const sendEmail = require("../services/emailService");
const sendWhatsapp = require("../services/whatsappService");

exports.createLead = async (req, res) => {
  try {

    // ✅ VALIDATION
    const validatedData = leadSchema.parse(req.body);

    // Google Sheet
    await addToSheet(validatedData);

    await sendEmail(validatedData);

    // WhatsApp
    // await sendWhatsapp(validatedData);

    res.status(201).json({
      statsCode: 200,
      message: "Lead created successfully",
    });

  } catch (error) {

    // Zod Validation Error
    if (error.name === "ZodError") {
  return res.status(400).json({
    success: false,
    errors: error.issues.map(err => ({
      field: err.path[0],
      message: err.message
    }))
  });
}


    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};