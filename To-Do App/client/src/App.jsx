import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
     <Header/>
     <main>
      <Input/>
      <TodoList/>
     </main>
    </>
  )
}

export default App
