const otpTemplate = (otp) => {
	return `<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<title>OTP Verification Email</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}

			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}

			.logo {
				max-width: 200px;
				margin-bottom: 20px;
			}

			.message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}

			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}

			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}

			.highlight {
				font-weight: bold;
			}
		</style>
	</head>

	<body>
		<div class="container">

			<!-- LOGO (Cloudinary) -->
			<a href="https://frhelp.vercel.app">
				<img
					class="logo"
					src="https://res.cloudinary.com/dwhowsl5j/image/upload/w_200,q_auto,f_auto/v1768115157/K_d6r9aj.jpg"
					alt="FrHelp Logo"
				/>
			</a>

			<div class="message">OTP Verification Email</div>
			<h2 class="highlight">${otp}</h2>
			<div class="body">
				<p>Dear User,</p>
				<p>
					Thank you for registering with FrHelp. To complete your registration,
					please use the following OTP (One-Time Password) to verify your account:
				</p>

				

				<p>
					This OTP is valid for 5 minutes. If you did not request this verification,
					please ignore this email.
				</p>
			</div>

			<div class="support">
				If you have any questions, contact us at
				<a href="mailto:kartiksahu3114@gmail.com">kartiksahu3114@gmail.com</a>
			</div>
		</div>
	</body>
	</html>`;
};

module.exports = otpTemplate;
