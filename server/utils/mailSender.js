// const nodemailer = require("nodemailer");

// const mailSender = async (email, title, body) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     const info = await transporter.sendMail({
//       from: `"FrHelp" <${process.env.MAIL_USER}>`,
//       to: email,
//       subject: title,
//       html: body,
//     });

//     console.log("EMAIL SENT:", info.response);
//     return info;
//   } catch (error) {
//     console.error("EMAIL ERROR:", error);
//     throw error;
//   }
// };

// module.exports = mailSender;

const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const mailSender = async (email, title, body) => {
  try {
    const response = await resend.emails.send({
      from: "FrHelp <onboarding@resend.dev>",
      to: email,
      subject: title,
      html: body,
    });

    console.log("✅ Email sent:", response);
    return response;
  } catch (error) {
    console.error("❌ Email error:", error);
    throw error;
  }
};

module.exports = mailSender;