// import React, { useEffect, useRef, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import { markLectureAsComplete } from '../../../services/operations/courseDetailsAPI';
// import { updateCompletedLectures } from '../../../slices/viewCourseSlice';
// import { Player } from 'video-react';
// import 'video-react/dist/video-react.css';
// import {AiFillPlayCircle} from "react-icons/ai"
// import IconBtn from '../../common/IconBtn';

// const VideoDetails = () => {

//   const {courseId, sectionId, subSectionId} = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const playerRef = useRef();
//   const {token} = useSelector((state)=>state.auth);
//   const {courseSectionData, courseEntireData, completedLectures} = useSelector((state)=>state.viewCourse);

//   const [videoData, setVideoData] = useState([]);
//   const [videoEnded, setVideoEnded] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(()=> {

//     const setVideoSpecificDetails = async() => {
//         if(!courseSectionData.length)
//             return;
//         if(!courseId && !sectionId && !subSectionId) {
//             navigate("/dashboard/enrolled-courses");
//         }
//         else {
//             //let's assume k all 3 fields are present

//             const filteredData = courseSectionData.filter(
//                 (course) => course._id === sectionId
//             )

//             const filteredVideoData = filteredData?.[0].subSection.filter(
//                 (data) => data._id === subSectionId
//             )

//             setVideoData(filteredVideoData[0]);
//             setVideoEnded(false);

//         }
//     }
//     setVideoSpecificDetails();

//   },[courseSectionData, courseEntireData, location.pathname])

//   const isFirstVideo = () => {
//     const currentSectionIndex = courseSectionData.findIndex(
//         (data) => data._id === sectionId
//     )

//     const currentSubSectionIndex = courseSectionData[currentSectionIndex].subSection.findIndex(
//         (data) => data._id === subSectionId
//     )
//     if(currentSectionIndex === 0 && currentSubSectionIndex === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
//   } 

//   const isLastVideo = () => {
//     const currentSectionIndex = courseSectionData.findIndex(
//         (data) => data._id === sectionId
//     )

//     const noOfSubSections = courseSectionData[currentSectionIndex].subSection.length;

//     const currentSubSectionIndex = courseSectionData[currentSectionIndex].subSection.findIndex(
//         (data) => data._id === subSectionId
//     )

//     if(currentSectionIndex === courseSectionData.length - 1 &&
//         currentSubSectionIndex === noOfSubSections - 1) {
//             return true;
//         }
//     else {
//         return false;
//     }


//   }

//   const goToNextVideo = () => {
//     const currentSectionIndex = courseSectionData.findIndex(
//         (data) => data._id === sectionId
//     )

//     const noOfSubSections = courseSectionData[currentSectionIndex].subSection.length;

//     const currentSubSectionIndex = courseSectionData[currentSectionIndex].subSection.findIndex(
//         (data) => data._id === subSectionId
//     )

//     if(currentSubSectionIndex !== noOfSubSections - 1) {
//         //same section ki next video me jao
//         const nextSubSectionId = courseSectionData[currentSectionIndex].subSection[currentSectionIndex + 1]._id;
//         //next video pr jao
//         navigate(`/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`)
//     }
//     else {
//         //different section ki first video
//         const nextSectionId = courseSectionData[currentSectionIndex + 1]._id;
//         const nextSubSectionId = courseSectionData[currentSectionIndex + 1].subSection[0]._id;
//         ///iss voide par jao 
//         navigate(`/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`)
//     }
//   }

//   const goToPrevVideo = () => {

//     const currentSectionIndex = courseSectionData.findIndex(
//         (data) => data._id === sectionId
//     )

//     const noOfSubSections = courseSectionData[currentSectionIndex].subSection.length;

//     const currentSubSectionIndex = courseSectionData[currentSectionIndex].subSection.findIndex(
//         (data) => data._id === subSectionId
//     )

//     if(currentSubSectionIndex != 0 ) {
//         //same section , prev video
//         const prevSubSectionId = courseSectionData[currentSectionIndex].subSection[currentSubSectionIndex - 1];
//         //iss video par chalge jao
//         navigate(`/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`)
//     }
//     else {
//         //different section , last video
//         const prevSectionId = courseSectionData[currentSectionIndex - 1]._id;
//         const prevSubSectionLength = courseSectionData[currentSectionIndex - 1].subSection.length;
//         const prevSubSectionId = courseSectionData[currentSectionIndex - 1].subSection[prevSubSectionLength - 1]._id;
//         //iss video par chalge jao
//         navigate(`/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`)

//     }


//   }

//   const handleLectureCompletion = async() => {

