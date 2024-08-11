import mongoose from "mongoose";
const scoreSchema= mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    score:{
        type:String,
        required:true,
    },
})

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        index:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    },

    password:{
        type:String,
        required:true,
    },
    score:[scoreSchema]
})


export const User = mongoose.models("User",userSchema)