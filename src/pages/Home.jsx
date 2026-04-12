
// import { FaSquareArrowUpRight } from "react-icons/fa6";
// import React from 'react'
// import {Link} from "react-router-dom"
// import HighlightText from '../components/core/HomePage/HighlightText'

// import CTAButton from "../components/core/HomePage/Button"
// import Banner from "../assets/Images/banner.mp4"
// import CodeBlocks from "../components/core/HomePage/CodeBlocks"
// import TimelineSection from '../components/core/HomePage/TimelineSection'
// import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
// import InstructorSection from '../components/core/HomePage/InstructorSection'
// import Footer from '../components/common/Footer'
// import ExploreMore from '../components/core/HomePage/ExploreMore'

  // const Home = () => {
//     return (
//         <div>
//         {/*Section1  */}
//         <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
//         text-white justify-between'>

//             <Link to={"/signup"}>
//                 <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
//                 transition-all duration-200 hover:scale-95 w-fit'>
//                     <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
//                     transition-all duration-200 group-hover:bg-richblack-900'>
//                         <p>Become an Instructor</p>
//                         <FaSquareArrowUpRight />
//                     </div>
//                 </div>

//             </Link>

//             <div className='text-center text-4xl font-semibold mt-7'>
//                 Empower Your Future with
//                 <HighlightText text={"Coding Skills"} />
//             </div>

//             <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
//                 With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
//             </div>

//             <div className='flex flex-row gap-7 mt-8'>
//                 <CTAButton active={true} linkto={"/signup"}> 
//                     Learn More
//                 </CTAButton>

//                 <CTAButton active={false} linkto={"/login"}> 
//                     Book a Demo
//                 </CTAButton>
//             </div>

//             <div className='mx-3 my-12 shadow-blue-200 '>
//                 <video
//                 muted
//                 loop
//                 autoPlay
//                 >
//                 <source  src={Banner} type="video/mp4" />
//                 </video>
//             </div>

//             {/* Code Section 1 */}
//             <div>
//                 <CodeBlocks 
//                     position={"lg:flex-row"}
//                     heading={
//                         <div className='text-4xl font-semibold'>
//                             Unlock Your
//                             <HighlightText text={"coding potential"}/>
//                             with our online courses
//                         </div>
//                     }
//                     subheading = {
//                         "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
//                     }
//                     ctabtn1={
//                         {
//                             btnText: "try it yourself",
//                             linkto: "/signup",
//                             active: true,
//                         }
//                     }
//                     ctabtn2={
//                         {
//                             btnText: "learn more",
//                             linkto: "/login",
//                             active: false,
//                         }
//                     }

//                     codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
//                     codeColor={"text-yellow-25"}
//                 />
//             </div>

//                     {/* Code Section 2 */}
//             <div>
//                 <CodeBlocks 
//                     position={"lg:flex-row-reverse"}
//                     heading={
//                         <div className='text-4xl font-semibold'>
//                             Unlock Your
//                             <HighlightText text={"coding potential"}/>
//                             with our online courses
//                         </div>
//                     }
//                     subheading = {
//                         "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
//                     }
//                     ctabtn1={
//                         {
//                             btnText: "try it yourself",
//                             linkto: "/signup",
//                             active: true,
//                         }
//                     }
//                     ctabtn2={
//                         {
//                             btnText: "learn more",
//                             linkto: "/login",
//                             active: false,
//                         }
//                     }

//                     codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
//                     codeColor={"text-yellow-25"}
//                 />
//             </div>

//                 <ExploreMore />
//         </div>

//         {/*Section 2  */}
//         <div className='bg-pure-greys-5 text-richblack-700'>
//                 <div className='homepage_bg h-[310px]'>

//                     <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
//                         <div className='h-[150px]'></div>
//                         <div className='flex flex-row gap-7 text-white '>
//                             <CTAButton active={true} linkto={"/signup"}>
//                                 <div className='flex items-center gap-3' >
//                                     Explore Full Catalog
//                                     <FaSquareArrowUpRight />
//                                 </div>
                                
