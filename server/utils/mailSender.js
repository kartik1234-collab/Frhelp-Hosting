const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"FrHelp" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("✅ EMAIL SENT:", info.response);

    return {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);

    return {
      success: false,
      message: "Email failed",
    };
  }
};

module.exports = mailSender;