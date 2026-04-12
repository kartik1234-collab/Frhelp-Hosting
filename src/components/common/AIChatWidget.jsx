// import React, { useState, useRef, useEffect } from "react"
// import { useSelector } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { apiConnector } from "../../services/apiconnector"
// import { profileEndpoints, aiEndpoints } from "../../services/apis"
// import { BiSolidSend } from "react-icons/bi"

// // ─────────────────────────────────────────────
// // Slug helper: "Web Development" → "web-development"
// // ─────────────────────────────────────────────
// const toSlug = (str = "") =>
//   str.trim().toLowerCase().replace(/\s+/g, "-")

// const AIChatWidget = () => {
//   const navigate  = useNavigate()
//   const { user }  = useSelector((state) => state.profile)
//   const { token } = useSelector((state) => state.auth)

//   // ── State ──────────────────────────────────
//   const [open, setOpen]                           = useState(false)
//   const [minimized, setMinimized]                 = useState(false)
//   const [showGreeting, setShowGreeting]           = useState(false)
//   const [greetingFadingOut, setGreetingFadingOut] = useState(false)
//   const [input, setInput]                         = useState("")
//   const [loading, setLoading]                     = useState(false)
//   const [enrolledCourses, setEnrolledCourses]     = useState([])

//   const [messages, setMessages] = useState([
//     {
//       from: "bot",
//       text: "Hi 👋 I am FrHelp AI. How can I assist you today?",
//       time: new Date(),
//     },
//   ])

//   const bottomRef    = useRef(null)
//   const canvasRef    = useRef(null)
//   const animFrameRef = useRef(null)

//   // ─────────────────────────────────────────────
//   // Inject CSS
//   // ─────────────────────────────────────────────
//   useEffect(() => {
//     const id = "ai-chat-widget-styles"
//     if (document.getElementById(id)) return
//     const style = document.createElement("style")
//     style.id    = id
//     style.textContent = `
//       @keyframes aurora-shift {
//         0%   { background-position: 0% 50%; }
//         50%  { background-position: 100% 50%; }
//         100% { background-position: 0% 50%; }
//       }
//       @keyframes pulse-ring {
//         0%   { transform: scale(0.9); opacity: 0.7; }
//         100% { transform: scale(1.65); opacity: 0; }
//       }
//       @keyframes bubble-pop {
//         0%   { transform: scale(0.72) translateY(10px); opacity: 0; }
//         65%  { transform: scale(1.04) translateY(-1px); }
//         100% { transform: scale(1) translateY(0); opacity: 1; }
//       }
//       @keyframes slide-up-panel {
//         0%   { transform: translateY(55px) scale(0.95); opacity: 0; }
//         100% { transform: translateY(0) scale(1); opacity: 1; }
//       }
//       @keyframes greeting-in {
//         0%   { opacity: 0; transform: translate(-50%, -44%); letter-spacing: 8px; filter: blur(4px); }
//         100% { opacity: 1; transform: translate(-50%, -50%); letter-spacing: 0.5px; filter: blur(0px); }
//       }
//       @keyframes greeting-out {
//         0%   { opacity: 1; transform: translate(-50%, -50%); filter: blur(0px); }
//         100% { opacity: 0; transform: translate(-50%, -55%); filter: blur(8px); }
//       }
//       @keyframes typing-bounce {
//         0%, 60%, 100% { transform: translateY(0);    opacity: 0.3; }
//         30%            { transform: translateY(-6px); opacity: 1;   }
//       }
//       @keyframes btn-glow-pulse {
//         0%,100% { box-shadow: 0 0 16px rgba(255,255,255,0.12), 0 4px 24px rgba(0,0,0,0.55); }
//         50%     { box-shadow: 0 0 32px rgba(255,255,255,0.32), 0 4px 32px rgba(0,0,0,0.65); }
//       }
//       @keyframes backdrop-in  { from { opacity: 0; } to { opacity: 1; } }
//       @keyframes status-blink { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
//       @keyframes green-dot-pulse {
//         0%,100% { box-shadow: 0 0 6px rgba(34,197,94,0.5); }
//         50%      { box-shadow: 0 0 12px rgba(34,197,94,0.9); }
//       }
//       @keyframes minimized-slide {
//         0%   { transform: translateX(30px); opacity: 0; }
//         100% { transform: translateX(0);    opacity: 1; }
//       }
//       @keyframes chip-pop {
//         0%   { transform: scale(0.85); opacity: 0; }
//         100% { transform: scale(1);    opacity: 1; }
//       }

//       .ai-scrollbar::-webkit-scrollbar       { width: 3px; }
//       .ai-scrollbar::-webkit-scrollbar-track { background: transparent; }
//       .ai-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
//       .ai-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.22); }

//       .ai-bubble          { animation: bubble-pop      0.38s cubic-bezier(0.34,1.56,0.64,1) both; }
//       .ai-panel           { animation: slide-up-panel  0.5s  cubic-bezier(0.34,1.1,0.64,1)  both; }
//       .ai-btn             { animation: btn-glow-pulse  2.5s  ease-in-out infinite; }
//       .ai-greeting-in     { animation: greeting-in     0.65s cubic-bezier(0.34,1.3,0.64,1)  both; }
//       .ai-greeting-out    { animation: greeting-out    0.5s  ease forwards; }
//       .ai-backdrop        { animation: backdrop-in     0.3s  ease both; }
//       .ai-minimized-slide { animation: minimized-slide 0.3s  cubic-bezier(0.34,1.3,0.64,1)  both; }
//       .ai-chip            { animation: chip-pop        0.3s  cubic-bezier(0.34,1.4,0.64,1)  both; }

//       .ai-aurora {
//         background: linear-gradient(
//           120deg,
//           rgba(255,255,255,0.55),
//           rgba(160,160,160,0.3),
//           rgba(40,40,40,0.25),
//           rgba(210,210,210,0.4),
//           rgba(255,255,255,0.55)
//         );
//         background-size: 400% 400%;
//         animation: aurora-shift 5s ease infinite;
//       }

//       .ai-input::placeholder { color: rgba(255,255,255,0.25); }

//       .ai-course-chip {
//         display: inline-flex; align-items: center; gap: 6px;
//         padding: 6px 12px; border-radius: 20px; cursor: pointer;
//         font-size: 12px; font-weight: 600; letter-spacing: 0.2px;
//         background: rgba(255,255,255,0.06);
//         border: 1px solid rgba(255,255,255,0.12);
//         color: rgba(255,255,255,0.78);
//         transition: all 0.2s ease;
//         font-family: inherit;
//       }
//       .ai-course-chip:hover {
//         background: rgba(255,255,255,0.13); color: #fff;
//         border-color: rgba(255,255,255,0.28);
//         transform: translateY(-1px);
//         box-shadow: 0 4px 14px rgba(0,0,0,0.3);
//       }
//     `
//     document.head.appendChild(style)
//     return () => document.getElementById(id)?.remove()
//   }, [])

//   // ─────────────────────────────────────────────
//   // Particle Canvas
//   // ─────────────────────────────────────────────
//   useEffect(() => {
//     if (!open || minimized) { cancelAnimationFrame(animFrameRef.current); return }
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext("2d")
//     canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight
//     const particles = Array.from({ length: 40 }, () => ({
//       x: Math.random() * canvas.width,  y: Math.random() * canvas.height,
//       r: Math.random() * 1.3 + 0.2,
//       dx: (Math.random() - 0.5) * 0.22, dy: (Math.random() - 0.5) * 0.22,
//       opacity: Math.random() * 0.35 + 0.05,
//     }))
//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       particles.forEach((p) => {
//         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(255,255,255,${p.opacity})`; ctx.fill()
//         p.x += p.dx; p.y += p.dy
//         if (p.x < 0 || p.x > canvas.width)  p.dx *= -1
//         if (p.y < 0 || p.y > canvas.height) p.dy *= -1
//       })
//       animFrameRef.current = requestAnimationFrame(draw)
//     }
//     draw()
//     return () => cancelAnimationFrame(animFrameRef.current)
//   }, [open, minimized])

