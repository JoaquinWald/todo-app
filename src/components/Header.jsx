import React from 'react'
import '../styleSheets/Header.css'
import { BackImage } from './BackImage'
import { DarkLight } from './DarkLight'
import { Todo } from './Todo'

export const Header = () => {
  return (
    <header>
      <div className='backImage-container'>
        <BackImage />
      </div>
      <div className='header-todo-container'>
        <div className='todoIcon-container'>
          <Todo />
          <DarkLight />
        </div>
      </div>
    </header>
  )
}
