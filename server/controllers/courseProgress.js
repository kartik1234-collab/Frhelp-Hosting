const CourseProgress = require("../models/CourseProgress");
const SubSection = require("../models/SubSection");

exports.updateCourseProgress = async (req, res) => {
  try {
    const { courseId, subSectionId } = req.body;
    const userId = req.user.id;

    if (!courseId || !subSectionId) {
      return res.status(400).json({
        success: false,
        message: "Course ID and SubSection ID are required",
      });
    }

    // Validate subsection
    const subSection = await SubSection.findById(subSectionId);
    if (!subSection) {
      return res.status(404).json({
        success: false,
        message: "Invalid SubSection",
      });
    }

    // Check if progress already exists
    let courseProgress = await CourseProgress.findOne({
      courseID: courseId,
      userId: userId,
    });

    // ✅ IF NOT EXIST → CREATE NEW
    if (!courseProgress) {
      courseProgress = await CourseProgress.create({
        courseID: courseId,
        userId: userId,
        completedVideos: [subSectionId],
      });

      return res.status(200).json({
        success: true,
        message: "Lecture marked as completed",
        data: courseProgress,
      });
    }

    // Prevent duplicate completion
    if (courseProgress.completedVideos.includes(subSectionId)) {
      return res.status(400).json({
        success: false,
        message: "Lecture already completed",
      });
    }

    // Push new completed video
    courseProgress.completedVideos.push(subSectionId);
    await courseProgress.save();

    return res.status(200).json({
      success: true,
      message: "Course Progress Updated Successfully",
      data: courseProgress,
    });

  } catch (error) {
    console.error("UPDATE COURSE PROGRESS ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
