import mongoose from "mongoose";
import Set from "./SetInterface";

const userSchema = new mongoose.Schema({
        name: { type: String},
        deadline: { type: String },
        status:{ type:Boolean,default:true},
        technology: { type: String },
        job_rank: { type: String },
        difficulty: { type: String },
        questions:[
            {
                type:mongoose.Types.ObjectId,
                ref:"question"
            }
        ]
})

const userModel = mongoose.model<Set>("question_set",userSchema)

export default userModel