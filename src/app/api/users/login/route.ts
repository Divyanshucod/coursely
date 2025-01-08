import { connect } from "@/dbConfig/dbConfig";
import { User } from "@/models/UserModel";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
connect();

export async function POST(request: NextRequest) {
  try {
    // grabbing data
    const requestbody = await request.json();
    const { password, email } = requestbody;

    // use exists or not
    const user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json(
        { message: "User not exist create a new account" },
        { status: 200 }
      );
    }
    // matching passowrd
    const matchResult = await bcrypt.compare(password, user.password);
    if (!matchResult) {
      return NextResponse.json(
        { message: "email address or password incorrect!" },
        { status: 200 }
      );
    }

    // creating jwt token
    const token = jwt.sign({ userId: User?._id }, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    // send the response
    return NextResponse.json(
      {
        message: "login success",
        token: token,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(`Something went wrong:User/login/POST not working`);
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
