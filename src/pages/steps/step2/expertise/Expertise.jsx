import React from "react";
import "./Expertise.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tip from "../../../../components/detailed-tips/Tip";
import RadioGroup from "../../../../containers/radio-group/RadioGroup";
import Radio from "../../../../components/radio/Radio";

const Expertise = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "expertise",
    "access"
  );

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step2" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Expertice</h1>

          <Tip
            statement1="We’re looking for passionate storytellers who can share a unique perspective and insider knowledge."
            statement2="Being a well-informed enthusiast"
            statement3="Having specialized training"
            statement4="Having achievements in your field"
            statement5="Guests value hosts with a distinctive point of view they can’t easily find elsewhere."
          />

          <RadioGroup
            name="activity-hosted"
            label="Have you hosted this activity before?"
          >
            <Radio
              id="radio1"
              value="yes"
              label="Yes, I’ve hosted or taught this activity professionally"
            />
            <Radio
              id="radio2"
              value="no"
              label="Yes, I’ve hosted this activity informally for friends or family"
            />
            <Radio
              id="radio3"
              value="not-sure"
              label="No, I’ve never hosted this activity before"
            />
          </RadioGroup>

          <RadioGroup name="guide" label="Do you have a Tour guide License?">
            <Radio
              id="radio4"
              value="yes"
              label="Yes, I’m a full time Tour guide"
            />
            <Radio
              id="radio5"
              value="no"
              label="No, I’ve no license but i’m a freelancer"
            />
            <Radio
              id="radio6"
              value="not-sure"
              label="No, I’ve another full time job"
            />
          </RadioGroup>

          <span className="btn-position">
            <Link to="/access">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Expertise;
