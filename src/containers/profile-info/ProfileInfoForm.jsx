import React, { useEffect, useState } from "react";
import "./ProfileInfoForm.css";
import Input from "../../components/input/Input";
import EmailInput from "../../components/email-input/EmailInput";

import { useDispatch } from "react-redux";
import { updateUserInfo } from "../../redux/actions/step1-actions/formActions.js";
import { auth, db } from "../../firebase";



function ProfileInfoForm() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    nationality: "",
    email: "",
    mobile: "",
  });

  const dispatch = useDispatch();
  const { firstName, lastName, birthday, nationality,email, mobile } = state;
  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setState({ ...state, [name]: value }); // update the form data in state
    dispatch(
      updateUserInfo(firstName, lastName, birthday, nationality, email, mobile)
    );
  };


  // fetch data from firebase and display it in inputs
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists) {
        setState(doc.data().form);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="profile-info-inputs">
      <form>
        <table>
          <tr>
            <td>
              <Input
                label="First name"
                htmlFor="firstName"
                id="personal-info"
                name="firstName"
                placeholder="Textfield text"
                onChange={handleInputChange}
                value={firstName}
              />
            </td>
            <td>
              <Input
                label="Last name"
                htmlFor="lastName"
                id="personal-info"
                name="lastName"
                placeholder="Textfield text"
                onChange={handleInputChange}
                value={lastName}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Input
                label="Birthday"
                htmlFor="birthday"
                id="personal-info"
                name="birthday"
                placeholder="DD/MM/YYYY"
                onChange={handleInputChange}
                value={birthday}
              />
            </td>
            <td>
              <Input
                label="Nationality"
                htmlFor="nationality"
                id="personal-info"
                name="nationality"
                placeholder="Textfield text"
                onChange={handleInputChange}
                value={nationality}
              />
            </td>
          </tr>
          <tr>
          <td>
              <Input
                label="Email"
                htmlFor="email"
                id="personal-info"
                name="email"
                placeholder="email"
                onChange={handleInputChange}
                value={email}
              />
            </td>
            <td>
              <Input
                label="Mobile"
                htmlFor="mobile"
                id="personal-info"
                name="mobile"
                placeholder="+xx xxxxxxxx"
                onChange={handleInputChange}
                value={mobile}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default ProfileInfoForm;
