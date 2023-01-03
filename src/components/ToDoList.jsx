import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { Tarea } from './Tarea';
import '../styleSheets/ToDoList.css'
import { ClearItems } from './ClearItems';
import { Footer } from './Footer';

export const ToDoList = () => {

  const [tareas, setTareas] = useState([]);

  const addToDo = (tarea) => {
    if (tarea.text.trim()) {
      tarea.text = tarea.text.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const DeleteToDo = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas)
  }

  const completeToDo = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.complete = !tarea.complete;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  const clearCompleted = () => {
    const tareasActualizadas = tareas.filter(tarea => tarea.complete === false)
    setTareas(tareasActualizadas);
  }

  //footer

  const active = () => {
    const tareasActualizadas = tareas.filter(tarea => tarea.complete === false)
    setTareas(tareasActualizadas);
  }

  const completed = () => {
    const tareasActualizadas = tareas.filter(tarea => tarea.complete === true)
    setTareas(tareasActualizadas);
  }


  return (
    <>
      <TodoForm onSubmit={addToDo} />
      <div className='todo-list-container'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              text={tarea.text}
              complete={tarea.complete}
              DeleteToDo={DeleteToDo}
              completeToDo={completeToDo}
            />
          )
        }
      </div>
      <ClearItems
        clearCompleted={clearCompleted}
        itemsLeft={
          tareas.filter(tarea => tarea.complete === false).length
        }
      />
      <Footer
        // all={all}
        active={active}
        completed={completed}
      />
    </>
  )
}
