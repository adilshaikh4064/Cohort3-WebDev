"use client"

import {TextInput} from '@repo/ui/text-input';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router=useRouter();
  return (
    <div 
      style={{
      height:'100vh',
      width:'100vw',
      display:'flex',
      justifyContent:'center',
      justifyItems:'center',
      marginTop:'1rem'
    }}>
      <TextInput placeHolder='Enter the room' />
      <div 
        style={{
        height:'2rem',
        width:'100px',
        marginLeft:'1rem',
        display:'flex',
        justifyContent:'center',
        justifyItems:'center',
        backgroundColor:'red',
        borderRadius:'1rem',
      }}>
        <button
          style={{
            all:'unset',
            height:'100%',
            width:'100%',
            textAlign:'center',
            cursor:'pointer'
          }}
          onClick={()=>(router.push('/chat/123'))}
        >Join room</button>
      </div>
    </div>
  );
}
