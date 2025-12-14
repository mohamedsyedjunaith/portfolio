import nodemailer from "nodemailer";

export default async function handler(req, res) {

  // ✅ CORS HEADERS (MUST)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ PRE-FLIGHT REQUEST (browser sends this FIRST)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ❌ Block everything except POST
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "Email and message required",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,   // ✅ correct
        pass: process.env.EMAIL_PASS,   // ✅ correct
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "syedjunaith455@gmail.com",
      subject: "New Portfolio Message",
      text: `From: ${email}\n\n${message}`,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
}
