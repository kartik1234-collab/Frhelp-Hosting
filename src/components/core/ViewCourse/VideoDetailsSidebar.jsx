// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import IconBtn from '../../common/IconBtn';

// const VideoDetailsSidebar = ({setReviewModal}) => {

//     const [activeStatus, setActiveStatus] = useState("");
//     const [videoBarActive, setVideoBarActive] = useState("");
//     const navigate = useNavigate();
//     const location = useLocation();
//     const {sectionId, subSectionId} = useParams();
//     const {
//         courseSectionData,
//         courseEntireData,
//         totalNoOfLectures,
//         completedLectures,
//     } = useSelector((state)=>state.viewCourse);

//     useEffect(()=> {
//         const setActiveFlags = () => {
//             if(!courseSectionData.length)
//                 return;
//             const currentSectionIndex = courseSectionData.findIndex(
//                 (data) => data._id === sectionId
//             )
//             const currentSubSectionIndex = courseSectionData?.[currentSectionIndex]?.subSection.findIndex(
//                 (data) => data._id === subSectionId
//             )
//             const activeSubSectionId = courseSectionData[currentSectionIndex]?.subSection?.[currentSubSectionIndex]?._id;
//             //set current section here
//             setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
//             //set current sub-section here
//             setVideoBarActive(activeSubSectionId);
//         }
//         setActiveFlags();
//     },[courseSectionData, courseEntireData, location.pathname])

//     const handleAddReview = () => {
//         console.log("I am inside Add handleAddReview")
//         setReviewModal(true);
//     }

//   return (
//     <>
//         <div className='text-white'>
//             {/* for buttons and headings */}
//             <div>
//                 {/* for buttons */}
//                 <div>
//                     <div 
//                     onClick={()=> {
//                         navigate("/dashboard/enrolled-courses")
//                     }}
//                     >
//                         Back
//                     </div>

//                     <div>
//                         <IconBtn 
//                             text="Add Review"
//                             onclick={() => handleAddReview()}
//                         />
//                     </div>

//                 </div>
//                 {/* for heading or title */}
//                 <div>
//                     <p>{courseEntireData?.courseName}</p>
//                     <p>{completedLectures?.length} / {totalNoOfLectures}</p>
//                 </div>
//             </div>

//             {/* for sections and subSections */}
//             <div>
//                 {
//                     courseSectionData.map((course, index)=> (
//                         <div
//                         onClick={() => setActiveStatus(course?._id)}
//                         key={index}
//                         >

//                             {/* section */}

//                             <div>
//                                 <div>
//                                     {course?.sectionName}
//                                 </div>
//                                 {/* HW- add icon here and handle rotate 180 logic */}
//                             </div>

//                             {/* subSections */}
//                             <div>
//                                 {
//                                     activeStatus === course?._id && (
//                                         <div>
//                                             {
//                                                 course.subSection.map((topic, index) => (
//                                                     <div
//                                                     className={`flex gap-5 p-5 ${
//                                                         videoBarActive === topic._id
//                                                         ? "bg-yellow-200 text-richblack-900"
//                                                         : "bg-richblack-900 text-white"
//                                                     }`}
//                                                     key={index}
//                                                     onClick={() => {
//                                                         navigate(
//                                                             `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
//                                                         )
//                                                         setVideoBarActive(topic?._id);
//                                                     }}
//                                                     >
//                                                         <input
//                                                         type='checkbox'
//                                                         checked= {completedLectures.includes(topic?._id)}
//                                                         onChange={() => {}}
//                                                         />
//                                                         <span>
//                                                             {topic.title}
//                                                         </span>
//                                                     </div>
//                                                 ))
//                                             }
//                                         </div>
//                                     )
//                                 }
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     </>
//   )
// }

// export default VideoDetailsSidebar
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import IconBtn from '../../common/IconBtn';