//                             </CTAButton>
//                             <CTAButton active={false} linkto={"/signup"}>
//                                 <div>
//                                     Learn more
//                                 </div>
//                             </CTAButton>
//                         </div>

//                     </div>


//                 </div>

//                 <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

//                     <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
//                         <div className='text-4xl font-semibold w-[45%]'>
//                             Get the Skills you need for a
//                             <HighlightText text={"Job that is in demand"} />
//                         </div>

//                         <div className='flex flex-col gap-10 w-[40%] items-start'>
//                         <div className='text-[16px]'>
//                         The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
//                         </div>
//                         <CTAButton active={true} linkto={"/signup"}>
//                             <div>
//                                 Learn more
//                             </div>
//                         </CTAButton>
//                         </div>

//                     </div>
                    
                    

//                     <TimelineSection />

//                     <LearningLanguageSection />

//                 </div>

                

//         </div>


//         {/*Section 3 */}
//         <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>

//                 <InstructorSection />

//                 <h2 className='text-center text-4xl font-semobold mt-10'>review from Other Learners</h2>
//                 {/* Review Slider here */}
                
//         </div>


//         {/*Footer */}
//         <Footer />

//         </div>
//     )
// }

// export default Home
// import { FaSquareArrowUpRight } from "react-icons/fa6";
// import React from 'react'
// import { Link } from "react-router-dom"
// import HighlightText from '../components/core/HomePage/HighlightText'

// import CTAButton from "../components/core/HomePage/Button"
// import Banner from "../assets/Images/banner.mp4"
// import CodeBlocks from "../components/core/HomePage/CodeBlocks"
// import TimelineSection from '../components/core/HomePage/TimelineSection'
// import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
// import InstructorSection from '../components/core/HomePage/InstructorSection'
// import Footer from '../components/common/Footer'
// import ExploreMore from '../components/core/HomePage/ExploreMore'

// const Home = () => {
//     return (
//         <div className="bg-richblack-900">

//             {/* ================= HERO SECTION ================= */}
//             <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
//             text-white justify-between overflow-hidden'>

//                 {/* Background Glow */}
//                 <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120%] h-[500px] 
//                 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>

//                 {/* Instructor CTA */}
//                 <Link to={"/signup"} className="relative z-10">
//                     <div className='group mt-16 p-[2px] mx-auto rounded-full 
//                     bg-gradient-to-r from-blue-400 to-purple-500
//                     shadow-lg shadow-blue-500/20
//                     transition-all duration-300 hover:scale-95 w-fit'>

//                         <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[6px]
//                         bg-richblack-800 font-bold text-richblack-200
//                         transition-all duration-300 group-hover:bg-richblack-900'>
//                             <p>Become an Instructor</p>
//                             <FaSquareArrowUpRight />
//                         </div>
//                     </div>
//                 </Link>

//                 {/* Heading */}
//                 <div className='relative z-10 text-center text-4xl lg:text-5xl font-semibold mt-10 leading-tight'>
//                     Empower Your Future with
//                     <HighlightText text={" Coding Skills"} />
//                 </div>

//                 {/* Subheading */}
//                 <div className='relative z-10 mt-6 w-[90%] text-center text-lg font-medium text-richblack-300'>
//                     With our online coding courses, you can learn at your own pace, from anywhere in the world,
//                     and get access to hands-on projects, quizzes, and personalized feedback from instructors.
//                 </div>

//                 {/* Buttons */}
//                 <div className='relative z-10 flex flex-row gap-7 mt-10'>
//                     <CTAButton active={true} linkto={"/signup"}> 
//                         Learn More
//                     </CTAButton>

//                     <CTAButton active={false} linkto={"/login"}> 
//                         Book a Demo
//                     </CTAButton>
//                 </div>

//                 {/* ================= VIDEO SECTION ================= */}
//                 <div className='relative z-10 mx-3 my-20'>

//                     {/* Background Panel */}
//                     <div className="absolute -inset-6 bg-gradient-to-r from-blue-200/40 to-cyan-200/40 
//                     rounded-xl blur-2xl"></div>

