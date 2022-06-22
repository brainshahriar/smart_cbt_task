import { Document } from "mongoose";
import Question from "../Questions/QuestionDto";

export default interface User extends Document{
    title:string;
    description:string;
    image:string;
    questions:[Question];
}