//     ///dummy code, baad me we will replace it witht the actual call
//     setLoading(true);
//     //PENDING - > Course Progress PENDING
//     const res = await markLectureAsComplete({courseId: courseId, subSectionId: subSectionId}, token);
//     //state update
//     if(res) {
//         dispatch(updateCompletedLectures(subSectionId)); 
//     }
//     setLoading(false);

//   }
//   return (
//     <div>
//       {
//         !videoData ? (<div>
//                         No Data Found
//                     </div>)
//         : (
//             <Player
//                 ref = {playerRef}
//                 aspectRatio="16:9"
//                 playsInline
//                 onEnded={() => setVideoEnded(true)}
//                 src={videoData?.videoUrl}
//                  >

//                 <AiFillPlayCircle  />

//                 {
//                     videoEnded && (
//                         <div>
//                             {
//                                 !completedLectures.includes(subSectionId) && (
//                                     <IconBtn 
//                                         disabled={loading}
//                                         onclick={() => handleLectureCompletion()}
//                                         text={!loading ? "Mark As Completed" : "Loading..."}
//                                     />
//                                 )
//                             }

//                             <IconBtn 
//                                 disabled={loading}
//                                 onclick={() => {
//                                     if(playerRef?.current) {
//                                         playerRef.current?.seek(0);
//                                         setVideoEnded(false);
//                                     }
//                                 }}
//                                 text="Rewatch"
//                                 customClasses="text-xl"
//                             />

//                             <div>
//                                 {!isFirstVideo() && (
//                                     <button
//                                     disabled={loading}
//                                     onClick={goToPrevVideo}
//                                     className='blackButton'
//                                     >
//                                         Prev
//                                     </button>
//                                 )}
//                                 {!isLastVideo() && (
//                                     <button
//                                     disabled={loading}
//                                     onClick={goToNextVideo}
//                                     className='blackButton'>
//                                         Next
//                                     </button>
//                                 )}
//                             </div>
//                         </div>
//                     )
//                 }
//             </Player>
//         )
//       }
//       <h1>
//         {videoData?.title}
//       </h1>
//       <p>
//         {videoData?.description}
//       </p>
//     </div>
//   )
// }

// export default VideoDetails
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { markLectureAsComplete } from '../../../services/operations/courseDetailsAPI';
import { updateCompletedLectures } from '../../../slices/viewCourseSlice';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import {AiFillPlayCircle} from "react-icons/ai"
import IconBtn from '../../common/IconBtn';

