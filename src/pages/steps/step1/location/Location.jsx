import React from "react";
import "./Location.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tips from "../../../../components/tips/Tips";
import LocationForm from "../../../../containers/location-info/LocationForm";


import { useSelector,useDispatch } from "react-redux";
import locationDataToFirestore from "../../../../redux/actions/step1-actions/locationDataToFirestore";



const Location = () => {
  const dispatch = useDispatch();
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "location",
    "languages"
  );
  const location = useSelector(state => state.location);
  const handleContinue = () => {
    locationDataToFirestore(dispatch, location);
  };
  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step1" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Location informations</h1>

          <Tips
            title="Tips"
            text="Accurate location information is key. It helps guests get to know you and your property better.
          Please note, we cannot accept listings with inaccurate location information."
          />

          <LocationForm />

          <span className="btn-position">
            <Link to="/languages">
              <Button onClick={() => { handleContinueClick(); handleContinue(); }}  />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Location;
