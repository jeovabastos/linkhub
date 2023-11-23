import './App.css'
import StackItem from './components/StackItem'
import LinkItem from './components/LinkItem'

function App() {

  return (
    <>
      <div className='flex flex-col-reverse lg:flex-row w-full lg:h-screen justify-center items-center'>
        <div className='lg:h-screen py-12 lg:py-0  flex flex-col justify-center items-center w-full lg:w-1/2 gap-8'>
          <div>
            <p className='text-3xl'>Jeová Bastos</p>
            <p>Frontend Web Developer</p>
          </div>

          <div className='flex flex-wrap mx-16 lg:mx-0 gap-12'>
            <StackItem source='/figma.svg'/>
            <StackItem source='/react.svg'/>
            <StackItem source='/tailwind.svg'/>
            <StackItem source='/redux.svg'/>
            <StackItem source='/vite.svg'/>
          </div>
        </div>

        <div className='bg-slate-800 bg-my-background lg:h-screen rounded-br-3xl rounded-bl-3xl lg:rounded-tl-3xl lg:rounded-bl-3xl flex flex-col justify-center items-center w-full lg:w-1/2 py-8'>
          <ul className='flex flex-col gap-4 w-full px-8'>
            <LinkItem source='https://dinarkia.notion.site/Resume-7f39eae9f7814af28f0e3b1378f6c3ea?pvs=4'>Resume</LinkItem>
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
