import React from "react";
import "./ProfilePhoto.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tips from "../../../../components/tips/Tips";
import Cropper from "../../../../containers/upload-photo/Cropper";

const ProfilePhoto = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "profile-photo",
    "location"
  );

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step1" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Profile Photo</h1>

          <Tips
            title="Tips"
            text="It’s important that guests can see your face. No company logos, favorite pets, blank images, etc. We can’t accept photos that don’t show the real you."
          />

          <div className="avatar-container">
            <Cropper />
          </div>

          <p className="type16 photo-advice">
            <span className="photo-advice-warning">
              Provide a photo that shows your face
            </span>{" "}
            <br />
            We can’t accept logos, abstract images, pet portraits, etc. <br />
            If you have Co-Hosts or assistants, they’ll add their photo later.
          </p>

          <span className="btn-position">
            <Link to="/location">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfilePhoto;
