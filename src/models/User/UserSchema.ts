import mongoose from "mongoose";
import User from "./UserInterface";

const userSchema = new mongoose.Schema({
        title: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
        image:{
            type:String,
        },
        questions:[
            {
                type:mongoose.Types.ObjectId,
                ref:"question"
            }
        ]
})

const userModel = mongoose.model<User>("user",userSchema)

export default userModel