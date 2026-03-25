import { useState } from 'react'
import ActionButton from './components/ActionButton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleTheme() {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? 'app-container dark': 'app-container light'}>
      <h1>React App Intro</h1>
      <div className='card'>
        <h2>Counter {count}</h2>
        <ActionButton label="-" onClick={() => setCount(count - 1)} color="#ff6b6b" />
        <ActionButton label="+" onClick={() => setCount(count + 1)} color="#51cf66" />
        <ActionButton label="Reset" onClick={() => setCount(0)} color="#adb5bd" />
      </div>
      <div className='theme-section'>
        <button onClick={toggleTheme}>
          Switch To {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </div>
  )
}

export default App
