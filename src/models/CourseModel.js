import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
    title:{type:String,required:true,min:[3,'to short'],unique:true},
    description:{type:String},
    forwhom:[{type:String,required:true}],
    courseField:{type:String},
    videos:[{type:String}],
    documents:[{type:String}],
    thumbNail:{type:String},
    coveredSkills:[{type:String}]
})


export const Course = mongoose.model.courses || mongoose.model("courses",CourseSchema)