//                     <div className="relative rounded-xl overflow-hidden shadow-2xl 
//                     shadow-blue-500/30 border border-richblack-700">
//                         <video muted loop autoPlay className="rounded-xl">
//                             <source src={Banner} type="video/mp4" />
//                         </video>
//                     </div>
//                 </div>

//                 {/* ================= CODE SECTION 1 ================= */}
//                 <CodeBlocks 
//                     position={"lg:flex-row"}
//                     heading={
//                         <div className='text-4xl font-semibold leading-snug'>
//                             Unlock Your
//                             <HighlightText text={" coding potential"} />
//                             <div>with our online courses</div>
//                         </div>
//                     }
//                     subheading={
//                         "Our courses are designed and taught by industry experts who are passionate about sharing real-world coding skills."
//                     }
//                     ctabtn1={{
//                         btnText: "Try it yourself",
//                         linkto: "/signup",
//                         active: true,
//                     }}
//                     ctabtn2={{
//                         btnText: "Learn more",
//                         linkto: "/login",
//                         active: false,
//                     }}
//                     codeblock={`<!DOCTYPE html>
// <html>
// <head>
// <title>Example</title>
// <link rel="stylesheet" href="styles.css">
// </head>
// <body>
// <h1><a href="/">Header</a></h1>
// <nav>
// <a href="one/">One</a>
// <a href="two/">Two</a>
// <a href="three/">Three</a>
// </nav>
// </body>
// </html>`}
//                     codeColor={"text-yellow-25"}
//                 />

//                 {/* ================= CODE SECTION 2 ================= */}
//                 <CodeBlocks 
//                     position={"lg:flex-row-reverse"}
//                     heading={
//                         <div className='text-4xl font-semibold leading-snug'>
//                             Start
//                             <HighlightText text={" building today"} />
//                         </div>
//                     }
//                     subheading={
//                         "Build real projects, improve problem-solving skills, and prepare for real-world development."
//                     }
//                     ctabtn1={{
//                         btnText: "Get Started",
//                         linkto: "/signup",
//                         active: true,
//                     }}
//                     ctabtn2={{
//                         btnText: "Explore",
//                         linkto: "/login",
//                         active: false,
//                     }}
//                     codeblock={`function learnCoding() {
//   const skills = ["HTML", "CSS", "JS"];
//   skills.forEach(skill => {
//     console.log("Learning", skill);
//   });
// }
// learnCoding();`}
//                     codeColor={"text-yellow-25"}
//                 />

//                 <ExploreMore />
//             </div>

//             {/* ================= SECTION 2 ================= */}
//             <div className='bg-pure-greys-5 text-richblack-700'>

//                 <div className='homepage_bg h-[310px]'>
//                     <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-8 mx-auto'>
//                         <div className='h-[150px]'></div>

//                         <div className='flex flex-row gap-7 text-white'>
//                             <CTAButton active={true} linkto={"/signup"}>
//                                 <div className='flex items-center gap-3'>
//                                     Explore Full Catalog
//                                     <FaSquareArrowUpRight />
//                                 </div>
//                             </CTAButton>

//                             <CTAButton active={false} linkto={"/signup"}>
//                                 Learn more
//                             </CTAButton>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='mx-auto w-11/12 max-w-maxContent flex flex-col gap-20'>

//                     <div className='flex flex-row gap-10 mt-[95px]'>
//                         <div className='text-4xl font-semibold w-[45%]'>
//                             Get the Skills you need for a
//                             <HighlightText text={" Job that is in demand"} />
//                         </div>

//                         <div className='flex flex-col gap-10 w-[40%]'>
//                             <p className='text-[16px] text-richblack-600'>
//                                 Today, to be a competitive specialist requires more than professional skills.
//                             </p>
//                             <CTAButton active={true} linkto={"/signup"}>
//                                 Learn more
//                             </CTAButton>
//                         </div>
//                     </div>

//                     <TimelineSection />
//                     <LearningLanguageSection />
//                 </div>
//             </div>

