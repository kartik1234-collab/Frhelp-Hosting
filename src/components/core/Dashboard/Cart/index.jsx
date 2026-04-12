import { useSelector } from "react-redux"

import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";



export default function Cart() {

    const {total, totalItems} = useSelector((state)=>state.cart);


    return (
  <div className="mx-auto max-w-5xl px-6 py-10 text-richblack-5">
    <h1 className="mb-2 text-3xl font-bold tracking-tight">
      Your Cart
    </h1>
    <p className="mb-8 text-richblack-300">
      {totalItems} course(s) selected
    </p>

    {total > 0 ? (
      <div className="grid gap-8 lg:grid-cols-3">

        {/* CART COURSES */}
        <div className="lg:col-span-2 rounded-2xl border border-richblack-600 bg-richblack-800 p-6">
          <RenderCartCourses />
        </div>

        {/* TOTAL */}
        <div className="sticky top-24 h-fit rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-richblack-800 to-richblack-700 p-6 shadow-lg">
          <RenderTotalAmount />
        </div>
      </div>
    ) : (
      <div className="rounded-2xl border border-richblack-600 bg-richblack-800 p-10 text-center">
        <p className="text-lg text-richblack-300">
          Your cart is empty.
        </p>
      </div>
    )}
  </div>
)

}