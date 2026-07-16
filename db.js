import mongoose from "mongoose";




async function connectDB() {
    try{
        await mongoose.connect("mongodb://localhost:27017/todoapp");
        console.log("Database connected successfully...")
    }catch(e){
        console.log("Database connection failed...")
    }
}



const connectDbUsingPurePromise = new Promise((resolve, reject)=>{
    const connected = mongoose.connect("mongodb://localhost:27017/todoapp");

    if(connected){
        resolve()
    }

    else{
        reject();
    }


})


export default connectDB;