//   // ── Auto Scroll (fixed: includes loading in deps) ──
//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages, loading])

//   // ── Escape Key ──
//   useEffect(() => {
//     const handler = (e) => { if (e.key === "Escape") setOpen(false) }
//     window.addEventListener("keydown", handler)
//     return () => window.removeEventListener("keydown", handler)
//   }, [])

//   // ── Open with Greeting ──
//   const handleOpen = () => {
//     setOpen(true); setMinimized(false)
//     setGreetingFadingOut(false); setShowGreeting(true)
//     setTimeout(() => {
//       setGreetingFadingOut(true)
//       setTimeout(() => setShowGreeting(false), 500)
//     }, 1800)
//   }

//   const formatTime = (date) =>
//     new Date(date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

//   // ── Typing Animation ──
//   const fakeTyping = (text, callback) => {
//     let i = 0, temp = ""
//     const interval = setInterval(() => {
//       temp += text[i]
//       setMessages((prev) => {
//         const updated = [...prev]
//         updated[updated.length - 1] = { ...updated[updated.length - 1], text: temp }
//         return updated
//       })
//       i++
//       if (i >= text.length) { clearInterval(interval); if (callback) callback() }
//     }, 15)
//   }

//   // ─────────────────────────────────────────────
//   // Fetch & Cache Enrolled Courses
//   // ─────────────────────────────────────────────
//   const fetchCourses = async () => {
//     try {
//       if (!token) return []
//       const res = await apiConnector(
//         "GET",
//         profileEndpoints.GET_USER_ENROLLED_COURSES_API,
//         null,
//         { Authorization: `Bearer ${token}` }
//       )
//       if (res?.data?.success) {
//         const courses = res.data.data
//         setEnrolledCourses(courses)
//         return courses
//       }
//       return []
//     } catch { return [] }
//   }

//   // ─────────────────────────────────────────────
//   // Ask AI — passes full context including login status
//   // ─────────────────────────────────────────────
//   const askAI = async (message, courses) => {
//     try {
//       const contextData = {
//         isLoggedIn:  !!user,                        // FIX: explicit login flag
//         accountType: user?.accountType ?? "guest",
//         userName:    user?.firstName   ?? "Guest",
//         courses: courses.map((c) => ({
//           id:       c._id,
//           name:     c.courseName,
//           progress: c.progressPercentage ?? 0,
//         })),
//       }

//       const res = await apiConnector("POST", aiEndpoints.AI_CHAT_API, {
//         message,
//         history:     messages,
//         userContext: contextData,
//       })

//       if (!res?.data?.success)
//         return { reply: "Sorry, something went wrong. Try again!", action: "none", category: "" }

//       return {
//         reply:    res.data.reply    ?? "",
//         action:   res.data.action   ?? "none",
//         category: res.data.category ?? "",
//         courseId: res.data.courseId ?? "",
//       }
//     } catch {
//       return { reply: "AI error, please try again.", action: "none", category: "" }
//     }
//   }

//   // ─────────────────────────────────────────────
//   // Centralised Navigation — logged-in vs logged-out
//   // ─────────────────────────────────────────────
//   const handleNavigate = (action, category = "", courseId = "") => {
//     const isStudent = user?.accountType === "Student"

//     // Public actions — available to everyone
//     const publicMap = {
//       open_login:          "/login",
//       open_signup:         "/signup",
//       open_contact:        "/contact",
//       open_about:          "/about",
//       open_home:           "/",
//     }

//     if (publicMap[action]) { navigate(publicMap[action]); return }

//     if (action === "open_catalog") {
//       navigate(`/catalog/${toSlug(category) || "web-development"}`); return
//     }

//     if (action === "open_course_details" && courseId) {
//       navigate(`/courses/${courseId}`); return
//     }

//     // Private actions — only if logged in
//     if (!user) return

//     switch (action) {
//       case "open_profile":
//         navigate("/dashboard/my-profile"); break

//       case "open_settings":
//         navigate("/dashboard/Settings"); break

//       case "open_cart":
//         if (isStudent) navigate("/dashboard/cart"); break

//       case "open_courses":
//       case "open_enrolled_courses":
//         if (isStudent) navigate("/dashboard/enrolled-courses"); break

//       default: break
//     }
//   }

//   // ─────────────────────────────────────────────
//   // Handle Send — main logic unchanged, bugs fixed
//   // ─────────────────────────────────────────────
//   const handleSend = async () => {
//     if (!input.trim()) return

//     const sentText = input.trim()
//     setMessages((prev) => [...prev, { from: "user", text: sentText, time: new Date() }])
//     setInput("")
//     setLoading(true)
//     setMessages((prev) => [...prev, { from: "bot", text: "", time: new Date() }])

//     // Fetch courses (returns [] if not logged in)
//     const courses = await fetchCourses()

//     const ai = await askAI(sentText, courses)

//     fakeTyping(ai.reply, () => {
//       // Navigate (works for both logged-in and logged-out based on action)
//       handleNavigate(ai.action, ai.category, ai.courseId)

//       // If AI lists courses → append clickable chip row
//       const courseListActions = ["list_courses", "open_courses", "open_enrolled_courses", "show_courses"]
//       if (courseListActions.includes(ai.action) && courses.length > 0) {
//         setMessages((prev) => [
//           ...prev,
//           {
//             from: "bot",
//             type: "course_chips",
//             courses: courses.map((c) => ({ name: c.courseName, id: c._id })),
//             text: "",
//             time: new Date(),
//           },
//         ])
//       }
//     })

//     setLoading(false)
//   }

//   // ── Enter Key ──
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend() }
//   }

//   // ─────────────────────────────────────────────
//   // Sub-components
//   // ─────────────────────────────────────────────
//   const BotAvatar = () => (
//     <div style={{ position: "relative", flexShrink: 0, width: "28px", height: "28px", marginTop: "2px" }}>
//       <div style={{
//         position: "absolute", inset: "-4px", borderRadius: "50%",
//         background: "rgba(255,255,255,0.07)",
//         animation: "pulse-ring 2s ease-out infinite",
//       }} />
//       <div style={{
//         width: "100%", height: "100%", borderRadius: "50%",
//         background: "linear-gradient(135deg, #2c2c2c, #0e0e0e)",
//         border: "1px solid rgba(255,255,255,0.14)",
//         display: "flex", alignItems: "center", justifyContent: "center",
//         fontSize: "13px", position: "relative", zIndex: 1,
//       }}>🤖</div>
//     </div>
//   )

//   const CourseChips = ({ courses }) => (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
//       {courses.map((course, i) => (
//         <button
//           key={course.id || i}
//           className="ai-course-chip ai-chip"
//           style={{ animationDelay: `${i * 0.07}s` }}
//           onClick={() => {
//             if (course.id) navigate(`/courses/${course.id}`)
//             else navigate("/dashboard/enrolled-courses")
//           }}
//         >
//           <span style={{ opacity: 0.5, fontSize: "11px" }}>↗</span>
//           {course.name}
//         </button>
//       ))}
//     </div>
//   )

