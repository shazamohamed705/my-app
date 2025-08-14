import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TransportContract from './TransportContract/TransportContract'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        {/* عرض صفحة العقد */}
        <TransportContract />
      </div>
    </>
  )
}

export default App

