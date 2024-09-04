import { useState } from 'react'
import './App.css'
import Sidebar from './sidebar'
import Header from './header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='divAvo'>
    <Header/>
    <div className='A'>
      <Sidebar/>
     <div className='divAvo'>
      <div className='divPai'>
        <div className='card'>
        </div>
        <div className='card'>
        </div>
        <div className='card'>
        </div>
        <div className='card'>
        </div>
      </div>
      <div className='divPai'>
        <div className='card'>
        </div>
        <div className='card'>
        </div>
        <div className='card'>
        </div>
        <div className='card'>
        </div>
      </div>
      <div className='divPai'>
        <div className='card'>
        </div>
        <div className='card'>
        </div>
        <div className='card'>
        </div>
        <div className='card'>
        </div>
      </div>
      </div>
      </div>
      </div> 
    </>
  )
}

export default App