//   const HeaderBtn = ({ label, onClick, danger, title }) => (
//     <button
//       onClick={onClick} title={title}
//       style={{
//         width: "30px", height: "30px", borderRadius: "50%",
//         background: "rgba(255,255,255,0.05)",
//         border: "1px solid rgba(255,255,255,0.09)",
//         color: "rgba(255,255,255,0.45)", cursor: "pointer",
//         display: "flex", alignItems: "center", justifyContent: "center",
//         transition: "all 0.2s", fontSize: label === "×" ? "19px" : "16px",
//         fontWeight: 300, lineHeight: 1,
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.background  = danger ? "rgba(220,50,50,0.15)"   : "rgba(255,255,255,0.12)"
//         e.currentTarget.style.color       = danger ? "#f87171"                : "#fff"
//         e.currentTarget.style.borderColor = danger ? "rgba(248,113,113,0.22)" : "rgba(255,255,255,0.18)"
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.background  = "rgba(255,255,255,0.05)"
//         e.currentTarget.style.color       = "rgba(255,255,255,0.45)"
//         e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"
//       }}
//     >
//       {label}
//     </button>
//   )

//   // ─────────────────────────────────────────────
//   // Render
//   // ─────────────────────────────────────────────
//   return (
//     <>
//       {/* ── Backdrop (lighter, doesn't kill main page visibility) ── */}
//       {open && !minimized && (
//         <div
//           className="ai-backdrop"
//           onClick={() => setOpen(false)}
//           style={{
//             position: "fixed", inset: 0, zIndex: 40,
//             background: "rgba(0,0,0,0.28)",   // reduced from 0.6
//             backdropFilter: "blur(2px)",        // reduced from 6px
//           }}
//         />
//       )}

//       {/* ── Greeting Overlay ── */}
//       {showGreeting && (
//         <div
//           className={greetingFadingOut ? "ai-greeting-out" : "ai-greeting-in"}
//           style={{
//             position: "fixed", top: "50%", left: "50%",
//             zIndex: 100, textAlign: "center", pointerEvents: "none",
//           }}
//         >
//           <div style={{
//             fontSize: "34px", fontWeight: 800, color: "#fff",
//             textShadow: "0 0 50px rgba(255,255,255,0.95), 0 0 100px rgba(255,255,255,0.35)",
//             letterSpacing: "0.5px", fontFamily: "system-ui, -apple-system, sans-serif",
//           }}>
//             ✦ FrHelp at your service
//           </div>
//           <div style={{
//             color: "rgba(255,255,255,0.4)", fontSize: "12px",
//             marginTop: "12px", letterSpacing: "3px",
//             textTransform: "uppercase", fontWeight: 400,
//           }}>
//             Your AI Learning Assistant
//           </div>
//         </div>
//       )}

//       {/* ── Main Widget Container ── */}
//       <div style={{
//         position: "fixed", bottom: "24px", right: "24px", zIndex: 50,
//         display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px",
//       }}>

//         {/* ═══════════════════════════════════
//             FULL CHAT PANEL
//         ═══════════════════════════════════ */}
//         {open && !minimized && (
//           <div className="ai-panel" style={{ position: "relative", width: "420px", height: "80vh", maxHeight: "80vh" }}>

//             {/* Aurora border */}
//             <div className="ai-aurora" style={{ position: "absolute", inset: 0, borderRadius: "20px" }} />

//             {/* Inner dark panel */}
//             <div style={{
//               position: "absolute", inset: "1px", borderRadius: "19px",
//               background: "rgba(7,7,9,0.97)", backdropFilter: "blur(20px)",
//               display: "flex", flexDirection: "column", overflow: "hidden",
//               boxShadow: "0 30px 80px rgba(0,0,0,0.85), 0 0 60px rgba(255,255,255,0.025)",
//             }}>

//               {/* Header */}
//               <div style={{
//                 padding: "16px 20px",
//                 background: "linear-gradient(180deg, rgba(255,255,255,0.045) 0%, transparent 100%)",
//                 borderBottom: "1px solid rgba(255,255,255,0.06)",
//                 display: "flex", alignItems: "center", justifyContent: "space-between",
//                 flexShrink: 0,
//               }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                   <div style={{ position: "relative" }}>
//                     <div style={{
//                       width: "40px", height: "40px", borderRadius: "50%",
//                       background: "linear-gradient(135deg, #2c2c2c, #0d0d0d)",
//                       border: "1px solid rgba(255,255,255,0.13)",
//                       display: "flex", alignItems: "center", justifyContent: "center",
//                       fontSize: "18px", boxShadow: "0 0 22px rgba(255,255,255,0.06)",
//                     }}>🤖</div>
//                     <div style={{
//                       position: "absolute", bottom: "1px", right: "1px",
//                       width: "10px", height: "10px", borderRadius: "50%",
//                       background: "#22c55e", border: "2px solid rgba(7,7,9,0.97)",
//                       animation: "green-dot-pulse 2s ease-in-out infinite",
//                     }} />
//                   </div>
//                   <div>
//                     <div style={{ color: "#fff", fontWeight: 700, fontSize: "15px", letterSpacing: "0.3px" }}>
//                       FrHelp AI
//                     </div>
//                     <div style={{
//                       color: loading ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.3)",
//                       fontSize: "11px", marginTop: "2px",
//                       animation: loading ? "status-blink 1s ease-in-out infinite" : "none",
//                     }}>
//                       {loading ? "✦ Typing..." : "✦ Online · Ready to help"}
//                     </div>
//                   </div>
//                 </div>
//                 <div style={{ display: "flex", gap: "8px" }}>
//                   <HeaderBtn label="—" title="Minimize" onClick={() => setMinimized(true)} danger={false} />
//                   <HeaderBtn label="×" title="Close"    onClick={() => setOpen(false)}    danger={true}  />
//                 </div>
//               </div>

//               {/* Messages */}
//               <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
//                 <canvas ref={canvasRef} style={{
//                   position: "absolute", inset: 0, width: "100%", height: "100%",
//                   pointerEvents: "none", opacity: 0.45,
//                 }} />

//                 <div className="ai-scrollbar" style={{
//                   height: "100%", overflowY: "auto",
//                   padding: "20px 16px",
//                   display: "flex", flexDirection: "column", gap: "14px",
//                   position: "relative", zIndex: 1,
//                 }}>
//                   {messages.map((msg, index) => {

//                     // ── Course chips row ──
//                     if (msg.type === "course_chips") {
//                       return (
//                         <div key={index} className="ai-bubble"
//                           style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
//                           <BotAvatar />
//                           <div style={{ maxWidth: "80%" }}>
//                             <div style={{
//                               padding: "9px 13px", marginBottom: "8px",
//                               borderRadius: "18px 18px 18px 4px",
//                               background: "rgba(255,255,255,0.05)",
//                               border: "1px solid rgba(255,255,255,0.08)",
//                               color: "rgba(255,255,255,0.6)", fontSize: "12px",
//                             }}>
//                               Tap a course to open it ↓
//                             </div>
//                             <CourseChips courses={msg.courses} />
//                             <span style={{
//                               fontSize: "10px", color: "rgba(255,255,255,0.18)",
//                               display: "block", marginTop: "6px", paddingLeft: "4px",
//                             }}>
//                               {formatTime(msg.time)}
//                             </span>
//                           </div>
//                         </div>
//                       )
//                     }

