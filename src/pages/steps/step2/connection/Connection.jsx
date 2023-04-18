import React from "react";
import "./Connection.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tip from "../../../../components/detailed-tips/Tip";
import RadioGroup from "../../../../containers/radio-group/RadioGroup";
import Radio from "../../../../components/radio/Radio";

const Connection = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "Connection",
    "theme"
  );

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step2" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Connection</h1>

          <Tip
            statement1="We’re looking for warm and welcoming people who can build bridges and
            help everyone have fun."
            statement2="Helping guests get to know each other"
            statement3="Sharing personal stories"
            statement4="Creating magical moments"
            statement5="Guests should ideally come as strangers and leave as friends."
          />

          <RadioGroup
            name="activity-hosted"
            label="Which of these sounds most like you?"
          >
            <Radio
              id="radio1"
              value="friendships"
              label="I love bringing people together and creating new friendships"
            />
            <Radio
              id="radio2"
              value="experience"
              label="I enjoy sharing my personal experience with others"
            />
            <Radio
              id="radio3"
              value="not-personal"
              label="I prefer not to get too personal with guests"
            />
          </RadioGroup>

          <span className="btn-position">
            <Link to="/theme">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Connection;
