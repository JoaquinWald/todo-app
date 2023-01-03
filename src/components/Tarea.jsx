import '../styleSheets/Tarea.css'
import x from '../images/icon-cross.svg'

export const Tarea = ({ id, text, complete, completeToDo, DeleteToDo }) => {
  return (
    <div className={complete ? 'complete' : 'tarea-container'}>
      <div className={complete ? 'check-circle-colored' : 'check-circle'}>
        {/* <img/> */}
      </div>
      <div
        className="tarea-text"
        onClick={() => completeToDo(id)}>
        {text}
      </div>
      <div className="tarea-icon">
        <img
          className='tarea-icon'
          onClick={() => DeleteToDo(id)}
          src={x}
          alt="" />
      </div>
    </div>
  )
}
