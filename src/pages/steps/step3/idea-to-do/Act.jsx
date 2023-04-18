import React, { useState } from "react";
import "./Act.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import TextArea from "../../../../components/textarea/TextArea";
import VerticalStepper from "../../../../components/vertical-stepper/VerticalStepper"

const Act = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav("do", "provide");

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">What we’ll do</h1>

          <div className="tips">
            <h2 className="body tips-title">Tips</h2>
            <p className="type16">
              our activity description is a chance to inspire guests to take
              your experience. Think about it like a story, with a beginning,
              middle, and end. <br />
              <span className="bold">Describe your experience </span>
              <br />
              First, briefly describe what you’ll do with your guests. What
              unique details set it apart from other similar experiences? <br />
              Then, get more specific. How will you kick things off? How will
              you make guests feel included and engaged during your time
              together? <br />
              Finally, say what you want guests to leave with. Friends?
              Knowledge? A greater appreciation for your culture? End with a
              strong selling point
            </p>
          </div>
          <div className="idea-content">
            <p>
              <span className="idea-title">
                Describe briefly your experience
              </span>
              <br />
              <span className="idea-subtitle">
                What are you hosting? Be specific.
              </span>
            </p>
            <TextArea
              placeholder="Tell Travelrs the story of what they’ll do during your experience."
              maxLength={300}
            />

            <p>
              <span className="idea-title">How long is your experience?</span>
              <br />
              <span className="idea-subtitle">
                We suggest at least 2 hours based on your activity. <br />
                You can always change this later.
              </span>
            </p>

            <div className="select-container">
              <label htmlFor="duration" className="select-label">Duration</label><br />
              <select name="duration" id="duration" className="select">
              <option value="" disabled selected hidden>2 hours</option>
                <option value="2 hours">2 hours</option>
                <option value="3 hours">3 hours</option>
                <option value="4 hours">4 hours</option>
                <option value="5 hours">5 hours</option>
                <option value="other">more than 5 hours</option>
              </select>
            </div>

            <p>
              <span className="idea-title">Set Your experience plan</span>
              <br />
              <span className="idea-subtitle">
              What is your experience steps
              </span>
            </p>

            <VerticalStepper />



          </div>
          <span className="btn-position">
            <Link to="/provide">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Act;
