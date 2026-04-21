// const express = require("express");
// const app = express();
// require("dotenv").config();

// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const fileUpload = require("express-fileupload");

// const userRoutes = require("./routes/User");
// const profileRoutes = require("./routes/Profile");
// const paymentRoutes = require("./routes/Payments");
// const courseRoutes = require("./routes/Course");

// const { cloudinaryConnect } = require("./config/cloudinary");
// const dbConnect = require("./config/database");

// // ✅ CONNECT DB ONCE
// dbConnect.connect();

// const PORT = process.env.PORT || 4000;
// console.log("MONGO URL:", process.env.MONGODB_URL);

// // Middlewares
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true,
// }));
// app.use(fileUpload({
//   useTempFiles: true,
//   tempFileDir: "/tmp",
// }));

// cloudinaryConnect();

// // Routes
// app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/payments", paymentRoutes);
// app.use("/api/v1/course", courseRoutes);

// // Test route
// app.get("/", (req, res) => {
//   res.json({ success: true, message: "Server is running" });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const courseRoutes = require("./routes/Course");
const contactUsRoute = require("./routes/Contact");
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect } = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const aiRoutes = require("./routes/AI");

dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();
//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"*",
		credentials:true,
	})
);

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)
//cloudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/reach", contactUsRoute);
app.use("/api/v1/AI", aiRoutes);
//def route

app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

