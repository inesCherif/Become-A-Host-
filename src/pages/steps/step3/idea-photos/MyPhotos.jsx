import React from "react";
import "./MyPhotos.css";

import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import DragAndDropComponent from "../../../../components/upload-photos/DragAndDropComponent ";

const MyPhotos = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "photos",
    "groupsize"
  );

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Photos</h1>
          <div className="tips">
            <p className="type16">
              <br />
              Your photos must have <br />
              A variety of details and angles, including photos of people in
              action <br />
              Candid moments that accurately illustrate the experience <br />
              Good image quality—no heavy filters, distortions, overlaid text,
              or watermarks
            </p>
          </div>
          <div className="my-photos-content">

            <h1 className="add-photo-title">Add your photos.</h1>
            <p className="add-photo-explanation">We’ll review every photo before it goes live on your experience page</p>


            <DragAndDropComponent />

          </div>

          <span className="btn-position">
            <Link to="/groupsize">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default MyPhotos;
