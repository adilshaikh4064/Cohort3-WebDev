
import { RecoilRoot } from 'recoil'
import './App.css'
import ChatBox from './components/ChatBox'

function App() {

  return (
  <RecoilRoot>
    <div className='w-290 h-190 drop-shadow-2xl flex justify-between gap-5'>
      <ChatBox
        person='firstPerson'
      />
      <div className='w-1 bg-red-500 h-full rounded-2xl'></div>
      <ChatBox 
        person='secondPerson'
      />
    </div>
  </RecoilRoot>
  )
}

export default App
