// api/send-message.js
import nodemailer from "nodemailer";
import Cors from "cors";

// Initialize CORS middleware
const cors = Cors({
  origin: "*", // allow all origins (GitHub Pages, localhost, etc.)
  methods: ["POST"],
});

// Helper to run middleware in Next.js / Vercel function
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) reject(result);
      else resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run CORS
  await runMiddleware(req, res, cors);

  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  // Configure nodemailer with Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your Gmail
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // your email to receive messages
      replyTo: email,
      subject: "New Portfolio Contact Message",
      text: message,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({ success: false, error: "Failed to send email" });
  }
}
