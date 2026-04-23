const bcrypt = require("bcrypt");
const User = require("../models/User");
const OTP = require("../models/OTP");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const mailSender = require("../utils/mailSender");
const { passwordUpdated } = require("../mail/templates/passwordUpdate");
const Profile = require("../models/Profile");
require("dotenv").config();

// ================= SIGNUP =================
exports.signup = async (req, res) => {
	try {
		const {
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
			accountType,
			contactNumber,
			otp,
		} = req.body;

		if (
			!firstName ||
			!lastName ||
			!email ||
			!password ||
			!confirmPassword ||
			!otp
		) {
			return res.status(403).json({
				success: false,
				message: "All fields are required",
			});
		}

		if (password !== confirmPassword) {
			return res.status(400).json({
				success: false,
				message: "Password and Confirm Password do not match",
			});
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists",
			});
		}

		const recentOtp = await OTP.find({ email })
			.sort({ createdAt: -1 })
			.limit(1);

		if (recentOtp.length === 0 || otp !== recentOtp[0].otp) {
			return res.status(400).json({
				success: false,
				message: "Invalid OTP",
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const profileDetails = await Profile.create({
			gender: null,
			dateOfBirth: null,
			about: null,
			contactNumber: null,
		});

		const user = await User.create({
			firstName,
			lastName,
			email,
			contactNumber,
			password: hashedPassword,
			accountType,
			approved: accountType === "Instructor" ? false : true,
			additionalDetails: profileDetails._id,
			image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
		});

		return res.status(200).json({
			success: true,
			user,
			message: "User registered successfully",
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "User cannot be registered",
		});
	}
};

// ================= LOGIN =================
// ================= LOGIN =================
exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "All fields are required",
			});
		}

		const user = await User.findOne({ email }).populate("additionalDetails");

		if (!user) {
			return res.status(401).json({
				success: false,
				message: "User not registered",
			});
		}

		// 🔴 ADD THIS BLOCK
		if (user.accountType === "Instructor" && !user.approved) {
			return res.status(403).json({
				success: false,
				message: "Instructor account not approved yet",
			});
		}

		if (await bcrypt.compare(password, user.password)) {
			const token = jwt.sign(
				{
					email: user.email,
					id: user._id,
					accountType: user.accountType,
				},
				process.env.JWT_SECRET,
				{ expiresIn: "24h" }
			);

			user.token = token;
			user.password = undefined;

			res.cookie("token", token, {
				httpOnly: true,
				expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
			});

			return res.status(200).json({
				success: true,
				token,
				user,
				message: "Login successful",
			});
		}

		return res.status(401).json({
			success: false,
			message: "Incorrect password",
		});
	} catch (error) {
		console.error(error);
		return res.status(500).json({
			success: false,
			message: "Login failed",
		});
	}
};


// ================= SEND OTP =================
exports.sendotp = async (req, res) => {
  try {
    console.log("🔥 SEND OTP FUNCTION HIT");

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // check user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    // generate OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    console.log("✅ Generated OTP:", otp);

    // save OTP in DB
    await OTP.create({ email, otp });

    // 🔥 SEND EMAIL (THIS WAS MISSING / BROKEN)
    await mailSender(
      email,
      "Your OTP for FrHelp Signup",
      `<h2>Your OTP is: ${otp}</h2>`
    );

    console.log("📧 EMAIL SENT SUCCESSFULLY");

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.error("❌ SEND OTP ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send OTP",
    });
  }
};


// ================= CHANGE PASSWORD =================
exports.changePassword = async (req, res) => {
	try {
		const userDetails = await User.findById(req.user.id);

		const { oldPassword, newPassword, confirmNewPassword } = req.body;

		const isMatch = await bcrypt.compare(
			oldPassword,
			userDetails.password
		);

		if (!isMatch) {
			return res.status(401).json({
				success: false,
				message: "Incorrect old password",
			});
		}

		if (newPassword !== confirmNewPassword) {
			return res.status(400).json({
				success: false,
				message: "Passwords do not match",
			});
		}

		const encryptedPassword = await bcrypt.hash(newPassword, 10);

		const updatedUser = await User.findByIdAndUpdate(
			req.user.id,
			{ password: encryptedPassword },
			{ new: true }
		);

		await mailSender(
			updatedUser.email,
			passwordUpdated(
				updatedUser.email,
				`Password updated for ${updatedUser.firstName}`
			)
		);

		return res.status(200).json({
			success: true,
			message: "Password updated successfully",
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: "Password update failed",
		});
	}
};
