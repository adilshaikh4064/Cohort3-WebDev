import dotenv from 'dotenv';
dotenv.config()

export const config={
    port: Number(process.env.PORT)??3000,
    dbName: process.env.DATABASE_NAME??"",
    mongodbUrl: process.env.MONGODB_URL??"",
    saltRounds: Number(process.env.SALT_ROUNDS)??10,
    jwtSecret: process.env.JWT_SECRET??"",
}