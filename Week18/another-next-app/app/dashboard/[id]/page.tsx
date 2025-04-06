import prismaClient from "@/db";


// const prismaClient=new PrismaClient();


async function getUserDetail(userId:number){
    
    const user=await prismaClient.user.findFirst({
        where:{id:userId}
    })

    return user;
}

export default async function Dashboard({params}:{
    params:{
        id:string
    }
})
{
    const userId=parseInt(params.id);
    const userDetails=await getUserDetail(userId);

    return(
    <>
        {
            `${userDetails?.email},
            ${userDetails?.password},
            ${userDetails?.username}`
        }   
    </>
    )
}