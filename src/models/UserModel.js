import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{type:String,required:true,min:[3,'to short'],unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profilePic:{type:String},
    type:{type:String,default:'student'},
    createdCourses:[{ type: mongoose.Schema.Types.ObjectId, ref: 'courses', required: true }],
    joinedCourses:[{ type: mongoose.Schema.Types.ObjectId, ref: 'courses', required: true }]
})


export const User = mongoose.model.users || mongoose.model("users",UserSchema)