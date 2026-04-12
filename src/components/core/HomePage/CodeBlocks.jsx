// import React from 'react'
// import HighlightText from "./HighlightText";
// import CTAButton from "./Button";
// import { FaSquareArrowUpRight } from "react-icons/fa6";
// import { TypeAnimation } from 'react-type-animation';
// const CodeBlocks = ({
//     position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroudGradient, codeColor
// }) => {
//     return (
//         <div className={`flex ${position} my-20 justify-between gap-10`}>

//     {/*Section 1*/}
//         <div className='w-[50%] flex flex-col gap-8'>
//             {heading}
//             <div className='text-richblack-300 font-bold '>
//                 {subheading}
//             </div>

//             <div className='flex gap-7 mt-7'>
//                 <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
//                     <div className='flex gap-2 items-center'>
//                         {ctabtn1.btnText}
//                         <FaSquareArrowUpRight/>
//                     </div>
//                 </CTAButton>

//                 <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>  
//                         {ctabtn2.btnText}
//                 </CTAButton>
//             </div>


//         </div>

//     {/*Section 2*/}
//         <div className=' h-fit  flex flex-row text-10[px] w-[100%] py-4 lg:w-[500px]'> 
//             {/*HW -> BG gradient*/}

//             <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
//                 <p>1</p>
//                 <p>2</p>
//                 <p>3</p>
//                 <p>4</p>
//                 <p>5</p>
//                 <p>6</p>
//                 <p>7</p>
//                 <p>8</p>
//                 <p>9</p>
//                 <p>10</p>
//                 <p>11</p>
//             </div>

//             <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
//             <TypeAnimation
//                 sequence={[codeblock, 2000, ""]}
//                 repeat={Infinity}
//                 cursor={true}
            
//                 style = {
//                     {
//                         whiteSpace: "pre-line",
//                         display:"block",
//                     }
//                 }
//                 omitDeletionAnimation={true}
//             />
//             </div>

//         </div>


//     </div>
//     )
// }

// export default CodeBlocks

import React from 'react'
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({
    position,
    heading,
    subheading,
    ctabtn1,
    ctabtn2,
    codeblock,
    backgroudGradient,
    codeColor
}) => {
    return (
        <div className={`flex ${position} my-20 justify-between gap-10`}>

            {/* ================= LEFT SECTION ================= */}
            <div className='w-[50%] flex flex-col gap-8'>
                {heading}

                <div className='text-richblack-300 font-medium'>
                    {subheading}
                </div>

                <div className='flex gap-7 mt-7'>
                    <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                        <div className='flex gap-2 items-center'>
                            {ctabtn1.btnText}
                            <FaSquareArrowUpRight />
                        </div>
                    </CTAButton>

                    <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                        {ctabtn2.btnText}
                    </CTAButton>
                </div>
            </div>

            {/* ================= RIGHT CODE SECTION ================= */}
            <div className='relative flex w-full lg:w-[500px]'>

                {/* Glow background */}
                <div className='absolute -inset-3 bg-gradient-to-r 
                from-pink-500/30 via-yellow-400/20 to-blue-500/30 
                blur-2xl rounded-xl'></div>

                {/* Glassmorphism Card */}
                <div className='relative w-full h-[260px] flex flex-row 
                bg-richblack-800/80 backdrop-blur-xl 
                border border-richblack-700 
                rounded-xl shadow-xl overflow-hidden'>

                    {/* Line Numbers */}
                    <div className='w-[10%] flex flex-col items-center 
                    text-richblack-400 font-inter text-sm font-bold py-4 select-none'>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                    </div>

                    {/* Code */}
                    <div className={`w-[90%] font-mono text-sm leading-6 
                    ${codeColor} px-3 py-4`}>

                        <TypeAnimation
                            sequence={[codeblock, 2000, ""]}
                            repeat={Infinity}
                            cursor={true}
                            omitDeletionAnimation={true}
                            style={{
                                whiteSpace: "pre-line",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeBlocks
