const express = require("express")
const router = express.Router()
const { PostSignUp,postLogin, activateAccount, verifyAcount } = require("../controllers/auth")
const validator = require("../middleware/validators/validator-middleware")
const signupCompiledSchema= require("../ajv/validator-schemas/sign-up-schema")
const loginCompiledSchema= require("../ajv/validator-schemas/login-schema")
const confirmPasswordChecker= require("../middleware/validators/confirmPasswordChecker")



// routes
router.post("/signup",validator(signupCompiledSchema),confirmPasswordChecker, PostSignUp)
router.post("/login",validator(loginCompiledSchema),postLogin)
router.put("/activate", validator(loginCompiledSchema), activateAccount)
router.get("/verify",verifyAcount)



// error handling route must be at the bottom af all routes not to interrupt request
// router.use(authErrorHandler)



module.exports=router