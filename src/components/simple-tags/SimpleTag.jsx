import React from 'react'
import './SimpleTag.css'

const SimpleTag = (props) => {
  return (
    <div className="simple-tag">
      <p className="theme-label">{props.text}</p>
    </div>
  )
}

export default SimpleTag

