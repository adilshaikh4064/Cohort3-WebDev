import Link from "next/link";


export default function Home() {
  return (
  <div className="text-lg w-screen h-screen flex justify-center items-center" >
    <div className="m-4">
      <h1> Todo Application </h1>
    </div>
    <div>
      <Link className="border text-md m-2" href={'/signup'}>Sign up</Link>
      <Link className="border text-md m-2" href={'/signin'}>Sign in</Link>
    </div>
  </div>
  );
}
