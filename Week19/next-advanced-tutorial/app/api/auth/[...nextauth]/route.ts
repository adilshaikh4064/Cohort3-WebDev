import NextAuth from 'next-auth';
import credentialProvider from 'next-auth/providers/credentials';

const handler=NextAuth({
    providers:[
        credentialProvider({
            name:'Email',
            credentials: {
                username: {label:"Username", type:"text", placeholder:"J Smith"},
                password: {label:"Password", type:"password"}
            },
            async authorize(credentials,req){
                console.log(credentials);
                console.log(req);
                return{
                    username:'adil',
                    id: '1',
                    email:'adil@gmail.com'
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export {
    handler as GET,
    handler as POST
}