//                     // ── Regular message ──
//                     return (
//                       <div key={index} className="ai-bubble" style={{
//                         display: "flex",
//                         flexDirection: msg.from === "user" ? "row-reverse" : "row",
//                         alignItems: "flex-end", gap: "8px",
//                       }}>
//                         {msg.from === "bot" && <BotAvatar />}
//                         <div style={{
//                           maxWidth: "75%", display: "flex", flexDirection: "column", gap: "4px",
//                           alignItems: msg.from === "user" ? "flex-end" : "flex-start",
//                         }}>
//                           <div style={{
//                             padding: "10px 14px",
//                             borderRadius: msg.from === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
//                             fontSize: "13.5px", lineHeight: "1.6",
//                             ...(msg.from === "user"
//                               ? {
//                                   background: "linear-gradient(135deg, rgba(255,255,255,0.93), rgba(205,205,205,0.9))",
//                                   color: "#080808",
//                                   boxShadow: "0 4px 20px rgba(255,255,255,0.1), 0 2px 8px rgba(0,0,0,0.4)",
//                                 }
//                               : {
//                                   background: "rgba(255,255,255,0.05)", backdropFilter: "blur(14px)",
//                                   border: "1px solid rgba(255,255,255,0.08)",
//                                   color: "rgba(255,255,255,0.88)",
//                                   boxShadow: "0 4px 20px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.04)",
//                                 }),
//                           }}>
//                             {msg.text}
//                           </div>
//                           <span style={{
//                             fontSize: "10px", color: "rgba(255,255,255,0.18)",
//                             paddingLeft: "4px", paddingRight: "4px",
//                           }}>
//                             {formatTime(msg.time)}
//                           </span>
//                         </div>
//                       </div>
//                     )
//                   })}

//                   {/* 3-dot typing indicator */}
//                   {loading && (
//                     <div style={{ display: "flex", alignItems: "flex-end", gap: "8px" }}>
//                       <BotAvatar />
//                       <div style={{
//                         padding: "12px 16px", borderRadius: "18px 18px 18px 4px",
//                         background: "rgba(255,255,255,0.05)", backdropFilter: "blur(14px)",
//                         border: "1px solid rgba(255,255,255,0.08)",
//                         display: "flex", gap: "5px", alignItems: "center",
//                       }}>
//                         {[0, 1, 2].map((i) => (
//                           <span key={i} style={{
//                             width: "6px", height: "6px", borderRadius: "50%",
//                             background: "rgba(255,255,255,0.5)", display: "inline-block",
//                             animation: `typing-bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
//                           }} />
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   <div ref={bottomRef} />
//                 </div>
//               </div>

//               {/* Input */}
//               <div style={{
//                 padding: "14px 16px",
//                 borderTop: "1px solid rgba(255,255,255,0.055)",
//                 background: "rgba(255,255,255,0.018)",
//                 display: "flex", alignItems: "center", gap: "10px",
//                 flexShrink: 0,
//               }}>
//                 <input
//                   className="ai-input"
//                   type="text"
//                   placeholder="Ask anything..."
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyDown={handleKeyDown}
//                   style={{
//                     flex: 1,
//                     background: "rgba(255,255,255,0.04)",
//                     border: "1px solid rgba(255,255,255,0.08)",
//                     borderRadius: "12px", padding: "11px 14px",
//                     color: "#fff", fontSize: "13.5px", outline: "none",
//                     transition: "border 0.25s, box-shadow 0.25s", fontFamily: "inherit",
//                   }}
//                   onFocus={(e) => {
//                     e.target.style.borderColor = "rgba(255,255,255,0.22)"
//                     e.target.style.boxShadow   = "0 0 0 3px rgba(255,255,255,0.03)"
//                   }}
//                   onBlur={(e) => {
//                     e.target.style.borderColor = "rgba(255,255,255,0.08)"
//                     e.target.style.boxShadow   = "none"
//                   }}
//                 />
//                 <button
//                   onClick={handleSend}
//                   disabled={!input.trim()}
//                   style={{
//                     width: "40px", height: "40px", borderRadius: "12px",
//                     background: input.trim()
//                       ? "linear-gradient(135deg, rgba(255,255,255,0.94), rgba(195,195,195,0.88))"
//                       : "rgba(255,255,255,0.05)",
//                     border: "1px solid " + (input.trim() ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.07)"),
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     cursor: input.trim() ? "pointer" : "not-allowed",
//                     color: input.trim() ? "#080808" : "rgba(255,255,255,0.18)",
//                     transition: "all 0.22s", flexShrink: 0,
//                     boxShadow: input.trim() ? "0 0 20px rgba(255,255,255,0.1)" : "none",
//                   }}
//                   onMouseEnter={(e) => {
//                     if (input.trim()) {
//                       e.currentTarget.style.transform = "scale(1.08)"
//                       e.currentTarget.style.boxShadow = "0 0 28px rgba(255,255,255,0.2)"
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = "scale(1)"
//                     e.currentTarget.style.boxShadow = input.trim() ? "0 0 20px rgba(255,255,255,0.1)" : "none"
//                   }}
//                 >
//                   <BiSolidSend size={16} />
//                 </button>
//               </div>

//             </div>
//           </div>
//         )}

//         {/* ═══════════════════════════════════
//             MINIMIZED BAR
//         ═══════════════════════════════════ */}
//         {open && minimized && (
//           <div className="ai-minimized-slide" style={{
//             background: "rgba(7,7,9,0.96)",
//             border: "1px solid rgba(255,255,255,0.1)",
//             borderRadius: "14px", padding: "10px 16px",
//             display: "flex", alignItems: "center", gap: "12px",
//             boxShadow: "0 8px 32px rgba(0,0,0,0.55), 0 0 20px rgba(255,255,255,0.03)",
//             backdropFilter: "blur(20px)",
//           }}>
//             <div style={{
//               width: "8px", height: "8px", borderRadius: "50%",
//               background: "#22c55e", flexShrink: 0,
//               animation: "green-dot-pulse 2s ease-in-out infinite",
//             }} />
//             <span style={{ color: "rgba(255,255,255,0.52)", fontSize: "13px", fontWeight: 500 }}>
//               FrHelp AI
//             </span>
//             <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.08)" }} />
//             <button
//               onClick={() => setMinimized(false)}
//               style={{
//                 padding: "5px 12px", borderRadius: "8px",
//                 background: "rgba(255,255,255,0.07)",
//                 border: "1px solid rgba(255,255,255,0.1)",
//                 color: "rgba(255,255,255,0.62)", fontSize: "12px",
//                 cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit",
//               }}
//               onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "#fff" }}
//               onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.62)" }}
//             >
//               Expand ↑
//             </button>
//             <button
//               onClick={() => setOpen(false)}
//               style={{
//                 width: "24px", height: "24px", display: "flex",
//                 alignItems: "center", justifyContent: "center", borderRadius: "50%",
//                 background: "rgba(255,255,255,0.04)",
//                 border: "1px solid rgba(255,255,255,0.07)",
//                 color: "rgba(255,255,255,0.35)", cursor: "pointer",
//                 fontSize: "16px", transition: "all 0.2s",
//               }}
//               onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(220,50,50,0.14)"; e.currentTarget.style.color = "#f87171" }}
//               onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "rgba(255,255,255,0.35)" }}
//             >×</button>
//           </div>
//         )}

//         {/* ═══════════════════════════════════
//             AI BUTTON (fully closed)
//         ═══════════════════════════════════ */}
//         {!open && (
//           <button
//             onClick={handleOpen}
//             className="ai-btn"
//             style={{
//               borderRadius: "50px",
//               background: "linear-gradient(135deg, #1c1c1e 0%, #0a0a0a 100%)",
//               border: "1px solid rgba(255,255,255,0.17)",
//               padding: "13px 26px", color: "#fff", fontWeight: 700,
//               fontSize: "14px", letterSpacing: "1px", cursor: "pointer",
//               transition: "all 0.3s ease", fontFamily: "inherit",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background  = "linear-gradient(135deg, #2c2c2e 0%, #161618 100%)"
//               e.currentTarget.style.transform   = "scale(1.06)"
//               e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)"
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background  = "linear-gradient(135deg, #1c1c1e 0%, #0a0a0a 100%)"
//               e.currentTarget.style.transform   = "scale(1)"
//               e.currentTarget.style.borderColor = "rgba(255,255,255,0.17)"
//             }}
//           >
//             ✦ AI
//           </button>
//         )}

