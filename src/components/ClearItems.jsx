import React from 'react'
import '../styleSheets/ClearItems.css'

export const ClearItems = ({ itemsLeft, clearCompleted }) => {
  return (
    <div className='clearItems-container'>
      <div className='items-uncompleted'>
        {itemsLeft} items left
      </div>
      <p
        onClick={() => clearCompleted()}
        className='clear-completed'>
        Clear Completed
      </p>
    </div>
  )
}
