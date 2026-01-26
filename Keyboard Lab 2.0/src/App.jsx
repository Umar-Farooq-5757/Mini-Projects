import { useState } from 'react'
import './App.css'
import CustomCursor from './components/ui/CustomCursor'
import { useAppContext } from './contexts/AppContext'

function App() {
const [isDark, setIsDark] = useState(false)
const {developer}=useAppContext()
console.log(developer)
  return (
    <>
      <div>
        <CustomCursor/>
       <h1>Keyboard Lab</h1>
      </div>
    </>
  )
}

export default App
