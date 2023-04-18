import React, { useState } from 'react';
import './Toggle.css'

 const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <section className='toogle-container'>
      <div className={`checkbox-example ${isChecked ? 'red-background' : ''}`}>
        <input type="checkbox" value="1" id="checkboxOneInput" onClick={() => setIsChecked(!isChecked)}/>
        <label for="checkboxOneInput"></label>
      </div>
      <div>
        <p className='contact-details'>Allow people to request dates and times not listed.</p>
      </div>
    </section>
    </div>
  )
}
export default Toggle