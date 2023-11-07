import { useState } from 'react'
import Countries from './components/Countries'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Countries />
    </>
  )
}

export default App
