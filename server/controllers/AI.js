// const Groq = require("groq-sdk")

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// })

// exports.chatWithAI = async (req, res) => {
//   try {
//     const { message } = req.body

//     const completion = await groq.chat.completions.create({
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are an AI assistant for an online learning platform. Help users navigate courses, answer learning questions, and guide students.",
//         },
//         {
//           role: "user",
//           content: message,
//         },
//       ],
//       model: "llama3-8b-8192",
//     })

//     return res.status(200).json({
//       success: true,
//       reply: completion.choices[0].message.content,
//     })
//   } catch (error) {
//     console.error(error)

//     return res.status(500).json({
//       success: false,
//       message: "AI response failed",
//     })
//   }
// }

// const Groq = require("groq-sdk")

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// })

// exports.chatWithAI = async (req, res) => {
//   try {
//     const { message, history, userContext } = req.body

//     // keep last 5 messages only
//     const formattedHistory = (history || []).slice(-5).map((msg) => ({
//       role: msg.from === "user" ? "user" : "assistant",
//       content: msg.text,
//     }))

//     const completion = await groq.chat.completions.create({
//       model: "llama-3.1-8b-instant",
//       messages: [
//   {
//     role: "system",
//     content: `
// You are an AI assistant for an online learning platform.

// You MUST reply in JSON format:
// {
//   "reply": "text",
//   "action": "open_profile | open_cart | open_courses | open_catalog | none",
//   "category": "optional"
// }

// Rules:
// - If user asks to open courses → action = open_courses
// - If user asks about catalog → action = open_catalog
// - Extract category like:
//   "python", "web development", "data science"
// - Put category in "category"

// Example:
// User: "show python courses"

// Response:
// {
//   "reply": "Opening Python courses",
//   "action": "open_catalog",
//   "category": "python"
// }

// If no category → leave empty string ""

// Be helpful and short.
// `,
//   },

//   // 🔥 CONTEXT INJECTION
//   {
//     role: "system",
//     content: `User Data: ${JSON.stringify(userContext || {})}`,
//   },

//   ...formattedHistory,

//   {
//     role: "user",
//     content: message,
//   },
// ],
//     })

//     const raw = completion.choices[0].message.content

//     let parsed

//     try {
//       parsed = JSON.parse(raw)
//     } catch {
//       parsed = {
//         reply: raw,
//         action: "none",
//       }
//     }

//     return res.status(200).json({
//       success: true,
//       reply: parsed.reply,
//       action: parsed.action,
//       category: parsed.category || "",
//     })
//   } catch (error) {
//     console.error(error)

//     return res.status(500).json({
//       success: false,
//       message: "AI failed",
//     })
//   }
// }

const Groq = require("groq-sdk")

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

