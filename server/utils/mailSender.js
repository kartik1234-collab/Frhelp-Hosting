const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    console.log("📩 Attempting to send email...");

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      connectionTimeout: 10000, // 10 sec
    });

    const info = await transporter.sendMail({
      from: `"FrHelp" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("✅ EMAIL SENT:", info.response);
    return info;

  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);
    throw error; // 🚨 IMPORTANT
  }
};

module.exports = mailSender;