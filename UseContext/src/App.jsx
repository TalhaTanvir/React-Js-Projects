import React, { useState } from 'react'
import Home from './Components/Home'

function App() {
  const [name, setName] = useState("Talha");
  return (
    <>
    <Home name={name}/>
    </>
  )
}

export default App