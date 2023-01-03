import { useState } from 'react'
import '../styleSheets/TodoForm.css'
import { v4 as uuidv4 } from 'uuid';

export const TodoForm = (props) => {

  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value)
  }

  const manejarEnvio = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      text: input,
      complete: false
    }

    props.onSubmit(tareaNueva);
  }


  return (
    <div className='todo-form-container'>
      <form
        className="todo-form"
        onSubmit={manejarEnvio}>
        <input
          className="todo-input"
          type="text"
          placeholder="Create a new todo..."
          name="text"
          onChange={manejarCambio}
        />
        <button className="todo-button">
          Add
        </button>
      </form>
    </div>
  )
}
