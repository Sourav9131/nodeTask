import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {

    const authorizationHeader = req.header("Authorization")

if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
  return res
    .status(401)
    .json({ success: false, message: "Invalid authorization header" });
}      
  
};
export default authMiddleware;    