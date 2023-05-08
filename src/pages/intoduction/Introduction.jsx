import React from "react";
import "./Introduction.css";
import Logo from "../../assets/brand/logo/HomeLogoBlack.png";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div>
      <div>
        <img src={Logo} alt="Tabaani Black Logo" className="black-logo" />
        <h1 className="header2 introduction-title">
          Welcome! <br />
          Your hosting journey starts here.
        </h1>
        <p className="body paragraph">
          Tabaani Experiences are small group activities and tour led by
          passionate local hosts like you...
          <br />
          <br />
          All experience ideas are reviewed by a small team at Tabaani. <br />{" "}
          If your idea meets our quality standards, you’ll get to add dates{" "}
          <br /> and start hosting.
          <br />
          <br />
          We’re excited to learn more about you, and what you’d like to share
          with the world.
        </p>
        <span className="btn">
          <Link to="/loading">
            <Button />
          </Link>
        </span>
      </div>
      <div className="img1"></div>
    </div>
  );
};

export default Introduction;
