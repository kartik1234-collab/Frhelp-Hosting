import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI";
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice";
import VideoDetailsSidebar from "../components/core/ViewCourse/VideoDetailsSidebar";
import CourseReviewModal from "../components/core/ViewCourse/CourseReviewModal";

const ViewCourse = () => {
  const [reviewModal, setReviewModal] = useState(false);
  const { courseId } = useParams();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const setCourseSpecificDetails = async () => {
      const courseData = await getFullDetailsOfCourse(courseId, token);

      dispatch(
        setCourseSectionData(courseData.courseDetails.courseContent)
      );
      dispatch(setEntireCourseData(courseData.courseDetails));
      dispatch(setCompletedLectures(courseData.completedVideos));

      let lectures = 0;
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length;
      });

      dispatch(setTotalNoOfLectures(lectures));
    };

    setCourseSpecificDetails();
  }, []);

  return (
    <>
      <div className="flex h-screen bg-richblack-900 text-white">

        {/* 🔥 LEFT SIDEBAR */}
        <div className="w-[320px] min-w-[300px] max-w-[350px] border-r border-richblack-700 bg-richblack-800 overflow-y-auto">
          <VideoDetailsSidebar setReviewModal={setReviewModal} />
        </div>

        {/* 🔥 RIGHT CONTENT (VIDEO AREA) */}
        <div className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </div>

      </div>

      {/* 🔥 REVIEW MODAL */}
      {reviewModal && (
        <CourseReviewModal setReviewModal={setReviewModal} />
      )}
    </>
  );
};

export default ViewCourse;