exports.chatWithAI = async (req, res) => {
  try {
    const { message, history, userContext } = req.body

    // Keep last 6 messages for context
    const formattedHistory = (history || [])
      .filter((msg) => msg.text && msg.text.trim() !== "")
      .slice(-6)
      .map((msg) => ({
        role: msg.from === "user" ? "user" : "assistant",
        content: msg.text,
      }))

    const isLoggedIn  = userContext?.isLoggedIn  === true
    const accountType = userContext?.accountType || "guest"
    const userName    = userContext?.userName    || "there"
    const courses     = userContext?.courses     || []

    // ── Build enrolled courses string for the prompt ──
    const courseList = courses.length
      ? courses
          .map((c) => `"${c.name}" (progress: ${c.progress}%, id: ${c.id})`)
          .join(", ")
      : "none"

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `
You are FrHelp AI, a smart assistant for an online learning platform called FrHelp.
You MUST always respond in valid JSON with this exact shape:
{
  "reply": "string",
  "action": "string",
  "category": "string",
  "courseId": "string"
}

═══════════════════════════════════════════
USER STATE
═══════════════════════════════════════════
isLoggedIn  : ${isLoggedIn}
accountType : ${accountType}
userName    : ${userName}
enrolledCourses: ${courseList}

═══════════════════════════════════════════
COMPLETE ACTION LIST — use EXACTLY these strings
═══════════════════════════════════════════

PUBLIC (available to ALL users, logged in or not):
  open_login          → user wants to log in / sign in
  open_signup         → user wants to register / sign up / create account
  open_contact        → user asks about contact us, support, reach out, FAQ, help
  open_about          → user asks about the platform, about us, who are you, about frhelp
  open_catalog        → user wants to browse or explore courses by topic/category
  open_course_details → user wants details about a specific course (set courseId)

PRIVATE (only when isLoggedIn is true):
  open_profile        → user wants their profile, account, settings
  open_cart           → user wants to see their cart, purchases
  open_courses        → user wants to see their enrolled courses, my courses, what am I learning
  open_settings       → user wants settings

SPECIAL:
  list_courses        → user asks "give me my courses", "show my courses", "what am I enrolled in"
  none                → anything else, just answer with reply

═══════════════════════════════════════════
ROUTING RULES
═══════════════════════════════════════════

1. If isLoggedIn is FALSE:
   - NEVER say "you don't have access" or "please login" for public routes
   - /about, /contact, /catalog, /login, /signup are ALWAYS accessible
   - If user asks to go to about → action: "open_about", reply: "Opening the About page for you!"
   - If user asks to go to contact → action: "open_contact", reply: "Taking you to Contact Us!"
   - If user asks to go to catalog/courses → action: "open_catalog"
   - If user asks for cart, profile, my courses, enrolled courses → action: "open_login", reply: "You need to be logged in to access that. Taking you to the login page!"

2. If isLoggedIn is TRUE:
   - Full access to all actions above
   - For open_courses and list_courses → also navigate to /dashboard/enrolled-courses

3. Login status question:
   - If user asks "am I logged in", "is my account active", "who am I":
     - If isLoggedIn true  → reply: "Yes ${userName}, you are logged in as a ${accountType}."
     - If isLoggedIn false → reply: "You are not logged in. Would you like to log in or sign up?"

═══════════════════════════════════════════
COURSE INTELLIGENCE (only when isLoggedIn is true)
═══════════════════════════════════════════

Enrolled courses: ${courseList}

- "give me my courses" / "show my courses" / "what am I enrolled in":
  → action: "list_courses"
  → reply: list the course names naturally, e.g. "You are enrolled in: Web Dev, CSS, Backend."
  → Do NOT set courseId

- "what should I learn next" / "what to study" / "recommend something":
  → Look at progress % — recommend the course with lowest progress or most relevant next step
  → reply: "Based on your progress, I recommend focusing on [course name] next. You are [X]% through it."
  → action: "none" (just give advice)

- "open [course name]" / "go to [course name]" / "take me to [course]":
  → Find best match from enrolled courses list
  → action: "open_course_details"
  → courseId: the matching course id
  → reply: "Opening [course name] for you!"

- If user is not enrolled in any course:
  → Suggest exploring the catalog

═══════════════════════════════════════════
CATALOG / CATEGORY RULES
═══════════════════════════════════════════
- Extract category slug from message: "web development" → "web-development", "python" → "python"
- Common mappings:
    web dev / frontend / html / css / javascript → "web-development"
    backend / node / express / server            → "backend-development"
    python / data science / ml / ai              → "data-science"
    react / next.js                              → "web-development"
- Put result in "category" field, lowercase with hyphens

═══════════════════════════════════════════
GENERAL BEHAVIOUR
═══════════════════════════════════════════
- Be friendly, concise, helpful — like a smart student advisor
- Never say "unfortunately" to a guest for public pages
- Never make up course names not in the enrolled list
- If you don't know → action: "none", give a helpful reply
- Always return valid JSON — no markdown, no backticks, no explanation outside JSON
`,
        },

        ...formattedHistory,

        {
          role: "user",
          content: message,
        },
      ],
    })

    const raw = completion.choices[0].message.content

    let parsed
    try {
      parsed = JSON.parse(raw)
    } catch {
      // Fallback if JSON parse fails
      parsed = { reply: raw, action: "none", category: "", courseId: "" }
    }

    // Safety: ensure all fields exist
    return res.status(200).json({
      success:  true,
      reply:    parsed.reply    || "I'm here to help!",
      action:   parsed.action   || "none",
      category: parsed.category || "",
      courseId: parsed.courseId || "",
    })
  } catch (error) {
    console.error("AI Controller Error:", error)
    return res.status(500).json({
      success: false,
      message: "AI failed",
    })
  }
}