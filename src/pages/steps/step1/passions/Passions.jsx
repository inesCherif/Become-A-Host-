import React, { useEffect, useState } from "react";
import "./Passions.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tips from "../../../../components/tips/Tips";
import InputField from "../../../../components/input-field/InputField";
import { useDispatch, useSelector } from "react-redux";
import { updateFavoriteCityFeatures, updatePassions, updateSelfDescription } from "../../../../redux/actions/step1-actions/passionActions";
import { auth, db } from "../../../../firebase";
import passionsDataToFirestore from "../../../../redux/actions/step1-actions/passionsToFirestore";

const Passions = () => {
  const dispatch = useDispatch();
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "passions",
    ""
  );
  const passions = useSelector(state => state.passions);
  const handleContinue = () => {
    passionsDataToFirestore(dispatch, passions);
  };

  const [userPassions, setUserPassions] = useState("");
  const [myFavoriteCityFeature, setMyFavoriteCityFeature] = useState("");
  const [selfDescription, setSelfDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().passions) {
        const {
          userPassions: fetcheduserPassions,
          myFavoriteCityFeature: fetchedmyFavoriteCityFeature,
          selfDescription: fetchedselfDescription,
        } = doc.data().passions;
        if (fetcheduserPassions !== undefined) {
          setUserPassions(fetcheduserPassions);
          dispatch(updatePassions(fetcheduserPassions));
        }
        if (fetchedmyFavoriteCityFeature !== undefined) {
          setMyFavoriteCityFeature(fetchedmyFavoriteCityFeature);
          dispatch(updateFavoriteCityFeatures(fetchedmyFavoriteCityFeature));
        }
        if (fetchedselfDescription !== undefined) {
          setSelfDescription(fetchedselfDescription);
          dispatch(updateSelfDescription(fetchedselfDescription));
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step1" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Passions</h1>
          <Tips
            title="Tips"
            text="What makes you uniquely qualified to host experiences? Tell guests why you’re passionate and knowledgeable about the subject matter. Keep in mind: Hosting is about person-to-person connection, so make sure this section focuses on you."
          />
          <div className="profile-info-inputs">
            <form action="">
              <table>
                <tr>
                  <td>
                    <InputField
                      inputId="passions-info"
                      labelText="What are you passionate about ?"
                      className="third-input"
                      name="userPassions"
                      htmlFor="userPassions"
                      value={userPassions}
                      onChange={(e) => {
                        setUserPassions(e.target.value);
                        dispatch(updatePassions(e.target.value));
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <InputField
                      inputId="passions-info"
                      labelText="what do you love most about your city ?"
                      className="third-input"
                      name="myFavoriteCityFeature"
                      htmlFor="myFavoriteCityFeature"
                      value={myFavoriteCityFeature}
                      onChange={(e) => {
                        setMyFavoriteCityFeature(e.target.value);
                        dispatch(updateFavoriteCityFeatures(e.target.value));
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="description" className="second-label">
                      Describe yourself more
                    </label>
                    <br />
                    <textarea
                      name="selfDescription"
                      id="passions-info"
                      cols="30"
                      rows="10"
                      className="textarea-description"
                      value={selfDescription}
                      onChange={(e) => {
                        setSelfDescription(e.target.value);
                        dispatch(updateSelfDescription(e.target.value));
                      }}
                    ></textarea>
                  </td>
                </tr>
              </table>
            </form>
          </div>

          <span className="btn-position">
            <Link to="/overview">
              <Button onClick={() => { handleContinueClick(); handleContinue(); }} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Passions;