//             {/* ================= SECTION 3 ================= */}
//             <div className='w-11/12 mx-auto max-w-maxContent flex-col gap-16 bg-richblack-900 text-white py-20'>
//                 <InstructorSection />
//                 <h2 className='text-center text-4xl font-semibold mt-10'>
//                     Reviews from other learners
//                 </h2>
//             </div>

//             <Footer />
//         </div>
//     )
// }

// export default Home


// import React from 'react'
// import {FaArrowRight} from "react-icons/fa"
// import {Link} from "react-router-dom"
// import HighlightText from '../components/core/HomePage/HighlightText'

// import CTAButton from "../components/core/HomePage/Button"
// import Banner from "../assets/Images/banner.mp4"
// import CodeBlocks from "../components/core/HomePage/CodeBlocks"
// import TimelineSection from '../components/core/HomePage/TimelineSection'
// import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
// import InstructorSection from '../components/core/HomePage/InstructorSection'
// import Footer from '../components/common/Footer'
// import ExploreMore from '../components/core/HomePage/ExploreMore'
// import ReviewSlider from '../components/common/ReviewSlider'

// const Home = () => {
//   return (
//     <div>
//       {/*Section1  */}
//       <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
//       text-white justify-between'>

//         <Link to={"/signup"}>
//             <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
//             transition-all duration-200 hover:scale-95 w-fit'>
//                 <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
//                 transition-all duration-200 group-hover:bg-richblack-900'>
//                     <p>Become an Instructor</p>
//                     <FaArrowRight />
//                 </div>
//             </div>

//         </Link>

//         <div className='text-center text-4xl font-semibold mt-7'>
//             Empower Your Future with
//             <HighlightText text={"Coding Skills"} />
//         </div>

//         <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
//             With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
//         </div>

//         <div className='flex flex-row gap-7 mt-8'>
//             <CTAButton active={true} linkto={"/signup"}> 
//                 Learn More
//             </CTAButton>

//             <CTAButton active={false} linkto={"/login"}> 
//                 Book a Demo
//             </CTAButton>
//         </div>

//         <div className='mx-3 my-12 shadow-blue-200'>
//             <video
//             muted
//             loop
//             autoPlay
//             >
//             <source  src={Banner} type="video/mp4" />
//             </video>
//         </div>

//         {/* Code Section 1 */}
//         <div>
//             <CodeBlocks 
//                 position={"lg:flex-row"}
//                 heading={
//                     <div className='text-4xl font-semibold'>
//                         Unlock Your
//                         <HighlightText text={"coding potential"}/>
//                         with our online courses
//                     </div>
//                 }
//                 subheading = {
//                     "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
//                 }
//                 ctabtn1={
//                     {
//                         btnText: "try it yourself",
//                         linkto: "/signup",
//                         active: true,
//                     }
//                 }
//                 ctabtn2={
//                     {
//                         btnText: "learn more",
//                         linkto: "/login",
//                         active: false,
//                     }
//                 }

//                 codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
//                 codeColor={"text-yellow-25"}
//             />
//         </div>

//                 {/* Code Section 2 */}
//         <div>
//             <CodeBlocks 
//                 position={"lg:flex-row-reverse"}
//                 heading={
//                     <div className='text-4xl font-semibold'>
//                         Unlock Your
//                         <HighlightText text={"coding potential"}/>
//                         with our online courses
//                     </div>
//                 }
//                 subheading = {
//                     "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
//                 }
//                 ctabtn1={
//                     {
//                         btnText: "try it yourself",
//                         linkto: "/signup",
//                         active: true,
//                     }
//                 }
//                 ctabtn2={
//                     {
//                         btnText: "learn more",
//                         linkto: "/login",
//                         active: false,
//                     }
//                 }

//                 codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
//                 codeColor={"text-yellow-25"}
//             />
//         </div>

//             <ExploreMore />
//       </div>

//       {/*Section 2  */}
//       <div className='bg-pure-greys-5 text-richblack-700'>
//             <div className='homepage_bg h-[310px]'>

