import express from "express"
import mongoose from "mongoose"


const userSchema =mongoose.Schema({

    name: {
        type: String,
        
    },

    age:{
      type:String

    },
    phoneNo:{
        type:String
    },
    userName:{
        type:String
    },
    email:{
        type:String
    },
    profilePic:{
        type:String
    }

})

const user = new mongoose.model("user", userSchema)

export default user;