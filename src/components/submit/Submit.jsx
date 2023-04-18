import React from 'react'

const Submit = ({ onClick }) => {
  return (
    <>
      <input type="submit" value="Submit" className='button-text primary-btn' onClick={onClick}></input>
    </>
  )
}

export default Submit
