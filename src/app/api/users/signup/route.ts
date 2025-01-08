import {connect} from '@/dbConfig/dbConfig'
import {User} from '@/models/UserModel'
import { NextResponse,NextRequest } from 'next/server'
import bcrypt from 'bcrypt'

connect()

export async function POST(request:NextRequest){
    try {
        // grabbing data
        const requestbody = await request.json()
        let {username,password,email,profilePic} = requestbody;

        // use exists or not
        const user = await User.findOne({email:email})
        if(user){
            return NextResponse.json({message:'User Already Exists!'},{status:400})
        }
        // hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        // create new user
        if(!profilePic){
            profilePic = username[0];
        }

        await User.create({
            username:username,
            email:email,
            password:hashedPassword,
            profilePic:profilePic
        })

        return NextResponse.json({message:'New user created!'},{status:200})
    } catch (error:any) {
        console.log(`Something went wrong:User/signup/POST not working`);
        console.log(error);
        return NextResponse.json({error:error.message},{status:500})
    }
}
