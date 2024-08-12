import {asyncHandler} from "../utils/asycnHandler.js"
import {User} from "../models/user.models.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponce} from "../utils/ApiResponce.js"

const registerUser = asyncHandler(async (req,res)=>{
    console.log(req.body);
    
    const {username, email,password,rePassword}=req.body
    
    if([username,email,password,rePassword].some((field)=> field?.trim() === "")){
        throw new ApiError(401,"All fields are required")
    }
    if(!(rePassword===password)){
        throw new ApiError(401,"re enter password could not match")
    }
    const exisedUser = await User.findOne({
        $or:[{email}, {username}]
        
    })

    if(exisedUser){
        throw new ApiError(401, "User Already Existed")

    }
    const user = await  User.create({
        username,
        email,
        password,

    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")
    if(!createdUser){
        throw new ApiError(400,"Error occured while trying to create user")
    }
    return res
    .status(200)
    .json(
        new ApiResponce(200,createdUser,"User Successfully Created")
    )


    
     
})

const loginUser = asyncHandler(async (req,res)=>{
    
})
export {registerUser,
    loginUser,
}