const nodemailer = require("nodemailer");


const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: `"FrHelp Support" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("✅ EMAIL SENT:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ MAIL SENDER ERROR:", error);
    throw error;
  }
};

module.exports = mailSender;
