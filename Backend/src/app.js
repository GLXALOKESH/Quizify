import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import { ApiError } from './utils/ApiError.js';
const app = express()
app.use(cors(
//     {
//     origin:process.env.CORS_ORIGIN,
//     credentials:true
// }
))

app.use(express.json({limit:'16kb'}))
app.use(cookieParser())
app.use(express.static('public'))

//route import
import userRouter from "../src/routes/user.routes.js"




//route declaration
app.use("/api/v1/users",userRouter)


app.use((err, req, res, next) => {
    console.log(err)
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: err.success,
            message: err.message,
            errors: err.errors,
        });
    }

    // For other types of errors, send a generic JSON response
    return res.status(500).json({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
    });
});

export {app}