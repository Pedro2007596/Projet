import { useState } from 'react'
import './App.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'></div>
    </>
  )
}

export default Header