import dotenv from "dotenv"
import {app} from "./app.js"
import { connectionDB } from "./DB/index.js"
dotenv.config({
    path:'./.env'
})
const PORT = process.env.PORT || 3000
connectionDB()
.then(
    app.listen(PORT,() =>{
        console.log(`Your app is running at : http://localhost:${PORT}`);
        
    })
)
.catch((error)=>{
    console.log("Mongodb connection faild !!");
    
})

connectionDB()

