import React from "react";
import "./Photos.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import FirstGoodAssortment from "../../../../assets/images/photo-requirements/good1.png";
import SecondGoodAssortment from "../../../../assets/images/photo-requirements/good2.png";
import ThirdGoodAssortment from "../../../../assets/images/photo-requirements/good3.png";
import FourthGoodAssortment from "../../../../assets/images/photo-requirements/good4.png";
import FirstBadImage from "../../../../assets/images/photo-requirements/bad1.png";
import SecondBadImage from "../../../../assets/images/photo-requirements/bad2.png";
import ThirdBadImage from "../../../../assets/images/photo-requirements/bad3.png";
import FourthBadImage from "../../../../assets/images/photo-requirements/bad4.png";
import GoodIcon from "../../../../assets/images/photo-requirements/good.png";
import WarningIcon from "../../../../assets/images/photo-requirements/bad.png";

const Photos = () => {
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

          <div className="idea-content photo-tips">
            <h1 className="photos-tips-title">
              Let’s go over a few photo <br /> requirements
            </h1>
            <p className="photos-tips-subtitle">
              Provide a variety of details and angles, including photos <br />{" "}
              of people in action.
            </p>

            <div className="photos-tips-content">
              <div>
                <img src={FirstGoodAssortment} alt="" />
                <img src={SecondGoodAssortment} alt="" />
                <img src={ThirdGoodAssortment} alt="" />
                <div className="images-tips-type">
                  <img src={GoodIcon} alt="" />
                  <p>Good assortment</p>
                </div>
              </div>
              <div>
                <img src={FirstBadImage} alt="" />
                <img src={SecondBadImage} alt="" />
                <img src={ThirdBadImage} alt="" />
                <div className="images-tips-type">
                  <img src={WarningIcon} alt="" />
                  <p>Too repetitive</p>
                </div>
              </div>
            </div>

            <p className="photos-tips-subtitle">
              Show candid moments that accurately illustrate your <br />{" "}
              experience.
            </p>

            <div className="photos-tips-content">
              <div>
                <img src={FourthGoodAssortment} alt="" />
                <div className="images-tips-type">
                  <img src={GoodIcon} alt="" />
                  <p>Descriptive</p>
                </div>
              </div>
              <div>
                <img src={FourthBadImage} alt="" />
                <div className="images-tips-type">
                  <img src={WarningIcon} alt="" />
                  <p>Posed</p>
                </div>
              </div>
            </div>


          </div>

          <span className="btn-position">
            <Link to="/myPhotos">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Photos;
