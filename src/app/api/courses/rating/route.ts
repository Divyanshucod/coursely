import { NextRequest,NextResponse } from "next/server";
import {Rating} from '@/models/RatingModel'


export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json()
    const {Review,startRating,courseId} = reqBody;

    // get the existing rating for the course
    const courseRating = await Rating.findById(courseId);
    if(!courseRating){
        const star = {
            ones:startRating === 1 ? 1:0,
            twos:startRating === 2 ? 1:0,
            threes:startRating === 3 ? 1:0,
            fours:startRating === 4 ? 1:0,
            fives:startRating === 5 ? 1:0,
            zeros:startRating === 0 ? 1:0,
        }
        // add new rating to course
        await Rating.create({
            courseId:courseId,
            reviews:[Review],
            ratings:star
        })

        return NextResponse.json({message:"Rating added"},{status:200})
    }
    
    const star2 = {
        ones:startRating === 1 ? courseRating.ratings.ones+1:courseRating.ratings.ones,
        twos:startRating === 2 ? courseRating.ratings.twos+1:courseRating.ratings.twos,
        threes:startRating === 3 ? courseRating.ratings.threes+1:courseRating.ratings.threes,
        fours:startRating === 4 ? courseRating.ratings.fours+1:courseRating.ratings.fours,
        fives:startRating === 5 ? courseRating.ratings.fives+1:courseRating.ratings.fives,
        zeros:startRating === 0 ? courseRating.ratings.zeros+1:courseRating.ratings.zeros,
    }
     
    //update the ratings
    const updatedRatings = await Rating.findByIdAndUpdate(courseId,{
        reviews: [...courseRating.reviews,Review],
        ratings: star2,
        courseId:courseRating.courseId
    },{new: true,
    runValidators: true})
     
    return NextResponse.json({message:"rating updated"},{status:200})
    } catch (error) {
        console.log('got error while rating');
        return NextResponse.json({message:error})
    }
}

export async function GET(request:NextRequest) {
    try {
        const reqBody = await request.json()
        
    } catch (error) {
        console.log('got error while rating:get');
        return NextResponse.json({message:error})
    }
}
