import { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { FiUploadCloud } from "react-icons/fi"
import { useSelector } from "react-redux"

export default function Upload({
  name,
  label,
  register,
  setValue,
  errors,
  video = false,
  viewData = null,
  editData = null,
}) {

  const [selectedFile, setSelectedFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  )

  // 🔹 Drop handler
  const onDrop = (acceptedFiles) => {
  const file = acceptedFiles[0]

  // 🔥 LIMIT TO 50 MB
  if (file.size > 50 * 1024 * 1024) {
    alert("Video size must be less than 50MB")
    return
  }

  previewFile(file)
  setSelectedFile(file)
}


  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: !video
      ? { "image/*": [".jpeg", ".jpg", ".png"] }
      : { "video/*": [".mp4"] },
    onDrop,
    noClick: true,      // we handle click manually
    noKeyboard: true,
  })

  // 🔹 Preview file
  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  // 🔹 Register field
  useEffect(() => {
    register(name, { required: true })
  }, [register, name])

  // 🔹 Set file into form
  useEffect(() => {
    if (selectedFile) {
      setValue(name, selectedFile, { shouldValidate: true })
    }
  }, [selectedFile, setValue, name])

  return (
    <div className="flex flex-col space-y-2">

      {/* LABEL */}
      <label className="text-sm text-richblack-5">
        {label} {!viewData && <sup className="text-pink-200">*</sup>}
      </label>

      {/* DROP AREA */}
      <div
        {...getRootProps()}
        className={`
          ${isDragActive ? "bg-richblack-600" : "bg-richblack-700"}
          flex min-h-[250px] cursor-pointer items-center justify-center
          rounded-md border-2 border-dotted border-richblack-500
          transition hover:border-yellow-400
        `}
      >

        {/* HIDDEN INPUT */}
        <input {...getInputProps()} />

        {previewSource ? (
          // 🔹 PREVIEW MODE
          <div className="flex w-full flex-col p-6">

            {!video ? (
              <img
                src={previewSource}
                alt="Preview"
                className="h-full w-full rounded-md object-cover"
              />
            ) : (
              <video
                src={previewSource}
                controls
                className="w-full rounded-md"
              />
            )}

            {!viewData && (
              <button
                type="button"
                onClick={() => {
                  setPreviewSource("")
                  setSelectedFile(null)
                  setValue(name, null, { shouldValidate: true })
                }}
                className="mt-3 text-richblack-400 underline hover:text-yellow-50 transition"
              >
                Cancel
              </button>
            )}
          </div>
        ) : (
          // 🔹 EMPTY STATE
          <div
            className="flex w-full flex-col items-center p-6"
            onClick={open}   // 🔥 THIS MAKES CLICK WORK PERFECTLY
          >
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
              <FiUploadCloud className="text-2xl text-yellow-50" />
            </div>

            <p className="mt-2 max-w-[220px] text-center text-sm text-richblack-200">
              Drag and drop an {!video ? "image" : "video"}, or click to{" "}
              <span className="font-semibold text-yellow-50">Browse</span> a file
            </p>

            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center text-xs text-richblack-200">
              <li>Aspect ratio 16:9</li>
              <li>Recommended size 1024x576</li>
            </ul>
          </div>
        )}
      </div>

      {/* ERROR */}
      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  )
}
