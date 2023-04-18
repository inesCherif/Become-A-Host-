import React from 'react'
import './LocationForm.css'
import InputField from "../../components/input-field/InputField"

const LocationForm = () => {
  return (
    <div className="profile-info-inputs">
      <form action="">
        <table>
          <tr>
            <td>
              <InputField inputId="input1" inputName="input1" labelText="Your country" />
            </td>
            <td>
              <InputField inputId="input2" inputName="input2" labelText="Your city name" />            
            </td>
          </tr>
          <tr>
            <td>
              <InputField inputId="input3" inputName="input3" labelText="How many years have you been living in it ?" />
            </td>
            <td>
              <InputField inputId="input4" inputName="input4" labelText="Adress" />            
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default LocationForm
