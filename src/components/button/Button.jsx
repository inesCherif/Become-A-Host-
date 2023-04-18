import React from 'react'
import './Button.css'

const Button = ({ onClick }) => {
  return (
    <>
      <button className='button-text primary-btn' onClick={onClick}>Continue</button>
    </>
  )
}

export default Button
