// import React, { useEffect } from 'react'
// import { useForm } from 'react-hook-form';
// import { useSelector } from 'react-redux'
// import IconBtn from '../../common/IconBtn';
// import { createRating } from '../../../services/operations/courseDetailsAPI';
// import ReactStars from "react-rating-stars-component";

// const CourseReviewModal = ({setReviewModal}) => {
//     const {user} = useSelector((state)=>state.profile);
//     const {token} = useSelector((state) => state.auth);
//     const {courseEntireData} = useSelector((state)=> state.viewCourse);

//     const {
//         register,
//         handleSubmit,
//         setValue,
//         formState: {errors},
//     } = useForm();

//     useEffect(()=> {
//         setValue("courseExperience", "");
//         setValue("courseRating", 0);
//     },[])

//     const ratingChanged = (newRating) => {
//         setValue("courseRating", newRating);
//     }

//     const onSubmit = async(data) => {
//         await createRating(
//             {
//                 courseId:courseEntireData._id,
//                 rating:data.courseRating,
//                 review:data.courseExperience,
//             },
//             token
//         );
//         setReviewModal(false);
//     }

//   return (
//     <div>
//         <div>
//             {/* Modal header */}
//             <div>
//                 <p>Add Review</p>
//                 <button 
//                 onClick={() => setReviewModal(false)}
//                 >
//                     Close
//                 </button>
//             </div>

//             {/* Modal Body */}
//             <div>

//                 <div>
//                     <img 
//                         src={user?.image}
//                         alt='user Image'
//                         className='aspect-square  w-[50px] rounded-full object-cover'
//                     />
//                     <div>
//                         <p>{user?.firstName} {user?.lastName}</p>
//                         <p>Posting Publicly</p>
//                     </div>
//                 </div>


//                 <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className='mt-6 flex flex-col items-center'>

//                     <ReactStars 
//                         count={5}
//                         onChange={ratingChanged}
//                         size={24}
//                         activeColor="#ffd700"
//                     />

//                     <div>
//                         <label htmlFor='courseExperience'>
//                             Add Your Experience*
//                         </label>
//                         <textarea 
//                             id='courseExperience'
//                             placeholder='Add Your Experience here'
//                             {...register("courseExperience", {required:true})}
//                             className='form-style min-h-[130px] w-full'
//                         />
//                         {
//                             errors.courseExperience && (
//                                 <span>
//                                     Please add your experience
//                                 </span>
//                             )
//                         }
//                     </div>
//                     {/* Cancel and Save button */}
//                     <div>
//                         <button
//                         onClick={() => setReviewModal(false)}
//                         >
//                             Cancel
//                         </button>
//                         <IconBtn 
//                             text="save"
//                         />
//                     </div>


//                 </form>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default CourseReviewModal
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux'
import IconBtn from '../../common/IconBtn';
import { createRating } from '../../../services/operations/courseDetailsAPI';
import ReactStars from "react-rating-stars-component";

const CourseReviewModal = ({setReviewModal}) => {
    const {user} = useSelector((state)=>state.profile);
    const {token} = useSelector((state) => state.auth);
    const {courseEntireData} = useSelector((state)=> state.viewCourse);

    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm();

    useEffect(()=> {
        setValue("courseExperience", "");
        setValue("courseRating", 0);
    },[])

    const ratingChanged = (newRating) => {
        setValue("courseRating", newRating);
    }

    const onSubmit = async(data) => {
        await createRating(
            {
                courseId:courseEntireData._id,
                rating:data.courseRating,
                review:data.courseExperience,
            },
            token
        );
        setReviewModal(false);
    }

  return (
    /* Backdrop */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-[#1a1a1a] border border-zinc-800 rounded-sm shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Red top accent */}
        <div className="h-1 w-full bg-gradient-to-r from-[#E50914] via-red-500 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <div>
            <p className="text-white font-bold text-lg tracking-tight">Rate This Course</p>
            <p className="text-zinc-500 text-xs mt-0.5 truncate max-w-[260px]">
              {courseEntireData?.courseName}
            </p>
          </div>
          <button
            onClick={() => setReviewModal(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          
          {/* User info */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src={user?.image}
              alt='user Image'
              className="w-11 h-11 rounded-full object-cover border-2 border-zinc-700 ring-2 ring-[#E50914]/30"
            />
            <div>
              <p className="text-white font-semibold text-sm">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-zinc-500 text-xs flex items-center gap-1">
                <svg className="w-3 h-3 text-[#E50914]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Posting Publicly
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Stars */}
            <div className="flex flex-col items-center gap-1 py-3 bg-zinc-900/60 rounded-sm border border-zinc-800">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Your Rating</p>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={36}
                activeColor="#E50914"
                color="#3f3f46"
              />
            </div>

            {/* Textarea */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor='courseExperience'
                className="text-zinc-300 text-xs font-semibold uppercase tracking-[0.1em]"
              >
                Your Experience <span className="text-[#E50914]">*</span>
              </label>
              <textarea
                id='courseExperience'
                placeholder='What did you think about this course?'
                {...register("courseExperience", {required:true})}
                className="w-full min-h-[110px] bg-zinc-900 border border-zinc-700 focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914]/40 outline-none text-white placeholder-zinc-600 text-sm px-4 py-3 rounded-sm resize-none transition-all duration-200"
              />
              {errors.courseExperience && (
                <span className="text-[#E50914] text-xs flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  Please share your experience
                </span>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pt-1">
              <button
                type="button"
                onClick={() => setReviewModal(false)}
                className="flex-1 bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-400 hover:text-white font-medium py-2.5 rounded-sm text-sm uppercase tracking-widest transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#452021] hover:bg-red-700 text-white font-bold py-2.5 rounded-sm text-sm uppercase tracking-widest transition-all duration-200 shadow-[0_0_16px_rgba(229,9,20,0.35)] hover:shadow-[0_0_24px_rgba(229,9,20,0.55)]"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CourseReviewModal
