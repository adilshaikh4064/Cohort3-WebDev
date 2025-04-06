import {PrismaClient} from '@prisma/client';

const client=new PrismaClient();

async function createUser(){
    await client.user.create({
        data:{
            username:'manubhai',
            email:'manu@gmail.com',
            password:'manu123',
            age:21,
            city:'Patna'
        }
    })
}
createUser();