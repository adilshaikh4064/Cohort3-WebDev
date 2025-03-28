import './App.css'
import { PlusIcon } from './components/icons/PlusIcon'
import { ShareIcon } from './components/icons/ShareIcon'
import { BrainIcon } from './components/SideBarIcon/BrainIcon'
import { DocumentIcon } from './components/SideBarIcon/DocumentIcon'
import { HashIcon } from './components/SideBarIcon/HashIcon'
import { LinkIcon } from './components/SideBarIcon/LinkIcon'
import { TwitterIcon } from './components/SideBarIcon/TwitterIcon'
import { YoutubeIcon } from './components/SideBarIcon/YoutubeIcon'
import Button from './components/ui/Button'
import ContentCard from './components/ui/ContentCard'
import SideBarButtons from './components/ui/SideBarButtons'

function App() {

  return (
  <div className='h-[100vh] relative'>
    <div className='ml-80 px-10 pt-5 pb-8 flex justify-between items-center bg-mainBackground'>
      <div>
        <h1 className='text-2xl font-bold'>All Notes</h1>
      </div>
      <div className='flex gap-2'>
        <Button 
          variant='secondary'
          size='lg'
          title='Share Brain'
          startIcon={<ShareIcon/>}
          onClick={()=>{}}
        />
        <Button 
          variant='primary'
          size='lg'
          title='Add Content'
          startIcon={<PlusIcon/>}
          onClick={()=>{}}
        />
      </div>
    </div>

    <div className='ml-80 grid grid-cols-4 gap-x-8 gap-y-12 justify-center items-center bg-mainBackground px-10'>
      <ContentCard
        type='document'
        title='Project Ideas'
        tags={['productivity','ideas']}
        link='this is a link'
      />
      <ContentCard
        type='tweet'
        title='Project Ideas'
        tags={['productivity','ideas']}
        link='this is a link'
      />
      <ContentCard
        type='link'
        title='Project Ideas'
        tags={['productivity','ideas']}
        link='this is a link'
      />
      <ContentCard
        type='video'
        title='Project Ideas'
        tags={['productivity','ideas']}
        link='this is a link'
      />
    </div>

    <div className='h-full w-80 bg-white fixed top-0 left-0 border-r border-borderColor drop-shadow-md'>
      <div className='px-4 pt-5 pb-8 flex items-center gap-2'>
        <BrainIcon/>
        <p className='text-xl font-bold'> Second Brain </p>
      </div>
      <div className='px-4 py-4 flex flex-col gap-5'>
        <SideBarButtons 
          name='Tweets'
          startIcan={<TwitterIcon/>}
        />
        <SideBarButtons 
          name='Videos'
          startIcan={<YoutubeIcon/>}
        />
        <SideBarButtons 
          name='Documents'
          startIcan={<DocumentIcon/>}
        />
        <SideBarButtons 
          name='Links'
          startIcan={<LinkIcon/>}
        />
        <SideBarButtons 
          name='Tags'
          startIcan={<HashIcon/>}
        />
      </div>
    </div>
  </div>
  )
}

export default App
