import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({
    courseId:{ type: mongoose.Schema.Types.ObjectId, ref: 'courses', required: true },
    reviews:[{type:String}],
    ratings:[{
        fours:{type:Number},
        fives:{type:Number},
        ones:{type:Number},
        twos:{type:Number},
        zeros:{type:Number},
    }]
})


export const Rating = mongoose.model.ratings || mongoose.model("ratings",RatingSchema)