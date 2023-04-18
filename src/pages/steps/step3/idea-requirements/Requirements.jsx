import React from "react";
import "./Requirements.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tips from "../../../../components/tips/Tips";
import RadioGroup from "../../../../containers/radio-group/RadioGroup";
import Radio from "../../../../components/radio/Radio";

const Requirements = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "requirements",
    "locations"
  );

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Who can attend your experience?</h1>
          <Tips
            title="Tips"
            text="Keep in mind that someone booking your experience might book spots for other guests. If there are strict requirements around age, skill level, or certifications, include them here."
          />

          <div className="idea-content">
            <p>
              <span className="idea-title">Minimum age</span>
              <br />
              <span className="idea-subtitle">
                Set age limits for guests. Minors can only attend with their
                legal <br /> guardian.
              </span>
            </p>

            <div className="select-container">
              <select
                name="duration"
                id="duration"
                className="select age-selection"
              >
                <option value="" selected>
                  18
                </option>
                <option value="">20</option>
                <option value="">25</option>
                <option value="">35</option>
                <option value="">45</option>
              </select>
            </div>

            <label className="provision-checkbox requirements-checkbox">
              <input type="checkbox" />
              Parents can bring kids under 2 years
            </label>
            <div className="Requirements-radio-group">
              <RadioGroup
                name="accessibility"
                label="Does your experience have any accessibility features?"
              >
                <p className="radio-tip">
                  Select all the features you provide, and ensure everything is
                  accurate and up to date.
                </p>
                <Radio
                  id="radio1"
                  value="yes"
                  label="Communication accessibility features
                  This is how you communicate with guests on your experience.
                  "
                />
                <Radio
                  id="radio2"
                  value="no"
                  label="Environmental accessibility features
                  These are the attributes of the location of your experience"
                />
                <Radio
                  id="radio3"
                  value="not-sure"
                  label="Other accessibility features"
                />
              </RadioGroup>
            </div>

            <div className="Requirements-radio-group">
              <RadioGroup
                name="accessibility2"
                label="What activity level should people expect?"
              >
                <p className="radio-tip">
                  Think about how active people will get during your entire
                  experience.
                </p>
                <Radio id="radio4" value="yes" label="Light" />
                <Radio id="radio5" value="no" label="Moderate" />
                <Radio id="radio6" value="not-sure" label="Strenuous" />
                <Radio id="radio7" value="not-sure" label="Extreme" />
              </RadioGroup>
            </div>

            <div className="Requirements-radio-group">
              <RadioGroup
                name="accessibility3"
                label="What skill level is required ?"
              >
                <p className="radio-tip">
                  Think about how experienced people should be to take your
                  activity.
                </p>
                <Radio id="radio8" value="yes" label="Beginner" />
                <Radio id="radio9" value="no" label="Intermediate" />
                <Radio id="radio10" value="not-sure" label="Advanced " />
                <Radio id="radio11" value="not-sure" label="Expert " />
              </RadioGroup>
            </div>
          </div>
          <span className="btn-position">
            <Link to="/localisation">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Requirements;