const VideoDetailsSidebar = ({setReviewModal}) => {

    const [activeStatus, setActiveStatus] = useState("");
    const [videoBarActive, setVideoBarActive] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const {sectionId, subSectionId} = useParams();
    const {
        courseSectionData,
        courseEntireData,
        totalNoOfLectures,
        completedLectures,
    } = useSelector((state)=>state.viewCourse);

    useEffect(()=> {
        const setActiveFlags = () => {
            if(!courseSectionData.length)
                return;
            const currentSectionIndex = courseSectionData.findIndex(
                (data) => data._id === sectionId
            )
            const currentSubSectionIndex = courseSectionData?.[currentSectionIndex]?.subSection.findIndex(
                (data) => data._id === subSectionId
            )
            const activeSubSectionId = courseSectionData[currentSectionIndex]?.subSection?.[currentSubSectionIndex]?._id;
            setActiveStatus(courseSectionData?.[currentSectionIndex]?._id);
            setVideoBarActive(activeSubSectionId);
        }
        setActiveFlags();
    },[courseSectionData, courseEntireData, location.pathname])

    const handleAddReview = () => {
        console.log("I am inside Add handleAddReview")
        setReviewModal(true);
    }

    const completionPercent = totalNoOfLectures > 0
        ? Math.round((completedLectures?.length / totalNoOfLectures) * 100)
        : 0;

  return (
    <div className="flex flex-col h-full bg-[#141414] text-white w-full border-l border-zinc-800">
      
      {/* Sidebar Header */}
      <div className="px-5 py-4 bg-[#1a1a1a] border-b border-zinc-800">
        
        {/* Top row: Back + Add Review */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate("/dashboard/enrolled-courses")}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-150 group"
          >
            <svg className="w-4 h-4 transition-transform duration-150 group-hover:-translate-x-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
            </svg>
            My Courses
          </button>

          <button
            onClick={handleAddReview}
            className="flex items-center gap-1.5 bg-[#3b6583] hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-sm uppercase tracking-widest transition-all duration-200 shadow-[0_0_12px_rgba(229,9,20,0.35)] hover:shadow-[0_0_20px_rgba(229,9,20,0.55)]"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Add Review
          </button>
        </div>

        {/* Course title + progress */}
        <div>
          <p className="text-white font-bold text-base leading-tight line-clamp-2 tracking-tight">
            {courseEntireData?.courseName}
          </p>
          <div className="mt-3">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-zinc-500 text-xs uppercase tracking-widest">Progress</span>
              <span className="text-[#3b6583] text-xs font-bold">
                {completedLectures?.length} / {totalNoOfLectures} lectures
              </span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#3b6583] to-red-400 rounded-full transition-all duration-700"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
            <p className="text-zinc-600 text-xs mt-1">{completionPercent}% complete</p>
          </div>
        </div>
      </div>

      {/* Sections + SubSections */}
      <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
        {
          courseSectionData.map((course, index) => (
            <div key={index} className="border-b border-zinc-800/60">
              
              {/* Section Header */}
              <div
                onClick={() => setActiveStatus(course?._id)}
                className={`flex items-center justify-between px-5 py-3.5 cursor-pointer transition-all duration-200 select-none ${
                  activeStatus === course?._id
                    ? "bg-zinc-800 text-white"
                    : "bg-[#141414] text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    activeStatus === course?._id ? "bg-[#3b6583]" : "bg-zinc-600"
                  }`} />
                  <span className="text-xs font-semibold uppercase tracking-[0.12em]">
                    {course?.sectionName}
                  </span>
                </div>
                <svg
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${
                    activeStatus === course?._id ? "rotate-180 text-[#3b6583]" : "text-zinc-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>

              {/* SubSections */}
              {activeStatus === course?._id && (
                <div className="bg-[#0f0f0f]">
                  {course.subSection.map((topic, idx) => {
                    const isActive = videoBarActive === topic._id;
                    const isCompleted = completedLectures.includes(topic?._id);
                    return (
                      <div
                        key={idx}
                        onClick={() => {
                          navigate(
                            `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                          )
                          setVideoBarActive(topic?._id);
                        }}
                        className={`flex items-center gap-3 px-5 py-3.5 cursor-pointer border-l-2 transition-all duration-200 group ${
                          isActive
                            ? "border-l-[#3b6583] bg-zinc-900 text-white"
                            : "border-l-transparent hover:border-l-zinc-600 hover:bg-zinc-900/50 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        {/* Checkbox / Completed indicator */}
                        <div className={`w-5 h-5 flex-shrink-0 rounded-full border flex items-center justify-center transition-all duration-200 ${
                          isCompleted
                            ? "bg-[#3b6583] border-[#3b6583]"
                            : isActive
                              ? "border-white"
                              : "border-zinc-600 group-hover:border-zinc-400"
                        }`}>
                          {isCompleted && (
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          )}
                          {isActive && !isCompleted && (
                            <div className="w-2 h-2 rounded-full bg-[#2d1617]" />
                          )}
                          <input
                            type='checkbox'
                            checked={isCompleted}
                            onChange={() => {}}
                            className="hidden"
                          />
                        </div>

                        {/* Play icon for active */}
                        <div className="flex-1 flex items-center gap-2 min-w-0">
                          {isActive && (
                            <svg className="w-3 h-3 text-[#2d1617] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                            </svg>
                          )}
                          <span className={`text-sm truncate ${isActive ? "font-semibold text-white" : ""}`}>
                            {topic.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default VideoDetailsSidebar
