// api/send-message.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Message",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ status: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ status: "Failed to send email" });
  }
}
