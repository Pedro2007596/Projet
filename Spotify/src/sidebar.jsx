import { useState } from 'react'
import './app.css'

function Sidebar() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div className='sidebar'>
        <div className='card'></div>
        <div className='card'></div>
        <div className='card'></div>
      </div>
    </div>
    </>
  )
}

export default Sidebar