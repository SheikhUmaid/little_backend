import mongoose from "mongoose";    







const userSchema = mongoose.Schema({
    email:{
        type:String,
        unique: true,
        required: true
    },
    name:String,


    password:{
        type: String,
        required:true 
    }

})


const User = mongoose.model("User",userSchema)


export default User


// hashedPassword = await bcrypt.hash(password, 8)