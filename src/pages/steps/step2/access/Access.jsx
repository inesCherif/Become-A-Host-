import React from "react";
import "./Access.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tip from "../../../../components/detailed-tips/Tip";
import RadioGroup from "../../../../containers/radio-group/RadioGroup";
import Radio from "../../../../components/radio/Radio";

const Access = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "access",
    "Connection"
  );

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step2" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Access</h1>

          <Tip
            statement1="We’re looking for insiders who can show off a side of their city that visitors
            couldn’t find otherwise."
            statement2="Places only locals know about"
            statement3="Interesting people"
            statement4="Special items that are hard to find"
            statement5="Guests love going beyond the typical tourist destinations."
          />

          <RadioGroup
            name="activity-hosted"
            label="Which of these best describes what you’ll do?"
          >
            <Radio
              id="radio1"
              value="unique"
              label="It’s very unique—guests couldn’t do it without me"
            />
            <Radio
              id="radio2"
              value="perspective"
              label="Guests could do this on their own, 
              but I bring a unique perspective to the activity"
            />
            <Radio
              id="radio3"
              value="without-me"
              label="Guests could do this on their own without me"
            />
          </RadioGroup>

          <span className="btn-position">
            <Link to="/connection">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Access;
