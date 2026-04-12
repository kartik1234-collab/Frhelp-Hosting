const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

//auth
exports.auth = async (req, res, next) => {
  try {
    console.log("BEFORE TOKEN EXTRACTION")

    const authHeader = req.headers.authorization   
    console.log("AUTH HEADER:", authHeader)

    let token = null

    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1]
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "TOKEN IS MISSING",
      })
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET)
      req.user = decode

      console.log("USER FROM TOKEN:", req.user)   

    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "TOKEN IS INVALID",
      })
    }

    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "SOMETHING WENT WRONG WHILE VALIDATING TOKEN",
    })
  }
}


//isStudent
exports.isStudent = async (req, res, next) => {
 try{
        if(req.user.accountType !== "Student") {
            return res.status(401).json({
                success:false,
                message:'This is a protected route for Students only',
            });
        }
        next();
 }
 catch(error) {
    return res.status(500).json({
        success:false,
        message:'User role cannot be verified, please try again'
    })
 }
}


//isInstructor
exports.isInstructor = async (req, res, next) => {
    try{
           if(req.user.accountType !== "Instructor") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Instructor only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }


//isAdmin
exports.isAdmin = async (req, res, next) => {
    try{    
           console.log("Printing AccountType ", req.user.accountType);
           if(req.user.accountType !== "Admin") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Admin only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }