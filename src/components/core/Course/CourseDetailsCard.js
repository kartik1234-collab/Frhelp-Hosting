import React from "react";
import copy from "copy-to-clipboard";
import { toast } from "react-hot-toast";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../../slices/cartSlice";
import { ACCOUNT_TYPE } from "../../../utils/constants";

function CourseDetailsCard({ course, setConfirmationModal, handleBuyCourse }) {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { thumbnail, price } = course;

  const handleShare = () => {
    copy(window.location.href);
    toast.success("Link copied");
  };

  const handleAddToCart = () => {
    if (user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("Instructors cannot buy courses");
      return;
    }

    if (!token) {
      setConfirmationModal({
        text1: "Not logged in",
        text2: "Please login to add to cart",
        btn1Text: "Login",
        btn2Text: "Cancel",
        btn1Handler: () => navigate("/login"),
        btn2Handler: () => setConfirmationModal(null),
      });
      return;
    }

    dispatch(addToCart(course));
    toast.success("Added to cart");
    navigate("/dashboard/cart");
  };

  return (
    <div className="relative z-[30] pointer-events-auto flex flex-col gap-5 rounded-2xl bg-gradient-to-br from-richblack-800 via-richblack-700 to-richblack-800 p-5 text-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-yellow-400/20">

      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={thumbnail}
          alt={course.courseName}
          className="h-[210px] w-full object-cover transition-all duration-700 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* PRICE */}
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-yellow-300">
          ₹ {price}
        </span>
        <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
          Premium
        </span>
      </div>

      {/* BUTTONS */}
      <button
        className="relative z-[40] overflow-hidden rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 px-6 py-3 text-lg font-bold text-richblack-900 shadow-lg transition-all duration-300 hover:shadow-yellow-400/50 active:scale-[0.97]"
        onClick={handleBuyCourse}
      >
        Buy Now
        <span className="absolute inset-0 -translate-x-full bg-white/40 transition-transform duration-700 hover:translate-x-full" />
      </button>

      <button
        onClick={handleAddToCart}
        className="relative z-[40] rounded-xl border border-richblack-500 bg-richblack-700 px-6 py-3 font-semibold transition-all duration-300 hover:border-yellow-400/60 hover:bg-richblack-600 hover:text-yellow-200"
      >
        Add to Cart
      </button>

      {/* COURSE INCLUDES */}
      <div>
        <p className="mb-2 text-lg font-semibold">This Course Includes</p>
        <div className="flex flex-col gap-2 text-sm text-caribbeangreen-200">
          {course.instructions?.map((item, i) => (
            <div key={i} className="flex gap-2">
              <BsFillCaretRightFill className="mt-1" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SHARE */}
      <button
        onClick={handleShare}
        className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-yellow-200 hover:text-yellow-100"
      >
        <FaShareSquare />
        Share course
      </button>
    </div>
  );
}

export default CourseDetailsCard;
