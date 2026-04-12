import { toast } from "react-hot-toast";
import { studentEndpoints } from "../apis";
import { apiConnector } from "../apiconnector";
import rzpLogo from "../../assets/Logo/rzp_logo.png";
import { setPaymentLoading } from "../../slices/courseSlice";
import { resetCart } from "../../slices/cartSlice";

const {
  COURSE_PAYMENT_API,
  COURSE_VERIFY_API,
  SEND_PAYMENT_SUCCESS_EMAIL_API,
} = studentEndpoints;

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function buyCourse(token, courses, userDetails, navigate, dispatch) {
  const toastId = toast.loading("Loading...");
  try {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      toast.error("Razorpay SDK failed to load");
      return;
    }

    // 🔥 NO AUTH HEADER HERE (interceptor handles it)
    const orderResponse = await apiConnector(
      "POST",
      COURSE_PAYMENT_API,
      { courses }
    );

    if (!orderResponse.data.success) {
      throw new Error(orderResponse.data.message);
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      currency: orderResponse.data.data.currency,
      amount: `${orderResponse.data.data.amount}`,
      order_id: orderResponse.data.data.id,
      name: "FrHelp",
      description: "Thank you for purchasing the course",
      image: rzpLogo,
      prefill: {
        name: userDetails.firstName,
        email: userDetails.email,
      },
      handler: function (response) {
        sendPaymentSuccessEmail(response, orderResponse.data.data.amount);
        verifyPayment(
          { ...response, courses },
          navigate,
          dispatch
        );
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

    paymentObject.on("payment.failed", function () {
      toast.error("Payment failed");
    });

  } catch (error) {
    console.log("PAYMENT API ERROR:", error);
    toast.error("Could not make payment");
  }
  toast.dismiss(toastId);
}

async function sendPaymentSuccessEmail(response, amount) {
  try {
    await apiConnector("POST", SEND_PAYMENT_SUCCESS_EMAIL_API, {
      orderId: response.razorpay_order_id,
      paymentId: response.razorpay_payment_id,
      amount,
    });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
  }
}

async function verifyPayment(bodyData, navigate, dispatch) {
  const toastId = toast.loading("Verifying payment...")
  dispatch(setPaymentLoading(true))

  try {
    const response = await apiConnector(
      "POST",
      COURSE_VERIFY_API,
      bodyData
    )

    console.log("VERIFY RESPONSE:", response) // 👈 ADD THIS

    if (!response.data.success) {
      throw new Error(response.data.message)
    }

    toast.success("Payment successful 🎉")

    dispatch(resetCart())

    // ✅ FORCE REFRESH USER DATA (IMPORTANT)
    window.location.href = "/dashboard/enrolled-courses"

  } catch (error) {
    console.log("VERIFY ERROR:", error)
    toast.error("Payment verification failed")
  }

  toast.dismiss(toastId)
  dispatch(setPaymentLoading(false))
}