//       </div>
//     </>
//   )
// }

// export default AIChatWidget
import React, { useState, useRef, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { apiConnector } from "../../services/apiconnector"
import { profileEndpoints, aiEndpoints, categories as categoryApis } from "../../services/apis"
import { BiSolidSend } from "react-icons/bi"

const toSlug = (str = "") => str.trim().toLowerCase().replace(/\s+/g, "-")

const INITIAL_MESSAGE = {
  from: "bot",
  text: "Hi 👋 I am FrHelp AI. How can I assist you today?",
  time: new Date(),
}

const AIChatWidget = () => {
  const navigate  = useNavigate()
  const { user }  = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)

  const [open, setOpen]                           = useState(false)
  const [minimized, setMinimized]                 = useState(false)
  const [showGreeting, setShowGreeting]           = useState(false)
  const [greetingFadingOut, setGreetingFadingOut] = useState(false)
  const [input, setInput]                         = useState("")
  const [loading, setLoading]                     = useState(false)
  const [enrolledCourses, setEnrolledCourses]     = useState([])
  const [catalogLinks, setCatalogLinks]           = useState([])  // ← fetched catalog categories
  const [messages, setMessages]                   = useState([INITIAL_MESSAGE])

  const prevUserRef  = useRef(user)
  const bottomRef    = useRef(null)
  const canvasRef    = useRef(null)
  const animFrameRef = useRef(null)

  // ─────────────────────────────────────────────
  // RESET chat on logout
  // ─────────────────────────────────────────────
  useEffect(() => {
    const wasLoggedIn = !!prevUserRef.current
    const isLoggedIn  = !!user
    if (wasLoggedIn && !isLoggedIn) {
      // user just logged out — reset everything
      setMessages([{
        ...INITIAL_MESSAGE,
        text: "You have been logged out. How can I help you?",
        time: new Date(),
      }])
      setEnrolledCourses([])
      setInput("")
      setLoading(false)
    }
    prevUserRef.current = user
  }, [user])

  // ─────────────────────────────────────────────
  // Fetch catalog categories on mount (for chips)
  // ─────────────────────────────────────────────
  useEffect(() => {
    ;(async () => {
      try {
        const res = await apiConnector("GET", categoryApis.CATEGORIES_API)
        if (res?.data?.data) {
          setCatalogLinks(
            res.data.data
              .filter((c) => c?.courses?.length > 0)
              .map((c) => ({
                name: c.name,
                slug: c.name.split(" ").join("-").toLowerCase(),
              }))
          )
        }
      } catch { /* silent */ }
    })()
  }, [])

  // ─────────────────────────────────────────────
  // Inject CSS
  // ─────────────────────────────────────────────
  useEffect(() => {
    const id = "ai-chat-widget-styles"
    if (document.getElementById(id)) return
    const style = document.createElement("style")
    style.id = id
    style.textContent = `
      @keyframes aurora-shift {
        0%   { background-position:0% 50%; }
        50%  { background-position:100% 50%; }
        100% { background-position:0% 50%; }
      }
      @keyframes pulse-ring {
        0%   { transform:scale(0.9); opacity:0.7; }
        100% { transform:scale(1.65); opacity:0; }
      }
      @keyframes bubble-pop {
        0%   { transform:scale(0.72) translateY(10px); opacity:0; }
        65%  { transform:scale(1.04) translateY(-1px); }
        100% { transform:scale(1) translateY(0); opacity:1; }
      }
      @keyframes slide-up-panel {
        0%   { transform:translateY(55px) scale(0.95); opacity:0; }
        100% { transform:translateY(0) scale(1); opacity:1; }
      }
      @keyframes greeting-in {
        0%   { opacity:0; transform:translate(-50%,-44%); letter-spacing:8px; filter:blur(4px); }
        100% { opacity:1; transform:translate(-50%,-50%); letter-spacing:0.5px; filter:blur(0px); }
      }
      @keyframes greeting-out {
        0%   { opacity:1; transform:translate(-50%,-50%); filter:blur(0px); }
        100% { opacity:0; transform:translate(-50%,-55%); filter:blur(8px); }
      }
      @keyframes typing-bounce {
        0%,60%,100% { transform:translateY(0);    opacity:0.3; }
        30%          { transform:translateY(-6px); opacity:1;   }
      }
      @keyframes btn-glow-pulse {
        0%,100% { box-shadow:0 0 16px rgba(255,255,255,0.12),0 4px 24px rgba(0,0,0,0.55); }
        50%      { box-shadow:0 0 32px rgba(255,255,255,0.32),0 4px 32px rgba(0,0,0,0.65); }
      }
      @keyframes backdrop-in { from{opacity:0} to{opacity:1} }
      @keyframes status-blink { 0%,100%{opacity:1} 50%{opacity:0.35} }
      @keyframes green-dot-pulse {
        0%,100% { box-shadow:0 0 6px rgba(34,197,94,0.5); }
        50%      { box-shadow:0 0 12px rgba(34,197,94,0.9); }
      }
      @keyframes minimized-slide {
        0%   { transform:translateX(30px); opacity:0; }
        100% { transform:translateX(0);    opacity:1; }
      }
      @keyframes chip-pop {
        0%   { transform:scale(0.85); opacity:0; }
        100% { transform:scale(1);    opacity:1; }
      }

      .ai-scrollbar::-webkit-scrollbar       { width:3px; }
      .ai-scrollbar::-webkit-scrollbar-track { background:transparent; }
      .ai-scrollbar::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.1); border-radius:10px; }
      .ai-scrollbar::-webkit-scrollbar-thumb:hover { background:rgba(255,255,255,0.22); }

      .ai-bubble          { animation:bubble-pop      0.38s cubic-bezier(0.34,1.56,0.64,1) both; }
      .ai-panel           { animation:slide-up-panel  0.5s  cubic-bezier(0.34,1.1,0.64,1)  both; }
      .ai-btn             { animation:btn-glow-pulse  2.5s  ease-in-out infinite; }
      .ai-greeting-in     { animation:greeting-in     0.65s cubic-bezier(0.34,1.3,0.64,1)  both; }
      .ai-greeting-out    { animation:greeting-out    0.5s  ease forwards; }
      .ai-backdrop        { animation:backdrop-in     0.3s  ease both; }
      .ai-minimized-slide { animation:minimized-slide 0.3s  cubic-bezier(0.34,1.3,0.64,1)  both; }
      .ai-chip            { animation:chip-pop        0.3s  cubic-bezier(0.34,1.4,0.64,1)  both; }

      .ai-aurora {
        background:linear-gradient(120deg,rgba(255,255,255,0.55),rgba(160,160,160,0.3),rgba(40,40,40,0.25),rgba(210,210,210,0.4),rgba(255,255,255,0.55));
        background-size:400% 400%;
        animation:aurora-shift 5s ease infinite;
      }
      .ai-input::placeholder { color:rgba(255,255,255,0.25); }

      .ai-catalog-chip {
        display:inline-flex; align-items:center; gap:5px;
        padding:6px 12px; border-radius:20px; cursor:pointer;
        font-size:12px; font-weight:600;
        background:rgba(6,182,212,0.07);
        border:1px solid rgba(6,182,212,0.2);
        color:rgba(6,182,212,0.9);
        transition:all 0.2s ease; font-family:inherit;
      }
      .ai-catalog-chip:hover {
        background:rgba(6,182,212,0.15); color:#fff;
        border-color:rgba(6,182,212,0.5);
        transform:translateY(-1px);
        box-shadow:0 4px 14px rgba(6,182,212,0.15);
      }
      .ai-course-chip {
        display:inline-flex; align-items:center; gap:5px;
        padding:6px 12px; border-radius:20px; cursor:pointer;
        font-size:12px; font-weight:600;
        background:rgba(255,255,255,0.06);
        border:1px solid rgba(255,255,255,0.12);
        color:rgba(255,255,255,0.78);
        transition:all 0.2s ease; font-family:inherit;
      }
      .ai-course-chip:hover {
        background:rgba(255,255,255,0.13); color:#fff;
        border-color:rgba(255,255,255,0.28);
        transform:translateY(-1px);
        box-shadow:0 4px 14px rgba(0,0,0,0.3);
      }
    `
    document.head.appendChild(style)
    return () => document.getElementById(id)?.remove()
  }, [])

  // ── Particle canvas ──
  useEffect(() => {
    if (!open || minimized) { cancelAnimationFrame(animFrameRef.current); return }
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight
    const particles = Array.from({ length: 40 }, () => ({
      x:Math.random()*canvas.width, y:Math.random()*canvas.height,
      r:Math.random()*1.3+0.2,
      dx:(Math.random()-0.5)*0.22, dy:(Math.random()-0.5)*0.22,
      opacity:Math.random()*0.35+0.05,
    }))
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height)
      particles.forEach((p) => {
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
        ctx.fillStyle=`rgba(255,255,255,${p.opacity})`; ctx.fill()
        p.x+=p.dx; p.y+=p.dy
        if(p.x<0||p.x>canvas.width)  p.dx*=-1
        if(p.y<0||p.y>canvas.height) p.dy*=-1
      })
      animFrameRef.current=requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [open, minimized])

  // ── Auto scroll ──
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior:"smooth" })
  }, [messages, loading])

  // ── Escape key ──
  useEffect(() => {
    const h = (e) => { if(e.key==="Escape") setOpen(false) }
    window.addEventListener("keydown", h)
    return () => window.removeEventListener("keydown", h)
  }, [])

  const handleOpen = () => {
    setOpen(true); setMinimized(false)
    setGreetingFadingOut(false); setShowGreeting(true)
    setTimeout(() => {
      setGreetingFadingOut(true)
      setTimeout(() => setShowGreeting(false), 500)
    }, 1800)
  }

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString([], { hour:"2-digit", minute:"2-digit" })

  const fakeTyping = (text, callback) => {
    let i=0, temp=""
    const interval = setInterval(() => {
      temp += text[i]
      setMessages((prev) => {
        const updated=[...prev]
        updated[updated.length-1]={...updated[updated.length-1], text:temp}
        return updated
      })
      i++
      if(i>=text.length){ clearInterval(interval); if(callback) callback() }
    }, 15)
  }

  const fetchCourses = async () => {
    try {
      if(!token) return []
      const res = await apiConnector(
        "GET", profileEndpoints.GET_USER_ENROLLED_COURSES_API,
        null, { Authorization:`Bearer ${token}` }
      )
      if(res?.data?.success){
        const c=res.data.data
        setEnrolledCourses(c)
        return c
      }
      return []
    } catch { return [] }
  }

  const askAI = async (message, courses) => {
    try {
      const contextData = {
        isLoggedIn:  !!user,
        accountType: user?.accountType ?? "guest",
        userName:    user?.firstName   ?? "Guest",
        courses: courses.map((c) => ({
          id:c._id, name:c.courseName, progress:c.progressPercentage??0,
        })),
      }
      const res = await apiConnector("POST", aiEndpoints.AI_CHAT_API, {
        message, history:messages, userContext:contextData,
      })
      if(!res?.data?.success)
        return { reply:"Sorry, something went wrong!", action:"none", category:"", courseId:"" }
      return {
        reply:    res.data.reply    ?? "",
        action:   res.data.action   ?? "none",
        category: res.data.category ?? "",
        courseId: res.data.courseId ?? "",
      }
    } catch {
      return { reply:"AI error, please try again.", action:"none", category:"", courseId:"" }
    }
  }

  // ─────────────────────────────────────────────
  // Navigation handler
  // ─────────────────────────────────────────────
  const handleNavigate = (action, category="", courseId="") => {
    const isStudent = user?.accountType==="Student"

    // Public
    if(action==="open_login")   { navigate("/login");   return }
    if(action==="open_signup")  { navigate("/signup");  return }
    if(action==="open_contact") { navigate("/contact"); return }
    if(action==="open_about")   { navigate("/about");   return }

    if(action==="open_catalog") {
      // Only navigate if a specific category was given AND it exists in catalogLinks
      if(category) {
        const slug = toSlug(category)
        const exists = catalogLinks.find((c) => c.slug===slug || c.slug.includes(slug) || slug.includes(c.slug))
        if(exists) { navigate(`/catalog/${exists.slug}`); return }
        // category given but not found in DB — show chips instead (handled below)
      }
      // No category or not found → don't navigate, show category chips (handled in send)
      return
    }

    if(action==="open_course_details" && courseId) {
      navigate(`/courses/${courseId}`); return
    }

    if(!user) return // below this point requires login

    if(action==="open_profile")  { navigate("/dashboard/my-profile");     return }
    if(action==="open_settings") { navigate("/dashboard/Settings");        return }
    if(action==="open_cart" && isStudent) { navigate("/dashboard/cart");   return }
    if(action==="open_courses"   && isStudent) { navigate("/dashboard/enrolled-courses"); return }
  }

  // ─────────────────────────────────────────────
  // Handle Send
  // ─────────────────────────────────────────────
  const handleSend = async () => {
    if(!input.trim()) return
    const sentText = input.trim()
    setMessages((prev) => [...prev, { from:"user", text:sentText, time:new Date() }])
    setInput("")
    setLoading(true)
    setMessages((prev) => [...prev, { from:"bot", text:"", time:new Date() }])

    const courses = await fetchCourses()
    const ai      = await askAI(sentText, courses)

    fakeTyping(ai.reply, () => {
      // Navigate after typing
      handleNavigate(ai.action, ai.category, ai.courseId)

      // ── open_catalog with no valid category → show category chips ──
      if(ai.action==="open_catalog" && catalogLinks.length>0) {
        const slug = toSlug(ai.category||"")
        const exists = slug
          ? catalogLinks.find((c) => c.slug===slug || c.slug.includes(slug) || slug.includes(c.slug))
          : null
        if(!exists) {
          setMessages((prev) => [...prev, {
            from:"bot", type:"catalog_chips",
            chips:catalogLinks, text:"", time:new Date(),
          }])
        }
      }

      // ── list_courses → show course chips ──
      const courseListActions = ["list_courses","open_courses"]
      if(courseListActions.includes(ai.action) && courses.length>0) {
        setMessages((prev) => [...prev, {
          from:"bot", type:"course_chips",
          courses:courses.map((c) => ({ name:c.courseName, id:c._id })),
          text:"", time:new Date(),
        }])
      }
    })

    setLoading(false)
  }

  const handleKeyDown = (e) => {
    if(e.key==="Enter" && !e.shiftKey){ e.preventDefault(); handleSend() }
  }

  // ── Sub-components ──
  const BotAvatar = () => (
    <div style={{ position:"relative", flexShrink:0, width:"28px", height:"28px", marginTop:"2px" }}>
      <div style={{ position:"absolute", inset:"-4px", borderRadius:"50%", background:"rgba(255,255,255,0.07)", animation:"pulse-ring 2s ease-out infinite" }} />
      <div style={{ width:"100%", height:"100%", borderRadius:"50%", background:"linear-gradient(135deg,#2c2c2c,#0e0e0e)", border:"1px solid rgba(255,255,255,0.14)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"13px", position:"relative", zIndex:1 }}>🤖</div>
    </div>
  )

  // Catalog category chips — shown when "open catalog" but no specific category
  const CatalogChips = ({ chips }) => (
    <div>
      <div style={{ fontSize:"12px", color:"rgba(255,255,255,0.5)", marginBottom:"8px" }}>
        Pick a category ↓
      </div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:"7px" }}>
        {chips.map((chip, i) => (
          <button
            key={i}
            className="ai-catalog-chip ai-chip"
            style={{ animationDelay:`${i*0.06}s` }}
            onClick={() => navigate(`/catalog/${chip.slug}`)}
          >
            ↗ {chip.name}
          </button>
        ))}
      </div>
    </div>
  )

  // Enrolled course chips
  const CourseChips = ({ courses }) => (
    <div style={{ display:"flex", flexWrap:"wrap", gap:"7px" }}>
      {courses.map((course, i) => (
        <button
          key={i}
          className="ai-course-chip ai-chip"
          style={{ animationDelay:`${i*0.07}s` }}
          onClick={() => {
            if(course.id) navigate(`/courses/${course.id}`)
            else navigate("/dashboard/enrolled-courses")
          }}
        >
          <span style={{ opacity:0.5, fontSize:"11px" }}>↗</span> {course.name}
        </button>
      ))}
    </div>
  )

  const HeaderBtn = ({ label, onClick, danger }) => (
    <button onClick={onClick} style={{
      width:"30px", height:"30px", borderRadius:"50%",
      background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.09)",
      color:"rgba(255,255,255,0.45)", cursor:"pointer",
      display:"flex", alignItems:"center", justifyContent:"center",
      transition:"all 0.2s", fontSize:label==="×"?"19px":"16px", fontWeight:300, lineHeight:1,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background  = danger?"rgba(220,50,50,0.15)":"rgba(255,255,255,0.12)"
      e.currentTarget.style.color       = danger?"#f87171":"#fff"
      e.currentTarget.style.borderColor = danger?"rgba(248,113,113,0.22)":"rgba(255,255,255,0.18)"
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background  = "rgba(255,255,255,0.05)"
      e.currentTarget.style.color       = "rgba(255,255,255,0.45)"
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)"
    }}>
      {label}
    </button>
  )

  return (
    <>
      {open && !minimized && (
        <div className="ai-backdrop" onClick={() => setOpen(false)} style={{
          position:"fixed", inset:0, zIndex:40,
          background:"rgba(0,0,0,0.28)", backdropFilter:"blur(2px)",
        }} />
      )}

      {showGreeting && (
        <div className={greetingFadingOut?"ai-greeting-out":"ai-greeting-in"} style={{
          position:"fixed", top:"50%", left:"50%",
          zIndex:100, textAlign:"center", pointerEvents:"none",
        }}>
          <div style={{
            fontSize:"34px", fontWeight:800, color:"#fff",
            textShadow:"0 0 50px rgba(255,255,255,0.95),0 0 100px rgba(255,255,255,0.35)",
            letterSpacing:"0.5px",
          }}>✦ FrHelp at your service</div>
          <div style={{ color:"rgba(255,255,255,0.4)", fontSize:"12px", marginTop:"12px", letterSpacing:"3px", textTransform:"uppercase" }}>
            Your AI Learning Assistant
          </div>
        </div>
      )}

      <div style={{ position:"fixed", bottom:"24px", right:"24px", zIndex:50, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"12px" }}>

        {/* ── Full panel ── */}
        {open && !minimized && (
          <div className="ai-panel" style={{ position:"relative", width:"420px", height:"80vh", maxHeight:"80vh" }}>
            <div className="ai-aurora" style={{ position:"absolute", inset:0, borderRadius:"20px" }} />
            <div style={{
              position:"absolute", inset:"1px", borderRadius:"19px",
              background:"rgba(7,7,9,0.97)", backdropFilter:"blur(20px)",
              display:"flex", flexDirection:"column", overflow:"hidden",
              boxShadow:"0 30px 80px rgba(0,0,0,0.85)",
            }}>

              {/* Header */}
              <div style={{
                padding:"16px 20px",
                background:"linear-gradient(180deg,rgba(255,255,255,0.045) 0%,transparent 100%)",
                borderBottom:"1px solid rgba(255,255,255,0.06)",
                display:"flex", alignItems:"center", justifyContent:"space-between",
                flexShrink:0,
              }}>
                <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
                  <div style={{ position:"relative" }}>
                    <div style={{
                      width:"40px", height:"40px", borderRadius:"50%",
                      background:"linear-gradient(135deg,#2c2c2c,#0d0d0d)",
                      border:"1px solid rgba(255,255,255,0.13)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:"18px", boxShadow:"0 0 22px rgba(255,255,255,0.06)",
                    }}>🤖</div>
                    <div style={{
                      position:"absolute", bottom:"1px", right:"1px",
                      width:"10px", height:"10px", borderRadius:"50%",
                      background:"#22c55e", border:"2px solid rgba(7,7,9,0.97)",
                      animation:"green-dot-pulse 2s ease-in-out infinite",
                    }} />
                  </div>
                  <div>
                    <div style={{ color:"#fff", fontWeight:700, fontSize:"15px" }}>FrHelp AI</div>
                    <div style={{
                      color:loading?"rgba(255,255,255,0.55)":"rgba(255,255,255,0.3)",
                      fontSize:"11px", marginTop:"2px",
                      animation:loading?"status-blink 1s ease-in-out infinite":"none",
                    }}>
                      {loading?"✦ Typing...":"✦ Online · Ready to help"}
                    </div>
                  </div>
                </div>
                <div style={{ display:"flex", gap:"8px" }}>
                  <HeaderBtn label="—" onClick={() => setMinimized(true)} danger={false} />
                  <HeaderBtn label="×" onClick={() => setOpen(false)}    danger={true}  />
                </div>
              </div>

              {/* Messages */}
              <div style={{ position:"relative", flex:1, overflow:"hidden" }}>
                <canvas ref={canvasRef} style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", opacity:0.45 }} />
                <div className="ai-scrollbar" style={{
                  height:"100%", overflowY:"auto",
                  padding:"20px 16px", display:"flex", flexDirection:"column",
                  gap:"14px", position:"relative", zIndex:1,
                }}>
                  {messages.map((msg, index) => {

                    // Catalog chips
                    if(msg.type==="catalog_chips") {
                      return (
                        <div key={index} className="ai-bubble" style={{ display:"flex", alignItems:"flex-start", gap:"8px" }}>
                          <BotAvatar />
                          <div style={{ maxWidth:"85%" }}>
                            <div style={{
                              padding:"9px 13px", marginBottom:"8px",
                              borderRadius:"18px 18px 18px 4px",
                              background:"rgba(255,255,255,0.05)",
                              border:"1px solid rgba(255,255,255,0.08)",
                              color:"rgba(255,255,255,0.6)", fontSize:"12px",
                            }}>
                              Choose a category to explore ↓
                            </div>
                            <CatalogChips chips={msg.chips} />
                            <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.18)", display:"block", marginTop:"6px", paddingLeft:"4px" }}>
                              {formatTime(msg.time)}
                            </span>
                          </div>
                        </div>
                      )
                    }

                    // Course chips
                    if(msg.type==="course_chips") {
                      return (
                        <div key={index} className="ai-bubble" style={{ display:"flex", alignItems:"flex-start", gap:"8px" }}>
                          <BotAvatar />
                          <div style={{ maxWidth:"85%" }}>
                            <div style={{
                              padding:"9px 13px", marginBottom:"8px",
                              borderRadius:"18px 18px 18px 4px",
                              background:"rgba(255,255,255,0.05)",
                              border:"1px solid rgba(255,255,255,0.08)",
                              color:"rgba(255,255,255,0.6)", fontSize:"12px",
                            }}>
                              Tap a course to open it ↓
                            </div>
                            <CourseChips courses={msg.courses} />
                            <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.18)", display:"block", marginTop:"6px", paddingLeft:"4px" }}>
                              {formatTime(msg.time)}
                            </span>
                          </div>
                        </div>
                      )
                    }

                    // Regular message
                    return (
                      <div key={index} className="ai-bubble" style={{
                        display:"flex",
                        flexDirection:msg.from==="user"?"row-reverse":"row",
                        alignItems:"flex-end", gap:"8px",
                      }}>
                        {msg.from==="bot" && <BotAvatar />}
                        <div style={{
                          maxWidth:"75%", display:"flex", flexDirection:"column",
                          gap:"4px", alignItems:msg.from==="user"?"flex-end":"flex-start",
                        }}>
                          <div style={{
                            padding:"10px 14px",
                            borderRadius:msg.from==="user"?"18px 18px 4px 18px":"18px 18px 18px 4px",
                            fontSize:"13.5px", lineHeight:"1.6",
                            ...(msg.from==="user"
                              ? { background:"linear-gradient(135deg,rgba(255,255,255,0.93),rgba(205,205,205,0.9))", color:"#080808", boxShadow:"0 4px 20px rgba(255,255,255,0.1)" }
                              : { background:"rgba(255,255,255,0.05)", backdropFilter:"blur(14px)", border:"1px solid rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.88)" }),
                          }}>
                            {msg.text}
                          </div>
                          <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.18)", paddingLeft:"4px", paddingRight:"4px" }}>
                            {formatTime(msg.time)}
                          </span>
                        </div>
                      </div>
                    )
                  })}

                  {loading && (
                    <div style={{ display:"flex", alignItems:"flex-end", gap:"8px" }}>
                      <BotAvatar />
                      <div style={{ padding:"12px 16px", borderRadius:"18px 18px 18px 4px", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", display:"flex", gap:"5px", alignItems:"center" }}>
                        {[0,1,2].map((i) => (
                          <span key={i} style={{ width:"6px", height:"6px", borderRadius:"50%", background:"rgba(255,255,255,0.5)", display:"inline-block", animation:`typing-bounce 1.2s ease-in-out ${i*0.2}s infinite` }} />
                        ))}
                      </div>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>
              </div>

              {/* Input */}
              <div style={{ padding:"14px 16px", borderTop:"1px solid rgba(255,255,255,0.055)", background:"rgba(255,255,255,0.018)", display:"flex", alignItems:"center", gap:"10px", flexShrink:0 }}>
                <input
                  className="ai-input"
                  type="text" placeholder="Ask anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{
                    flex:1, background:"rgba(255,255,255,0.04)",
                    border:"1px solid rgba(255,255,255,0.08)", borderRadius:"12px",
                    padding:"11px 14px", color:"#fff", fontSize:"13.5px",
                    outline:"none", transition:"border 0.25s,box-shadow 0.25s", fontFamily:"inherit",
                  }}
                  onFocus={(e) => { e.target.style.borderColor="rgba(255,255,255,0.22)"; e.target.style.boxShadow="0 0 0 3px rgba(255,255,255,0.03)"; }}
                  onBlur={(e)  => { e.target.style.borderColor="rgba(255,255,255,0.08)"; e.target.style.boxShadow="none"; }}
                />
                <button onClick={handleSend} disabled={!input.trim()} style={{
                  width:"40px", height:"40px", borderRadius:"12px",
                  background:input.trim()?"linear-gradient(135deg,rgba(255,255,255,0.94),rgba(195,195,195,0.88))":"rgba(255,255,255,0.05)",
                  border:`1px solid ${input.trim()?"rgba(255,255,255,0.25)":"rgba(255,255,255,0.07)"}`,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  cursor:input.trim()?"pointer":"not-allowed",
                  color:input.trim()?"#080808":"rgba(255,255,255,0.18)",
                  transition:"all 0.22s", flexShrink:0,
                  boxShadow:input.trim()?"0 0 20px rgba(255,255,255,0.1)":"none",
                }}
                onMouseEnter={(e) => { if(input.trim()){ e.currentTarget.style.transform="scale(1.08)"; e.currentTarget.style.boxShadow="0 0 28px rgba(255,255,255,0.2)"; }}}
                onMouseLeave={(e) => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow=input.trim()?"0 0 20px rgba(255,255,255,0.1)":"none"; }}
                >
                  <BiSolidSend size={16} />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ── Minimized bar ── */}
        {open && minimized && (
          <div className="ai-minimized-slide" style={{
            background:"rgba(7,7,9,0.96)", border:"1px solid rgba(255,255,255,0.1)",
            borderRadius:"14px", padding:"10px 16px",
            display:"flex", alignItems:"center", gap:"12px",
            boxShadow:"0 8px 32px rgba(0,0,0,0.55)", backdropFilter:"blur(20px)",
          }}>
            <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#22c55e", animation:"green-dot-pulse 2s ease-in-out infinite", flexShrink:0 }} />
            <span style={{ color:"rgba(255,255,255,0.52)", fontSize:"13px", fontWeight:500 }}>FrHelp AI</span>
            <div style={{ width:"1px", height:"16px", background:"rgba(255,255,255,0.08)" }} />
            <button onClick={() => setMinimized(false)} style={{ padding:"5px 12px", borderRadius:"8px", background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.62)", fontSize:"12px", cursor:"pointer", transition:"all 0.2s", fontFamily:"inherit" }}
              onMouseEnter={(e) => { e.currentTarget.style.background="rgba(255,255,255,0.14)"; e.currentTarget.style.color="#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background="rgba(255,255,255,0.07)"; e.currentTarget.style.color="rgba(255,255,255,0.62)"; }}
            >Expand ↑</button>
            <button onClick={() => setOpen(false)} style={{ width:"24px", height:"24px", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"50%", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.35)", cursor:"pointer", fontSize:"16px", transition:"all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background="rgba(220,50,50,0.14)"; e.currentTarget.style.color="#f87171"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background="rgba(255,255,255,0.04)"; e.currentTarget.style.color="rgba(255,255,255,0.35)"; }}
            >×</button>
          </div>
        )}

        {/* ── AI button ── */}
        {!open && (
          <button onClick={handleOpen} className="ai-btn" style={{
            borderRadius:"50px",
            background:"linear-gradient(135deg,#1c1c1e 0%,#0a0a0a 100%)",
            border:"1px solid rgba(255,255,255,0.17)",
            padding:"13px 26px", color:"#fff", fontWeight:700,
            fontSize:"14px", letterSpacing:"1px", cursor:"pointer",
            transition:"all 0.3s ease", fontFamily:"inherit",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background="linear-gradient(135deg,#2c2c2e 0%,#161618 100%)"; e.currentTarget.style.transform="scale(1.06)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.28)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background="linear-gradient(135deg,#1c1c1e 0%,#0a0a0a 100%)"; e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.17)"; }}
          >✦ AI</button>
        )}

      </div>
    </>
  )
}

export default AIChatWidget