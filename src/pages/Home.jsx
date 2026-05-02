import { FaSquareArrowUpRight } from "react-icons/fa6"
import React from "react"
import { Link } from "react-router-dom"
import HighlightText from "../components/core/HomePage/HighlightText"

import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from "../components/core/HomePage/TimelineSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import Footer from "../components/common/Footer"
import ExploreMore from "../components/core/HomePage/ExploreMore"

const Home = () => {
  return (
    <div className="bg-richblack-900 text-white">

      {/* ================= HERO ================= */}
      <div className="relative mx-auto flex flex-col items-center 
        w-11/12 max-w-maxContent px-4">

        {/* CTA */}
        <Link to="/signup">
          <div className="group mt-12 p-[2px] rounded-full 
            bg-gradient-to-r from-blue-400 to-purple-500">

            <div className="flex items-center gap-2 px-6 py-2
              bg-richblack-800 rounded-full text-sm md:text-base
              group-hover:bg-richblack-900 transition">
              Become an Instructor
              <FaSquareArrowUpRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl 
          font-semibold mt-8 leading-tight">
          Empower Your Future with
          <HighlightText text={" Coding Skills"} />
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-center text-sm sm:text-base md:text-lg 
          text-richblack-300 max-w-[700px]">
          Learn at your own pace from anywhere in the world with hands-on projects,
          quizzes, and expert guidance.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <CTAButton active linkto="/signup">Learn More</CTAButton>
          <CTAButton active={false} linkto="/login">Book a Demo</CTAButton>
        </div>

        {/* Video */}
        <div className="w-full max-w-[900px] mt-12">
          <div className="rounded-xl overflow-hidden shadow-lg border border-richblack-700">
            <video muted loop autoPlay className="w-full h-auto">
              <source src={Banner} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Code Sections */}
        <div className="mt-16 w-full">
          <CodeBlocks position="lg:flex-row" />
        </div>

        <div className="mt-16 w-full">
          <CodeBlocks position="lg:flex-row-reverse" />
        </div>

        <ExploreMore />
      </div>

      {/* ================= SECTION 2 ================= */}
      <div className="bg-pure-greys-5 text-richblack-700 py-16">

        <div className="mx-auto w-11/12 max-w-maxContent">

          {/* Heading + Content */}
          <div className="flex flex-col lg:flex-row gap-10">

            <div className="text-2xl md:text-4xl font-semibold lg:w-1/2">
              Get the Skills you need for a
              <HighlightText text={" Job that is in demand"} />
            </div>

            <div className="flex flex-col gap-6 lg:w-1/2">
              <p className="text-sm md:text-base">
                Stay ahead in the modern tech world by learning skills that matter.
              </p>

              <CTAButton active linkto="/signup">
                Learn more
              </CTAButton>
            </div>

          </div>

          {/* Sections */}
          <div className="mt-16">
            <TimelineSection />
          </div>

          <div className="mt-16">
            <LearningLanguageSection />
          </div>

        </div>
      </div>

      {/* ================= SECTION 3 ================= */}
      <div className="w-11/12 mx-auto max-w-maxContent py-16">

        <InstructorSection />

        <h2 className="text-center text-2xl md:text-4xl font-semibold mt-12">
          Reviews from other learners
        </h2>

      </div>

      <Footer />
    </div>
  )
}

export default Home