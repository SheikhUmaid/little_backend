import { log } from "console";
import app from "./app.js";
import connectDB from "./db.js";










connectDB()

.then(
    ()=>{
        app.listen(5555,()=>{
            console.log("Server started at 5555");
            
        })
    }
)

.catch(

    ()=>{
        console.log("")
    }
)