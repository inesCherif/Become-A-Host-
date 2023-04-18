import React from "react";
import "./Overview.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";

const Overview = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "overview",
    "expertise"
  );

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step2" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">What we are looking for</h1>
          <div className="body">
            <p className="overview-txt1">
              Experience hosts are passionate locals who can make people feel at
              home while they’re
              <br /> trying something new. They must meet these standards:
            </p>
          </div>
          <div className="body overview-txt2">
            <p>
              <span className="overview-subtitle">Expertise:</span> Having
              exceptional skill, ability, or background
            </p>
            <p>
              <span className="overview-subtitle">Access:</span> Giving guests
              something they couldn’t do on their own
            </p>
            <p>
              <span className="overview-subtitle">Connection:</span> Making
              meaningful interactions happen
            </p>
          </div>
          <div className="body">
            <p className="overview-txt1">
              Let’s go over them together in more detail.
            </p>
          </div>
          <span className="btn-position">
            <Link to="/expertise">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Overview;
