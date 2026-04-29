// import { toast } from "react-hot-toast"

// import { setLoading, setToken } from "../../slices/authSlice"
// import { resetCart } from "../../slices/cartSlice"
// import { setUser } from "../../slices/profileSlice"
// import { apiConnector } from "../apiconnector"
// import { endpoints } from "../apis"

// const {
//   SENDOTP_API,
//   SIGNUP_API,
//   LOGIN_API,
//   RESETPASSTOKEN_API,
//   RESETPASSWORD_API,
// } = endpoints

// // export function sendOtp(email, navigate) {
// //   return async (dispatch) => {
// //     const toastId = toast.loading("Loading...")
// //     dispatch(setLoading(true))
// //     try {
// //       const response = await apiConnector("POST", SENDOTP_API, {
// //         email,
// //         checkUserPresent: true,
// //       })
// //       console.log("SENDOTP API RESPONSE............", response)

// //       console.log(response.data.success)

// //       if (!response.data.success) {
// //         throw new Error(response.data.message)
// //       }

// //       toast.success("OTP Sent Successfully")
// //       navigate("/verify-email")
// //     } catch (error) {
// //       console.log("SENDOTP API ERROR............", error)
// //       toast.error("Could Not Send OTP")
// //     }
// //     dispatch(setLoading(false))
// //     toast.dismiss(toastId)
// //   }
// // }
// export function sendOtp(email, navigate) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Sending OTP...");
//     dispatch(setLoading(true));

//     try {
//       const response = await apiConnector("POST", SENDOTP_API, {
//         email,
//         checkUserPresent: true,
//       });

//       console.log("SENDOTP API RESPONSE............", response);

//       if (!response.data.success) {
//         throw new Error(response.data.message);
//       }

//       const otp = response.data.otp;

//       // 🔥 CUSTOM TOAST WITH COPY BUTTON
//       toast.custom((t) => (
//         <div
//           className={`bg-white shadow-lg rounded-lg p-4 border border-gray-200 w-[300px] ${
//             t.visible ? "animate-enter" : "animate-leave"
//           }`}
//         >
//           <p className="text-sm text-gray-500 mb-1">Your OTP</p>

//           <div className="flex items-center justify-between">
//             <span className="text-xl font-bold tracking-widest">
//               {otp}
//             </span>

//             <button
//               onClick={() => {
//                 navigator.clipboard.writeText(otp);
//                 toast.success("Copied!");
//               }}
//               className="text-blue-600 text-sm font-medium hover:underline"
//             >
//               Copy
//             </button>
//           </div>
//         </div>
//       ), { duration: 6000 });

//       navigate("/verify-email");

//     } catch (error) {
//       console.log("SENDOTP API ERROR............", error);
//       toast.error("Could Not Send OTP");
//     }

//     dispatch(setLoading(false));
//     toast.dismiss(toastId);
//   };
// }


// export function signUp(
//   accountType,
//   firstName,
//   lastName,
//   email,
//   password,
//   confirmPassword,
//   otp,
//   navigate
// ) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     dispatch(setLoading(true))
//     try {
//       const response = await apiConnector("POST", SIGNUP_API, {
//         accountType,
//         firstName,
//         lastName,
//         email,
//         password,
//         confirmPassword,
//         otp,
//       })

//       console.log("SIGNUP API RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }
//       toast.success("Signup Successful")
//       navigate("/login")
//     } catch (error) {
//       console.log("SIGNUP API ERROR............", error)
//       toast.error("Signup Failed")
//       navigate("/signup")
//     }
//     dispatch(setLoading(false))
//     toast.dismiss(toastId)
//   }
// }

// export function login(email, password, navigate) {
//   return async (dispatch) => {
//     const toastId = toast.loading("Loading...")
//     dispatch(setLoading(true))
//     try {
//       const response = await apiConnector("POST", LOGIN_API, {
//         email,
//         password,
//       })

//       console.log("LOGIN API RESPONSE............", response)

//       if (!response.data.success) {
//         throw new Error(response.data.message)
//       }

//       toast.success("Login Successful")

//       const token = response.data.token

// dispatch(setToken(token))
// localStorage.setItem("token",token)



//       const userImage = response.data?.user?.image
//         ? response.data.user.image
//         : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`

//       dispatch(setUser({ ...response.data.user, image: userImage }))

      
//       localStorage.setItem("user", JSON.stringify(response.data.user))

//       navigate("/dashboard/my-profile")

//     } catch (error) {
//       console.log("LOGIN API ERROR............", error)
//       toast.error("Login Failed")
//     }
//     dispatch(setLoading(false))
//     toast.dismiss(toastId)
//   }
// }



// export function logout(navigate) {
//   return (dispatch) => {
//     dispatch(setToken(null))
//     dispatch(setUser(null))
//     dispatch(resetCart())
//     localStorage.removeItem("token")
//     localStorage.removeItem("user")
//     toast.success("Logged Out")
//     navigate("/")
//   }
// }



// export function getPasswordResetToken(email , setEmailSent) {
//   return async(dispatch) => {
//     dispatch(setLoading(true));
//     try{
//       const response = await apiConnector("POST", RESETPASSTOKEN_API, {email,})

//       console.log("RESET PASSWORD TOKEN RESPONSE....", response);

//       if(!response.data.success) {
//         throw new Error(response.data.message);
//       }

//       toast.success("Reset Email Sent");
//       setEmailSent(true);
//     }
//     catch(error) {
//       console.log("RESET PASSWORD TOKEN Error", error);
//       toast.error("Failed to send email for resetting password");
//     }
//     dispatch(setLoading(false));
//   }
// }

// export function resetPassword(password, confirmPassword, token) {
//   return async(dispatch) => {
//     dispatch(setLoading(true));
//     try{
//       const response = await apiConnector("POST", RESETPASSWORD_API, {password, confirmPassword, token});

//       console.log("RESET Password RESPONSE ... ", response);


//       if(!response.data.success) {
//         throw new Error(response.data.message);
//       }

//       toast.success("Password has been reset successfully");
//     }
//     catch(error) {
//       console.log("RESET PASSWORD TOKEN Error", error);
//       toast.error("Unable to reset password");
//     }
//     dispatch(setLoading(false));
//   }
// }

export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const toastId = toast.loading("Generating reset link...");

    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, { email });

      console.log("RESET PASSWORD TOKEN RESPONSE....", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      const resetLink = response.data.resetLink;

      // 🔥 PROFESSIONAL TOAST WITH BUTTON
      toast.custom((t) => (
        <div className="bg-white shadow-lg rounded-lg p-4 border w-[320px]">
          <p className="text-sm text-gray-500 mb-2">Reset Password</p>

          <button
            onClick={() => window.open(resetLink, "_blank")}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
          >
            Open Reset Page
          </button>
        </div>
      ), { duration: 6000 });

      setEmailSent(true);

    } catch (error) {
      console.log("RESET PASSWORD TOKEN Error", error);
      toast.error("Failed to generate reset link");
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}