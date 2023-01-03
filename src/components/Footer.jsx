import React from 'react'
import '../styleSheets/Footer.css'

export const Footer = ({ all, active, completed }) => {
  return (
    <footer>
      <div className='h3-container'>
        <h3
          className='all-item'>
          All
        </h3>
        <h3
          className='active-item'
          onClick={() => active()}>
          Active
        </h3>
        <h3
          className='completed-item'
          onClick={() => completed()}>
          Completed
        </h3>
      </div>
    </footer>
  )
}
