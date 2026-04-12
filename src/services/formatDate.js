export const formatDate = (dateString) => {
  if (!dateString) return "Date not available"

  const date = new Date(dateString)

  if (isNaN(date.getTime())) {
    return "Date not available"
  }

  const formattedDate = date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const formattedTime = date.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  return `${formattedDate} | ${formattedTime}`
}
