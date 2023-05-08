import React, { useEffect, useState } from "react";
import "./Languages.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tips from "../../../../components/tips/Tips";
import InputField from "../../../../components/input-field/InputField";
import { useDispatch, useSelector } from "react-redux";
import { updateLanguagesInfo } from "../../../../redux/actions/step1-actions/languagesActions";
import { auth, db } from "../../../../firebase";
import languagesDataToFirstore from "../../../../redux/actions/step1-actions/languagesDataToFirestore";

const Languages = () => {
  const [state, setState] = useState({
    languages: "",
    english_level: "",
  });

  const dispatch = useDispatch();
  const { languages, english_level } = state;
  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setState({ ...state, [name]: value }); // update the form data in state

    dispatch(updateLanguagesInfo(languages, english_level));
  };


  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "languages",
    "passions"
  );
  const language = useSelector(state => state.languages);
  const handleContinue = () => {
    languagesDataToFirstore(dispatch, language);
  };

  // fetch data from firebase and display it in inputs
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().languages) {
        setState(doc.data().languages);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step1" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Languages</h1>
          <Tips
            title="Tips"
            text="You should be able to read, write, and speak in your primary language
            If you speak more languages, you can always add them to your experience page in the future."
          />
          <div className="profile-info-inputs">
            <form action="">
              <table>
                <tr>
                  <td>
                    <InputField
                      id="languages-info"
                      labelText="what are the languages you are able to speak ?"
                      className="third-input"
                      name="languages"
                      htmlFor="languages"
                      value={languages}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <InputField
                      id="languages-info"
                      labelText="How would you rate your English level?"
                      className="third-input"
                      name="english_level"
                      htmlFor="english_level"
                      value={english_level}
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
              </table>
            </form>
          </div>

          <span className="btn-position">
            <Link to="/passions">
              <Button onClick={() => { handleContinueClick(); handleContinue(); }} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Languages;
