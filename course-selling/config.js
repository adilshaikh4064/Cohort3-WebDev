const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const z=require('zod')
const express=require('express')

dotenv.config();


const PORT=Number(process.env.PORT) || 3000
const DATABASE=process.env.DATABASE
const SALT_ROUNDS=Number(process.env.SALT_ROUNDS) || 10
const USER_JWT_SECRET=process.env.USER_JWT_SECRET
const ADMIN_JWT_SECRET=process.env.ADMIN_JWT_SECRET



module.exports={
    jwt,
    bcrypt,
    dotenv,
    mongoose,
    z,
    express,



    PORT,
    DATABASE,
    SALT_ROUNDS,
    USER_JWT_SECRET,
    ADMIN_JWT_SECRET
}