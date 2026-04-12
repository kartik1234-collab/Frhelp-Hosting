import { toast } from "react-hot-toast"
// import { updateCompletedLectures } from "../../slices/viewCourseSlice"
import { apiConnector } from "../apiconnector"
import { courseEndpoints } from "../apis"

const {
  COURSE_DETAILS_API,
  COURSE_CATEGORIES_API,
  GET_ALL_COURSE_API,
  CREATE_COURSE_API,
  EDIT_COURSE_API,
  CREATE_SECTION_API,
  CREATE_SUBSECTION_API,
  UPDATE_SECTION_API,
  UPDATE_SUBSECTION_API,
  DELETE_SECTION_API,
  DELETE_SUBSECTION_API,
  GET_ALL_INSTRUCTOR_COURSES_API,
  DELETE_COURSE_API,
  GET_FULL_COURSE_DETAILS_AUTHENTICATED,
  CREATE_RATING_API,
  LECTURE_COMPLETION_API,
} = courseEndpoints

// ---------------- GET ALL COURSES ----------------
export const getAllCourses = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_ALL_COURSE_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Courses")
    }
    result = response?.data?.data
  } catch (error) {
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// ---------------- COURSE DETAILS ----------------
export const fetchCourseDetails = async (courseId) => {
  const toastId = toast.loading("Loading...")
  let result = null
  try {
    const response = await apiConnector("POST", COURSE_DETAILS_API, { courseId })
    if (!response.data.success) throw new Error(response.data.message)
    result = response.data
  } catch (error) {
    result = error.response?.data
  }
  toast.dismiss(toastId) 
  return result
}

// ---------------- CATEGORIES ----------------
export const fetchCourseCategories = async () => {
  let result = []
  try {
    const response = await apiConnector("GET", COURSE_CATEGORIES_API)
    if (!response?.data?.success) throw new Error("Could Not Fetch Categories")
    result = response?.data?.data
  } catch (error) {
    toast.error(error.message)
  }
  return result
}

// ---------------- ADD COURSE ----------------
export const addCourseDetails = async (data) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
    })
    if (!response?.data?.success) throw new Error("Could Not Add Course")
    toast.success("Course Created Successfully")
    result = response?.data?.data
  } catch (error) {
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// ---------------- EDIT COURSE ----------------
export const editCourseDetails = async (data) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", EDIT_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
    })
    if (!response?.data?.success) throw new Error("Could Not Update Course")
    toast.success("Course Updated Successfully")
    result = response?.data?.data
  } catch (error) {
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// ---------------- SECTIONS ----------------
export const createSection = async (data) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_SECTION_API, data)
    if (!response?.data?.success) throw new Error("Could Not Create Section")
    toast.success("Section Created")
    result = response?.data?.updatedCourse
  } catch (error) {
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const updateSection = async (data) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_SECTION_API, data)
    if (!response?.data?.success) throw new Error("Could Not Update Section")
    toast.success("Section Updated")
    result = response?.data?.data
  } catch (error) {
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const deleteSection = async (data) => {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", DELETE_SECTION_API, data)
    if (!response?.data?.success) throw new Error("Could Not Delete Section")
    toast.success("Section Deleted")
  } catch (error) {
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}

// ---------------- SUB SECTIONS ----------------
export const createSubSection = async (data) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_SUBSECTION_API, data)
    if (!response?.data?.success) throw new Error("Could Not Add Lecture")
    toast.success("Lecture Added")
    result = response?.data?.data
  } catch (error) {
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const updateSubSection = async (data) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", UPDATE_SUBSECTION_API, data)
    if (!response?.data?.success) throw new Error("Could Not Update Lecture")
    toast.success("Lecture Updated")
    result = response?.data?.data
  } catch (error) {
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const deleteSubSection = async (data) => {
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", DELETE_SUBSECTION_API, data)
    if (!response?.data?.success) throw new Error("Could Not Delete Lecture")
    toast.success("Lecture Deleted")
  } catch (error) {
    toast.error(error.message)
  }
  toast.dismiss(toastId)
}

// ---------------- INSTRUCTOR COURSES ----------------
// ---------------- INSTRUCTOR COURSES ----------------
export const fetchInstructorCourses = async (token) => {
  let result = []
  try {
    const response = await apiConnector(
      "GET",
      GET_ALL_INSTRUCTOR_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )

    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Instructor Courses")
    }

    result = response.data.data
  } catch (error) {
    console.log("INSTRUCTOR COURSES API ERROR:", error)
    toast.error(error.response?.data?.message || "Unauthorized")
  }
  return result
}




// ---------------- DELETE COURSE ----------------
export const deleteCourse = async (data) => {
  try {
    const response = await apiConnector(
      "DELETE",
      DELETE_COURSE_API,
      data
    )

    if (!response?.data?.success) {
      throw new Error("Could Not Delete Course")
    }

    toast.success("Course Deleted")
    return true
  } catch (error) {
    console.log("DELETE COURSE ERROR:", error)
    toast.error(error.response?.data?.message || "Unauthorized")
    return false
  }
}





// ---------------- FULL COURSE DETAILS ----------------
export const getFullDetailsOfCourse = async (courseId) => {
  const toastId = toast.loading("Loading...")
  let result = null
  try {
    const response = await apiConnector("POST", GET_FULL_COURSE_DETAILS_AUTHENTICATED, { courseId })
    if (!response.data.success) throw new Error(response.data.message)
    result = response?.data?.data
  } catch (error) {
    result = error.response?.data
  }
  toast.dismiss(toastId)
  return result
}

// ---------------- MARK LECTURE COMPLETE ----------------
export const markLectureAsComplete = async (data) => {
  const toastId = toast.loading("Loading...")
  let result = false
  try {
    const response = await apiConnector("POST", LECTURE_COMPLETION_API, data)
    toast.success("Lecture Completed")
    result = true
  } catch (error) {
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// ---------------- CREATE RATING ----------------
export const createRating = async (data) => {
  const toastId = toast.loading("Loading...")
  let success = false
  try {
    const response = await apiConnector("POST", CREATE_RATING_API, data)
    if (!response?.data?.success) throw new Error("Could Not Create Rating")
    toast.success("Rating Created")
    success = true
  } catch (error) {
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return success
}
