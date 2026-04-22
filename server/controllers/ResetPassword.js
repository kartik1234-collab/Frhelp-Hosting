const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

// ================= RESET PASSWORD TOKEN =================
exports.resetPasswordToken = async (req, res) => {
  try {
    const { email } = req.body;

    console.log("🔐 Reset password token request for:", email);

    // 1️⃣ Check user
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found for email:", email);
      return res.json({
        success: false,
        message: "Email is not registered",
      });
    }

    // 2️⃣ Generate token
    const token = crypto.randomBytes(20).toString("hex");

    // 3️⃣ Save token & expiry
    user.token = token;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000; // 15 min
    await user.save();

    console.log("✅ Token generated:", token);

    // 4️⃣ Create reset link
    const resetLink = `${process.env.FRONTEND_URL}/update-password/${token}`;

    console.log("📧 Sending reset email to:", email);
    console.log("🔗 Reset link:", resetLink);

    // 5️⃣ Send EMAIL (HTML – DELIVERABLE)
    await mailSender(
      email,
      "Reset Your Password",
      `
        <h2>FrHelp – Password Reset Request</h2>
		<p>You requested to reset your FrHelp account password.</p>


        <p>
          <a href="${resetLink}"
             style="
               display:inline-block;
               padding:12px 20px;
               background:#4f46e5;
               color:#ffffff;
               text-decoration:none;
               border-radius:6px;
               font-weight:bold;
             ">
            Reset Password
          </a>
        </p>

        <p>This link is valid for 15 minutes.</p>
        <p>If you did not request this, please ignore this email.</p>
      `
    );

    console.log("✅ Reset password email sent successfully");

    return res.json({
      success: true,
      message: "Reset password email sent successfully",
    });

  } catch (error) {
    console.error("❌ RESET PASSWORD TOKEN ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Error while sending reset password email",
    });
  }
};

// ================= RESET PASSWORD =================
exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body;

    console.log("🔁 Reset password attempt with token:", token);

    // 1️⃣ Validate passwords
    if (password !== confirmPassword) {
      return res.json({
        success: false,
        message: "Passwords do not match",
      });
    }

    // 2️⃣ Find user by token
    const user = await User.findOne({ token });
    if (!user) {
      return res.json({
        success: false,
        message: "Invalid token",
      });
    }

    // 3️⃣ Check expiry
    if (user.resetPasswordExpires < Date.now()) {
      return res.json({
        success: false,
        message: "Token expired. Please request again.",
      });
    }

    // 4️⃣ Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5️⃣ Update password & clear token
    user.password = hashedPassword;
    user.token = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    console.log("✅ Password reset successful for user:", user.email);

    return res.json({
      success: true,
      message: "Password reset successful",
    });

  } catch (error) {
    console.error("❌ RESET PASSWORD ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Error while resetting password",
    });
  }
};
