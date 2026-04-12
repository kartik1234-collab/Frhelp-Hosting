const express = require("express")
const router = express.Router()

const { chatWithAI } = require("../controllers/AI")

router.post("/chat", chatWithAI)

module.exports = router
