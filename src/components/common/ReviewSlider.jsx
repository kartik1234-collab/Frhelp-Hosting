import React, { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import { FreeMode, Pagination, Autoplay } from "swiper/modules"

import ReactStars from "react-rating-stars-component"
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"
import { FaStar } from "react-icons/fa"

const ReviewSlider = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const { data } = await apiConnector(
          "GET",
          ratingsEndpoints.REVIEWS_DETAILS_API
        )

        if (data?.success) {
          setReviews(data?.data)
        }
      } catch (error) {
        console.log("Error fetching reviews", error)
      }
    }

    fetchAllReviews()
  }, [])

  return (
    <div className="text-white w-full">
      <div className="max-w-6xl mx-auto py-10">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          spaceBetween={24}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-richblack-800 p-5 rounded-xl shadow-lg h-full flex flex-col gap-3">

                {/* USER */}
                <div className="flex items-center gap-3">
                  <img
                    src={
                      review?.user?.image
                        ? review?.user?.image
                        : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                    }
                    alt="Profile"
                    className="h-10 w-10 object-cover rounded-full"
                  />
                  <div>
                    <p className="font-semibold">
                      {review?.user?.firstName} {review?.user?.lastName}
                    </p>
                    <p className="text-sm text-richblack-300">
                      {review?.course?.courseName}
                    </p>
                  </div>
                </div>

                {/* REVIEW TEXT */}
                <p className="text-sm text-richblack-200 line-clamp-3">
                  {review?.review}
                </p>

                {/* RATING */}
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-yellow-400 font-semibold">
                    {review?.rating?.toFixed(1)}
                  </span>
                  <ReactStars
                    count={5}
                    value={review?.rating}
                    size={18}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ReviewSlider