//                 <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
//                     <div className='h-[150px]'></div>
//                     <div className='flex flex-row gap-7 text-white '>
//                         <CTAButton active={true} linkto={"/signup"}>
//                             <div className='flex items-center gap-3' >
//                                 Explore Full Catalog
//                                 <FaArrowRight />
//                             </div>
                            
//                         </CTAButton>
//                         <CTAButton active={false} linkto={"/signup"}>
//                             <div>
//                                 Learn more
//                             </div>
//                         </CTAButton>
//                     </div>

//                 </div>


//             </div>

//             <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

//                 <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
//                     <div className='text-4xl font-semibold w-[45%]'>
//                         Get the Skills you need for a
//                         <HighlightText text={"Job that is in demand"} />
//                     </div>

//                     <div className='flex flex-col gap-10 w-[40%] items-start'>
//                     <div className='text-[16px]'>
//                     The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
//                     </div>
//                     <CTAButton active={true} linkto={"/signup"}>
//                         <div>
//                             Learn more
//                         </div>
//                     </CTAButton>
//                     </div>

//                 </div>
                
                

//                 <TimelineSection />

//                 <LearningLanguageSection />

//             </div>

            

//       </div>


//       {/*Section 3 */}
//       <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>

//             <InstructorSection />

//             <h2 className='text-center text-4xl font-semobold mt-10'>Reviews from Other Learners</h2>
            
//             <ReviewSlider />
//       </div>


//       {/*Footer */}
//       <Footer />

//     </div>
//   )
// }

// export default Home
import React, { useEffect, useRef } from 'react'
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'

