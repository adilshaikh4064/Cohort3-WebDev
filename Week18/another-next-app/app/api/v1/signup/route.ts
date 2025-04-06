import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prismaClient= new PrismaClient();

export async function POST(req:NextRequest){
    const reqObject= await req.json();
    const user=await prismaClient.user.create({
        data:{
            username:reqObject.data.username,
            email:reqObject.data.email,
            password:reqObject.data.password
        }
    })
    console.log(user.id);
    return NextResponse.json({
        message:'you have been signed up',
        userId: user.id
    })
}