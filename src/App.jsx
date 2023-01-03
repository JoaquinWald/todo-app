import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ToDoList } from './components/ToDoList'

function App() {

  return (
    <div className="App">
      <Header />
      <div className='tareas-lista-principal'>
        <ToDoList />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