// ── Scroll reveal hook ────────────────────────────────
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("rev-on"); obs.unobserve(el) }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const Home = () => {
  const heroRef    = useRef(null)
  const videoRef   = useReveal()
  const code1Ref   = useReveal()
  const code2Ref   = useReveal()
  const exploreRef = useReveal()
  const ctaRef     = useReveal()
  const skillRef   = useReveal()
  const timeRef    = useReveal()
  const langRef    = useReveal()
  const instRef    = useReveal()
  const revRef     = useReveal()

  // Hero entrance on mount
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    // stagger each child
    const children = el.querySelectorAll(".h-child")
    children.forEach((c, i) => {
      setTimeout(() => c.classList.add("h-child-on"), i * 130)
    })
  }, [])

  return (
    <>
      <style>{`
        /* ── Scroll reveal ── */
        .rev { opacity:0; transform:translateY(32px); transition:opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.34,1.1,0.64,1); }
        .rev-on { opacity:1 !important; transform:none !important; }

        /* ── Hero children ── */
        .h-child { opacity:0; transform:translateY(22px); transition:opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.34,1.1,0.64,1); }
        .h-child-on { opacity:1; transform:none; }

        /* ── Background blobs ── */
        @keyframes blob {
          0%,100% { transform:translate(-50%,-50%) scale(1) rotate(0deg); opacity:0.55; }
          33%      { transform:translate(-48%,-52%) scale(1.1) rotate(4deg); opacity:0.75; }
          66%      { transform:translate(-52%,-48%) scale(0.92) rotate(-4deg); opacity:0.55; }
        }
        .blob { position:absolute; border-radius:50%; pointer-events:none; filter:blur(90px); animation:blob 12s ease-in-out infinite; }

        /* ── Particles ── */
        @keyframes ptcl {
          0%,100% { transform:translateY(0) scale(1); opacity:0.4; }
          50%      { transform:translateY(-18px) scale(1.3); opacity:0.7; }
        }
        .ptcl { position:absolute; border-radius:50%; pointer-events:none; }

        /* ── Pill shimmer ── */
        @keyframes pill-sh {
          0%  { background-position:-200% 0; }
          100%{ background-position:200% 0;  }
        }
        .pill {
          background:linear-gradient(90deg, rgba(6,182,212,0.07) 0%, rgba(168,85,247,0.18) 40%, rgba(6,182,212,0.07) 80%);
          background-size:200% 100%;
          animation:pill-sh 4s linear infinite;
          border:1px solid rgba(6,182,212,0.22);
          border-radius:999px; padding:1.5px;
          display:inline-block;
        }
        .pill-inner {
          display:flex; align-items:center; gap:8px;
          padding:7px 22px; border-radius:999px;
          background:rgba(0,8,20,0.85);
          color:rgba(255,255,255,0.72);
          font-size:13.5px; font-weight:600;
          backdrop-filter:blur(8px);
          transition:color 0.2s;
        }
        .pill:hover .pill-inner { color:#fff; }

        /* ── Video ── */
        .video-wrap {
          border-radius:18px; overflow:hidden;
          border:1px solid rgba(6,182,212,0.18);
          box-shadow:0 0 0 1px rgba(168,85,247,0.08), 0 32px 80px rgba(0,0,0,0.7), 0 0 80px rgba(6,182,212,0.07);
          position:relative;
        }

        /* ── CTA band ── */
        .cta-band {
          background:linear-gradient(135deg, rgba(6,182,212,0.06) 0%, rgba(168,85,247,0.06) 100%);
          border:1px solid rgba(6,182,212,0.14);
          border-radius:20px; position:relative; overflow:hidden;
        }
        .cta-band::before {
          content:""; position:absolute; top:0; left:-100%; width:60%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(6,182,212,0.05),transparent);
          animation:pill-sh 5s ease-in-out infinite;
        }

        /* ── Divider ── */
        .div-au {
          height:1px;
          background:linear-gradient(90deg,transparent,rgba(6,182,212,0.28),rgba(168,85,247,0.18),transparent);
        }
      `}</style>

      <div style={{ background:"#000814", overflowX:"hidden" }}>

        {/* ═══════════════════════════
            HERO SECTION
        ═══════════════════════════ */}
        <div style={{ position:"relative", overflow:"hidden" }}>

          {/* Blobs */}
          <div className="blob" style={{
            width:"650px", height:"650px",
            background:"radial-gradient(circle, rgba(6,182,212,0.13) 0%, transparent 70%)",
            top:"50%", left:"50%",
          }} />
          <div className="blob" style={{
            width:"450px", height:"450px",
            background:"radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)",
            top:"25%", right:"5%", left:"auto",
            animationDelay:"4s",
          }} />

          {/* Particles */}
          {[
            { s:4, top:"12%", left:"7%",  delay:"0s",   dur:"6s"  },
            { s:3, top:"65%", left:"91%", delay:"1.5s", dur:"8s"  },
            { s:5, top:"78%", left:"12%", delay:"3s",   dur:"7s"  },
            { s:2, top:"28%", left:"88%", delay:"2s",   dur:"9s"  },
          ].map((p, i) => (
            <div key={i} className="ptcl" style={{
              width:p.s+"px", height:p.s+"px",
              top:p.top, left:p.left,
              background: i%2===0 ? "rgba(6,182,212,0.5)" : "rgba(168,85,247,0.5)",
              animationName:"ptcl", animationDuration:p.dur,
              animationDelay:p.delay, animationIterationCount:"infinite",
              animationTimingFunction:"ease-in-out",
            }} />
          ))}

          {/* Hero content */}
          <div ref={heroRef} style={{
            position:"relative", zIndex:1,
            maxWidth:"1260px", margin:"0 auto",
            padding:"60px 28px 56px",         /* ← reduced padding */
            display:"flex", flexDirection:"column", alignItems:"center",
          }}>

            {/* Pill */}
            <Link to="/signup" className="h-child" style={{ textDecoration:"none", marginBottom:"28px" }}>
              <div className="pill">
                <div className="pill-inner">
                  Become an Instructor
                  <FaArrowRight style={{ color:"#22d3ee", fontSize:"11px" }} />
                </div>
              </div>
            </Link>

            {/* Heading */}
            <h1 className="h-child" style={{
              textAlign:"center",
              fontSize:"clamp(30px,5vw,54px)",
              fontWeight:800, lineHeight:1.15,
              color:"#F1F2FF", letterSpacing:"-0.02em",
              margin:"0 0 18px",
            }}>
              Empower Your Future with
              <HighlightText text={"Coding Skills"} />
            </h1>

            {/* Sub */}
            <p className="h-child" style={{
              textAlign:"center", maxWidth:"600px",
              fontSize:"16px", lineHeight:"1.75",
              color:"rgba(175,178,191,0.8)", fontWeight:400,
              margin:"0 0 32px",
            }}>
              Learn at your own pace from anywhere in the world.
              Access hands-on projects, quizzes, and mentorship from industry experts.
            </p>

            {/* Buttons */}
            <div className="h-child" style={{ display:"flex", gap:"14px", flexWrap:"wrap", justifyContent:"center", marginBottom:"48px" }}>
              <CTAButton active={true}  linkto="/signup">Learn More</CTAButton>
              <CTAButton active={false} linkto="/login">Book a Demo</CTAButton>
            </div>

            {/* Stats */}
            <div className="h-child" style={{
              display:"grid", gridTemplateColumns:"repeat(3,1fr)",
              gap:"14px", width:"100%", maxWidth:"640px",
              marginBottom:"52px",
            }}>
              {[
                { v:"5K+",  l:"Active Learners"  },
                { v:"120+", l:"Expert Courses"   },
                { v:"98%",  l:"Satisfaction Rate"},
              ].map((s, i) => (
                <div key={i} className="stat-card">
                  <div style={{
                    fontSize:"26px", fontWeight:800,
                    background:"linear-gradient(135deg,#22d3ee,#a855f7)",
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                  }}>{s.v}</div>
                  <div style={{ color:"rgba(175,178,191,0.5)", fontSize:"11px", marginTop:"3px", letterSpacing:"0.4px" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Video */}
            <div ref={videoRef} className="rev" style={{ width:"100%", position:"relative" }}>
              <div style={{
                position:"absolute", inset:"-16px",
                background:"radial-gradient(ellipse at center, rgba(6,182,212,0.09) 0%, rgba(168,85,247,0.05) 50%, transparent 70%)",
                borderRadius:"24px", filter:"blur(16px)", pointerEvents:"none",
              }} />
              <div className="video-wrap">
                <video muted loop autoPlay style={{ width:"100%", display:"block" }}>
                  <source src={Banner} type="video/mp4" />
                </video>
                <div style={{
                  position:"absolute", top:0, left:0, right:0, height:"30%",
                  background:"linear-gradient(180deg,rgba(6,182,212,0.04) 0%,transparent 100%)",
                  pointerEvents:"none",
                }} />
              </div>
            </div>

            {/* Code Block 1 */}
            <div ref={code1Ref} className="rev" style={{ width:"100%", marginTop:"56px" }}>
              <CodeBlocks
                position="lg:flex-row"
                heading={
                  <div style={{ fontSize:"clamp(26px,3.5vw,38px)", fontWeight:700, lineHeight:1.25 }}>
                    Unlock Your
                    <HighlightText text=" coding potential" />
                    {" "}with our online courses
                  </div>
                }
                subheading="Our courses are designed and taught by industry experts who are passionate about sharing real-world coding skills."
                ctabtn1={{ btnText:"Try it yourself", linkto:"/signup", active:true  }}
                ctabtn2={{ btnText:"Learn more",      linkto:"/login",  active:false }}
                codeblock={`<!DOCTYPE html>\n<html>\n  <head>\n    <title>Example</title>\n    <link rel="stylesheet"\n    href="styles.css">\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>`}
                codeColor="text-yellow-25"
              />
            </div>

            {/* Code Block 2 */}
            <div ref={code2Ref} className="rev" style={{ width:"100%", marginTop:"48px" }}>
              <CodeBlocks
                position="lg:flex-row-reverse"
                heading={
                  <div style={{ fontSize:"clamp(26px,3.5vw,38px)", fontWeight:700, lineHeight:1.25 }}>
                    Start
                    <HighlightText text=" building today" />
                  </div>
                }
                subheading="Build real projects, improve problem-solving, and prepare for the real world with guided mentorship."
                ctabtn1={{ btnText:"Get Started", linkto:"/signup", active:true  }}
                ctabtn2={{ btnText:"Explore",     linkto:"/login",  active:false }}
                codeblock={`function learnCoding() {\n  const skills = [\n    "HTML", "CSS",\n    "JavaScript", "React"\n  ];\n  skills.forEach(skill => {\n    console.log("Learning", skill);\n  });\n}\nlearnCoding();`}
                codeColor="text-yellow-25"
              />
            </div>

            <div ref={exploreRef} className="rev" style={{ width:"100%", marginTop:"36px" }}>
              <ExploreMore />
            </div>

          </div>
        </div>

        {/* ═══════════════════════════
            SECTION 2
        ═══════════════════════════ */}
        <div className="div-au" />

        <div style={{
          background:"linear-gradient(180deg,#000814 0%,#04091a 50%,#000814 100%)",
          padding:"56px 28px", position:"relative",
        }}>
          <div style={{
            position:"absolute", inset:0,
            background:"radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 70%)",
            pointerEvents:"none",
          }} />

          <div style={{ maxWidth:"1260px", margin:"0 auto", position:"relative", zIndex:1 }}>

            {/* CTA band */}
            <div ref={ctaRef} className="rev cta-band" style={{ padding:"40px 36px", marginBottom:"52px", textAlign:"center" }}>
              <div style={{ fontSize:"clamp(20px,2.8vw,30px)", fontWeight:700, color:"#F1F2FF", marginBottom:"8px" }}>
                Ready to take the next step?
              </div>
              <div style={{ color:"rgba(175,178,191,0.55)", fontSize:"15px", marginBottom:"24px" }}>
                Explore our full catalog and start learning today.
              </div>
              <div style={{ display:"flex", gap:"14px", justifyContent:"center", flexWrap:"wrap" }}>
                <CTAButton active={true} linkto="/signup">
                  <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                    Explore Full Catalog <FaArrowRight style={{ fontSize:"11px" }} />
                  </div>
                </CTAButton>
                <CTAButton active={false} linkto="/signup">Learn more</CTAButton>
              </div>
            </div>

            {/* Skills */}
            <div ref={skillRef} className="rev" style={{
              display:"flex", flexWrap:"wrap", gap:"36px",
              alignItems:"flex-start", marginBottom:"48px",
            }}>
              <div style={{ flex:1, minWidth:"260px" }}>
                <div style={{ fontSize:"clamp(24px,2.8vw,34px)", fontWeight:700, color:"#F1F2FF", lineHeight:1.3 }}>
                  Get the Skills you need for a
                  <HighlightText text=" Job that is in demand" />
                </div>
              </div>
              <div style={{ flex:1, minWidth:"260px", display:"flex", flexDirection:"column", gap:"18px" }}>
                <p style={{ color:"rgba(175,178,191,0.65)", fontSize:"15px", lineHeight:"1.7" }}>
                  Today's competitive job market demands more than technical skills.
                  Build a complete professional toolkit with our structured paths.
                </p>
                <CTAButton active={true} linkto="/signup">Learn more</CTAButton>
              </div>
            </div>

            <div ref={timeRef} className="rev"><TimelineSection /></div>
            <div ref={langRef}  className="rev" style={{ marginTop:"48px" }}><LearningLanguageSection /></div>
          </div>
        </div>

        {/* ═══════════════════════════
            SECTION 3
        ═══════════════════════════ */}
        <div className="div-au" />

        <div style={{ background:"#000814", padding:"56px 28px" }}>
          <div style={{ maxWidth:"1260px", margin:"0 auto" }}>

            <div ref={instRef} className="rev"><InstructorSection /></div>

            <div ref={revRef} className="rev" style={{ marginTop:"56px" }}>
              <div style={{ textAlign:"center", marginBottom:"32px" }}>
                <div className="badge-aurora" style={{ marginBottom:"14px" }}>✦ Testimonials</div>
                <h2 style={{
                  fontSize:"clamp(24px,3vw,36px)", fontWeight:700, color:"#F1F2FF",
                }}>Reviews from Other Learners</h2>
              </div>
              <ReviewSlider />
            </div>

          </div>
        </div>

        <div className="div-au" />
        <Footer />
      </div>
    </>
  )
}

export default Home

