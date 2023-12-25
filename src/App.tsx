import './App.css'
import LinkItem from './components/LinkItem'

function App() {

  return (
    <>
      <div className='flex flex-col lg:flex-row w-full h-screen justify-between items-center'>
        <div className='lg:h-screen flex py-4 flex-col justify-center items-center w-full lg:w-1/2'>
            <img className='flex w-1/2 my-3' src='/undraw-team.svg'/>
            <p className='text-3xl'>Jeová Bastos</p>
            <p>Frontend Web Developer</p>
        </div>

        <div className='rounded-tl-3xl rounded-tr-3xl lg:rounded-tr-none lg:rounded-bl-3xl bg-gradient-to-t from-blue-950 to-blue-600 lg:h-screen flex flex-col justify-center items-center w-full lg:w-1/2 py-8'>
          <ul className='flex flex-col gap-4 w-full px-8'>
            <LinkItem source='https://dinarkia.notion.site/Resume-7f39eae9f7814af28f0e3b1378f6c3ea?pvs=4'>Currículo</LinkItem>
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
