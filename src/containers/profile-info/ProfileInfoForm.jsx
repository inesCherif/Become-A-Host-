import React from "react";
import './ProfileInfoForm.css'
import Input from "../../components/input/Input";
import EmailInput from '../../components/email-input/EmailInput'

function ProfileInfoForm() {
  return (
    <div className="profile-info-inputs">
      <form action="">
        <table>
          <tr>
            <td>
              <Input
                label="First name"
                htmlFor="input1"
                id="input1"
                placeholder="Textfield text"
              />
            </td>
            <td>
              <Input
                label="Last name"
                htmlFor="input2"
                id="input2"
                placeholder="Textfield text"
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                label="Birthday"
                htmlFor="input3"
                id="input3"
                placeholder="DD/MM/YYYY"
              />
            </td>
            <td>
              <Input
                label="Nationality"
                htmlFor="input4"
                id="input4"
                placeholder="Textfield text"
              />
            </td>
          </tr>
          <tr>
            <td>
              <EmailInput />
            </td>
            <td>
              <Input
                label="Mobile"
                htmlFor="input6"
                id="input6"
                placeholder="+xx xxxxxxxx"
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default ProfileInfoForm;

