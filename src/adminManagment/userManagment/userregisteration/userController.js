import express from "express"
import userModel from "./userModel.js"
import tempOtp from "../tempOtpModel.js";



export async function SendUserOtp(req,res){

    try {
    
       
    
    const {name,age,phoneNo,userName,email}=req.body;
    
    let checkUser = await userModel.findOne({email})
    
    if(checkUser){
     return   res.send({
            status:400, message:"user already register"
        })
    }
    
    let otp = Math.random()*10000
    otp= Math.round(otp)
        
    const signupDetails={
        name,age,phoneNo,userName,email,profilePic:req.files[0]?.filename,otp
    
    }

    
    let temp     = await tempOtp.create({email,otp})
    
       res.send({status:200,msg:"OTP Send successfuly",data:signupDetails})
    // 
    
        
    } catch (error) {
        
        console.log(error)
    }
    
    }

export async function userRegister(req,res){

try {

   

const {name,age,phoneNo,userName,email,otp,}=req.body;

let checkUser = await tempOtp.findOne({email})

console.log(checkUser,"check")

if(!checkUser?.otp == otp ){
 return   res.send({
        status:400, message:"Incorrect OTP"
    })
}

const signupDetails={
    name,age,phoneNo,userName,email,profilePic

}


let userSignUp= await userModel.create(signupDetails)

   res.send({status:200,msg:"user singup successfuly"})


    
} catch (error) {
    
    console.log(error)
}

}