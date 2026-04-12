import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  cart: [],
  total: 0,
  totalItems: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const course = action.payload
      const exists = state.cart.find((item) => item._id === course._id)

      if (exists) {
        toast.error("Course already in cart")
        return
      }

      state.cart.push(course)
      state.total += course.price
      state.totalItems += 1

      toast.success("Course added to cart")
    },

    removeFromCart: (state, action) => {
      const courseId = action.payload
      const course = state.cart.find((item) => item._id === courseId)

      if (!course) return

      state.cart = state.cart.filter((item) => item._id !== courseId)
      state.total -= course.price
      state.totalItems -= 1

      toast.success("Course removed from cart")
    },

    resetCart: (state) => {
      state.cart = []
      state.total = 0
      state.totalItems = 0
    },
  },
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions
export default cartSlice.reducer