const VideoDetails = () => {

  const {courseId, sectionId, subSectionId} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const playerRef = useRef();
  const {token} = useSelector((state)=>state.auth);
  const {courseSectionData, courseEntireData, completedLectures} = useSelector((state)=>state.viewCourse);

  const [videoData, setVideoData] = useState([]);
  const [videoEnded, setVideoEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {

    const setVideoSpecificDetails = async() => {
        if(!courseSectionData.length)
            return;
        if(!courseId && !sectionId && !subSectionId) {
            navigate("/dashboard/enrolled-courses");
        }
        else {
            const filteredData = courseSectionData.filter(
                (course) => course._id === sectionId
            )
            const filteredVideoData = filteredData?.[0].subSection.filter(
                (data) => data._id === subSectionId
            )
            setVideoData(filteredVideoData[0]);
            setVideoEnded(false);
        }
    }
    setVideoSpecificDetails();

  },[courseSectionData, courseEntireData, location.pathname])

  const isFirstVideo = () => {
    const currentSectionIndex = courseSectionData.findIndex(
        (data) => data._id === sectionId
    )
    const currentSubSectionIndex = courseSectionData[currentSectionIndex].subSection.findIndex(
        (data) => data._id === subSectionId
    )
    if(currentSectionIndex === 0 && currentSubSectionIndex === 0) {
        return true;
    }
    else {
        return false;
    }
  } 

  const isLastVideo = () => {
    const currentSectionIndex = courseSectionData.findIndex(
        (data) => data._id === sectionId
    )
    const noOfSubSections = courseSectionData[currentSectionIndex].subSection.length;
    const currentSubSectionIndex = courseSectionData[currentSectionIndex].subSection.findIndex(
        (data) => data._id === subSectionId
    )
    if(currentSectionIndex === courseSectionData.length - 1 &&
        currentSubSectionIndex === noOfSubSections - 1) {
            return true;
        }
    else {
        return false;
    }
  }

  const goToNextVideo = () => {
    const currentSectionIndex = courseSectionData.findIndex(
        (data) => data._id === sectionId
    )
    const noOfSubSections = courseSectionData[currentSectionIndex].subSection.length;
    const currentSubSectionIndex = courseSectionData[currentSectionIndex].subSection.findIndex(
        (data) => data._id === subSectionId
    )
    if(currentSubSectionIndex !== noOfSubSections - 1) {
        const nextSubSectionId = courseSectionData[currentSectionIndex].subSection[currentSectionIndex + 1]._id;
        navigate(`/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`)
    }
    else {
        const nextSectionId = courseSectionData[currentSectionIndex + 1]._id;
        const nextSubSectionId = courseSectionData[currentSectionIndex + 1].subSection[0]._id;
        navigate(`/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`)
    }
  }

  const goToPrevVideo = () => {
    const currentSectionIndex = courseSectionData.findIndex(
        (data) => data._id === sectionId
    )
    const noOfSubSections = courseSectionData[currentSectionIndex].subSection.length;
    const currentSubSectionIndex = courseSectionData[currentSectionIndex].subSection.findIndex(
        (data) => data._id === subSectionId
    )
    if(currentSubSectionIndex != 0 ) {
        const prevSubSectionId = courseSectionData[currentSectionIndex].subSection[currentSubSectionIndex - 1];
        navigate(`/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`)
    }
    else {
        const prevSectionId = courseSectionData[currentSectionIndex - 1]._id;
        const prevSubSectionLength = courseSectionData[currentSectionIndex - 1].subSection.length;
        const prevSubSectionId = courseSectionData[currentSectionIndex - 1].subSection[prevSubSectionLength - 1]._id;
        navigate(`/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`)
    }
  }

  const handleLectureCompletion = async() => {
    setLoading(true);
    const res = await markLectureAsComplete({courseId: courseId, subSectionId: subSectionId}, token);
    if(res) {
        dispatch(updateCompletedLectures(subSectionId)); 
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#141414] text-white">
      {
        !videoData ? (
          <div className="flex items-center justify-center h-64 text-zinc-400 text-lg tracking-widest uppercase">
            No Data Found
          </div>
        )
        : (
          <div className="relative group">
            {/* Red top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#2d1617] via-red-500 to-transparent" />

            <Player
              ref={playerRef}
              aspectRatio="16:9"
              playsInline
              onEnded={() => setVideoEnded(true)}
              src={videoData?.videoUrl}
              className="w-full"
            >
              <AiFillPlayCircle className="text-[#2d1617] text-5xl drop-shadow-lg" />

              {videoEnded && (
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-6 z-10 transition-all duration-500">
                  
                  {/* Up Next / Completed overlay */}
                  <p className="text-zinc-400 text-sm uppercase tracking-[0.3em] font-medium">
                    {isLastVideo() ? "You've finished this section" : "Up Next"}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                    {!completedLectures.includes(subSectionId) && (
                      <button
                        disabled={loading}
                        onClick={() => handleLectureCompletion()}
                        className="flex items-center gap-2 bg-[#2d1617] hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-sm transition-all duration-200 text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:shadow-[0_0_30px_rgba(229,9,20,0.6)]"
                      >
                        {!loading ? (
                          <>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            Mark as Completed
                          </>
                        ) : (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                            </svg>
                            Loading...
                          </span>
                        )}
                      </button>
                    )}

                    <button
                      disabled={loading}
                      onClick={() => {
                        if(playerRef?.current) {
                          playerRef.current?.seek(0);
                          setVideoEnded(false);
                        }
                      }}
                      className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-sm transition-all duration-200 text-sm uppercase tracking-widest border border-zinc-600 hover:border-zinc-400"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                      </svg>
                      Rewatch
                    </button>
                  </div>

                  {/* Prev / Next navigation */}
                  <div className="flex gap-4 mt-2">
                    {!isFirstVideo() && (
                      <button
                        disabled={loading}
                        onClick={goToPrevVideo}
                        className="flex items-center gap-2 bg-transparent border border-zinc-600 hover:border-white text-zinc-300 hover:text-white font-medium px-5 py-2.5 rounded-sm transition-all duration-200 text-sm tracking-wider disabled:opacity-40"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        Previous
                      </button>
                    )}
                    {!isLastVideo() && (
                      <button
                        disabled={loading}
                        onClick={goToNextVideo}
                        className="flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 text-sm tracking-wider disabled:opacity-40"
                      >
                        Next
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </Player>
          </div>
        )
      }

      {/* Video Info */}
      <div className="px-6 py-5 border-t border-zinc-800 bg-[#1a1a1a]">
        <h1 className="text-xl font-bold text-white tracking-tight leading-snug">
          {videoData?.title}
        </h1>
        <p className="text-zinc-400 text-sm mt-2 leading-relaxed max-w-3xl">
          {videoData?.description}
        </p>
      </div>
    </div>
  )
}

export default VideoDetails
