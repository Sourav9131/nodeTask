
import express from "express"
import * as userController from "./userController.js"
import upload from "../../../../utils/multer.js";


const userRoutes = express.Router();

userRoutes.post("/signupOtp",upload.any(),userController.SendUserOtp)
userRoutes.post("/signup",upload.any(),userController.userRegister)









export default userRoutes;