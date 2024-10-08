import './App.css'
import LinkItem from './components/LinkItem'

function App() {

  return (
    <>
      <div className='bg-[#e3c097] flex flex-col lg:flex-row w-full h-screen justify-between items-center'>
        {/* HERO */}
        <div className='lg:h-screen flex py-4 flex-col justify-center items-center w-full lg:w-1/2'>
            <img className='flex w-1/2 my-3' src='/undraw-team.svg'/>
            <p className='text-red-950 text-3xl '>Jeová Bastos</p>
            <p className='text-red-950'>Web Developer</p>
        </div>

        {/* LINKS */}
        <div className='rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-bl-2xl bg-red-900 lg:h-screen flex flex-col justify-center items-center w-full lg:w-1/2 py-8'>
          <ul className='flex flex-col gap-4 w-full px-8'>
            {/* <LinkItem source='https://dinarkia.notion.site/Resume-7f39eae9f7814af28f0e3b1378f6c3ea?pvs=4'>Currículo</LinkItem> */}
            <LinkItem source='https://github.com/jeovabastos'>Github</LinkItem>
            <LinkItem source='https://www.linkedin.com/in/jeovadev/'>Linkedin</LinkItem>
            <LinkItem source='https://www.jbastos.dev/'>Porfolio</LinkItem>
          </ul>          
        </div>
      </div>
    </>
  )
}

export default App
