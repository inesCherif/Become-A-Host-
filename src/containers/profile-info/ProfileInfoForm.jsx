import React, { useEffect, useState } from "react";
import "./ProfileInfoForm.css";
import Input from "../../components/input/Input";
import EmailInput from "../../components/email-input/EmailInput";

import { useDispatch } from "react-redux";
import { updateBirthday, updateEmail, updateFirstName, updateLastName, updateMobile, updateNationality, updateUserInfo } from "../../redux/actions/step1-actions/formActions.js";
import { auth, db } from "../../firebase";

function ProfileInfoForm() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const dispatch = useDispatch();



  // fetch data from firebase and display it in select
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().form) {
        const {
          firstName: fetchedfirstName,
          lastName: fetchedlastName,
          birthday: fetchedbirthday,
          nationality: fetchednationality,
          email: fetchedemail,
          mobile: fetchedmobile,
        } = doc.data().form;
        if (fetchedfirstName !== undefined) {
          setFirstName(fetchedfirstName);
          dispatch(updateFirstName(fetchedfirstName));
        }
        if (fetchedlastName !== undefined) {
          setLastName(fetchedlastName);
          dispatch(updateLastName(fetchedlastName));
        }
        if (fetchedbirthday !== undefined) {
          setBirthday(fetchedbirthday);
          dispatch(updateBirthday(fetchedbirthday));
        }

        if (fetchednationality !== undefined) {
          setNationality(fetchednationality);
          dispatch(updateNationality(fetchednationality));
        }

        if (fetchedemail !== undefined) {
          setEmail(fetchedemail);
          dispatch(updateEmail(fetchedemail));
        }
        if (fetchedmobile !== undefined) {
          setMobile(fetchedmobile);
          dispatch(updateMobile(fetchedmobile));
        }
      }
    };
    fetchData();
  }, []);


  // old function using one useState:
  // const [state, setState] = useState({
  //   firstName: "",
  //   lastName: "",
  //   birthday: "",
  //   nationality: "",
  //   email: "",
  //   mobile: "",
  // });

  // const dispatch = useDispatch();
  // const { firstName, lastName, birthday, nationality, email, mobile } = state;
  // const handleInputChange = (event) => {
  //   let { name, value } = event.target;
  //   setState({ ...state, [name]: value }); // update the form data in state
  //   dispatch(
  //     updateUserInfo(firstName, lastName, birthday, nationality, email, mobile)
  //   );
  // };

  // // fetch data from firebase and display it in inputs
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const userId = auth.currentUser.uid;
  //     const applicationRef = db.collection("applications").doc(userId);
  //     const doc = await applicationRef.get();
  //     if (doc.exists) {
  //       setState(doc.data().form);
  //       dispatch(
  //         updateUserInfo(
  //           doc.data().form.firstName,
  //           doc.data().form.lastName,
  //           doc.data().form.birthday,
  //           doc.data().form.nationality,
  //           doc.data().form.email,
  //           doc.data().form.mobile
  //         )
  //       );
  //     }
  //   };
  //   fetchData();
  // }, []);
  

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
                onChange={(e) => {
                  setFirstName(e.target.value);
                  dispatch(updateFirstName(e.target.value));
                }}
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
                onChange={(e) => {
                  setLastName(e.target.value);
                  dispatch(updateLastName(e.target.value));
                }}
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
                onChange={(e) => {
                  setBirthday(e.target.value);
                  dispatch(updateBirthday(e.target.value));
                }}
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
                onChange={(e) => {
                  setNationality(e.target.value);
                  dispatch(updateNationality(e.target.value));
                }}
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
                onChange={(e) => {
                  setEmail(e.target.value);
                  dispatch(updateEmail(e.target.value));
                }}
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
                onChange={(e) => {
                  setMobile(e.target.value);
                  dispatch(updateMobile(e.target.value));
                }}
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
