// "use client"

import { getServerSession } from "next-auth";
// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// export default function HomeWrapper(){
//   return(
//   <SessionProvider>
//     <Home/>
//   </SessionProvider>
//   )
// }
// function Home() {
//   const session=useSession();
//   console.log(session);
//   return (
//   <SessionProvider>
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       hi there
//       <button onClick={()=>signIn()}>Sign in</button>
//       <button onClick={()=>signOut()}>Sign out</button>
//       <div>
//         {JSON.stringify(session)};
//       </div>
//     </div>
//   </SessionProvider>
//   );
// }
export default async function Home() {
  const session=await getServerSession();
  console.log(session);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      hi there
      <div>
        {JSON.stringify(session)};
      </div>
    </div>
  );
}
