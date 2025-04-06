import { PrismaClient } from "@prisma/client"

const newPrismaClient=()=>{
    return new PrismaClient();
}

declare global {
    let prisma: undefined | ReturnType<typeof newPrismaClient>
}

//@ts-expect-error: this is fixed
const prismaClient=globalThis.prisma??newPrismaClient();

export default prismaClient;

//@ts-expect-error: this is fixed
if(process.env.NODE_ENV !=='production') globalThis.prisma=prismaClient;