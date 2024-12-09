import mongoose from "mongoose";

const tempOtpSchema= mongoose.Schema({

    email:{
        type:String
    },

    otp:{
        type:String
    }
})



const tempOtp = mongoose.model("tempOtp",tempOtpSchema);


export default tempOtp