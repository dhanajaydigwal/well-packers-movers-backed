const { z } = require("zod");

const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  movingDate: z.string().min(1, "Moving date is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  movingFrom: z.string().min(2, "Moving from is required"),
  movingTo: z.string().min(2, "Moving to is required"),
  message: z.string().optional(),
});

module.exports = leadSchema;