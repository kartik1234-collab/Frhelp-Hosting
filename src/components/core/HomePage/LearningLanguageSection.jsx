import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
    return (
        <div className='mt-[130px] mb-32'>
            <div className='flex flex-col gap-6 items-center'>

                {/* Heading */}
                <div className='text-4xl font-semibold text-center leading-tight'>
                    Your Swiss Knife for
                    <HighlightText text={" learning any language"} />
                </div>

                {/* Subheading */}
                <div className='text-center text-richblack-600 mx-auto 
                text-base font-medium w-full lg:w-[70%] leading-7'>
                    Using Spin makes learning multiple languages easy. With 20+ languages,
                    realistic voice-over, progress tracking, custom schedules, and more.
                </div>

                {/* Images (OVERLAP LIKE BEFORE) */}
                <div className='flex flex-row items-center justify-center mt-8 relative'>

                    {/* Left Image */}
                    <img
                        src={know_your_progress}
                        alt="Know Your Progress"
                        className='object-contain
                        transition-all duration-300
                        hover:scale-105
                        -mr-28
                        z-0'
                    />

                    {/* Center Image */}
                    <img
                        src={compare_with_others}
                        alt="Compare With Others"
                        className='object-contain
                        transition-all duration-300
                        hover:scale-110
                        z-10'
                    />

                    {/* Right Image */}
                    <img
                        src={plan_your_lesson}
                        alt="Plan Your Lesson"
                        className='object-contain
                        transition-all duration-300
                        hover:scale-105
                        -ml-32
                        z-0'
                    />
                </div>

                {/* CTA */}
                <div className='mt-10'>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn more
                    </CTAButton>
                </div>

            </div>
        </div>
    )
}

export default LearningLanguageSection
