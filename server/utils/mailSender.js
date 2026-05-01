const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const mailSender = async (email, title, body) => {
  try {
    console.log("📩 Sending email via Resend to:", email);

    const response = await resend.emails.send({
      from: "FrHelp <onboarding@resend.dev>", // temporary sender
      to: email,
      subject: title,
      html: body,
    });

    console.log("✅ RESEND EMAIL SUCCESS:", response);

    return {
      success: true,
    };

  } catch (error) {
    console.error("❌ RESEND EMAIL ERROR:", error);

    return {
      success: false,
    };
  }
};

module.exports = mailSender;