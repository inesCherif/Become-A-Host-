import React, { useEffect, useState } from "react";
import "./Requirements.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tips from "../../../../components/tips/Tips";
import RadioGroup from "../../../../containers/radio-group/RadioGroup";
import Radio from "../../../../components/radio/Radio";
import { useDispatch, useSelector } from "react-redux";
import requirementsToDataToFirestore from "../../../../redux/actions/step3-actions/requirementsToFirestore";
import { auth, db } from "../../../../firebase";
import {
  updateKids,
  updateAccessibilityFeatures,
  updateActivityLevel,
  updateSkillLevel,
  setSelectedAge,
} from "../../../../redux/actions/step3-actions/requirementsActions";

const Requirements = () => {
  const [kids, setkids] = useState("Parents can't bring kids under 2 years");
  const [accessibilityFeatures, setaccessibilityFeatures] = useState();
  const [activityLevel, setactivityLevel] = useState();
  const [skillLevel, setskillLevel] = useState();
  const dispatch = useDispatch();

  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "requirements",
    "locations"
  );
  const requirements = useSelector((state) => state.requirements);
  const handleContinue = () => {
    requirementsToDataToFirestore(dispatch, requirements);
  };



  const selectedValue = () => {
    const selected = document.getElementById("age").value;
    dispatch(setSelectedAge(selected));
  };


  // fetch data from firebase and display it in Radio
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().requirements) {
        // extract fields from the requirements object
        const {
          kids: fetchedkids,
          accessibilityFeatures: fetchedaccessibilityFeatures,
          activityLevel: fetchedactivityLevel,
          skillLevel: fetchedskillLevel,
        } = doc.data().requirements;
        if (fetchedkids !== undefined) {
          setkids(fetchedkids);
          dispatch(updateKids(fetchedkids));
        }
        if (fetchedaccessibilityFeatures !== undefined) {
          setaccessibilityFeatures(fetchedaccessibilityFeatures);
          dispatch(updateAccessibilityFeatures(fetchedaccessibilityFeatures));
        }
        if (fetchedactivityLevel !== undefined) {
          setactivityLevel(fetchedactivityLevel);
          dispatch(updateActivityLevel(fetchedactivityLevel));
        }
        if (fetchedskillLevel !== undefined) {
          setskillLevel(fetchedskillLevel);
          dispatch(updateSkillLevel(fetchedskillLevel));
        }
      }
    };
    fetchData();
  }, []);

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
                name="age"
                id="age"
                className="select age-selection"

                onChange={selectedValue}
              >
                <option value="18" selected>
                  18
                </option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="35">35</option>
                <option value="45">45</option>
              </select>
            </div>

            <label className="provision-checkbox requirements-checkbox">
              <input
                type="checkbox"
                value="Parents can bring kids under 2 years"
                onChange={(e) => {
                  if (e.target.checked) {
                    setkids(e.target.value);
                    dispatch(updateKids(e.target.value));
                  } else {
                    setkids("Parents can't bring kids under 2 years");
                    dispatch(
                      updateKids("Parents can't bring kids under 2 years")
                    );
                  }
                }}
                checked={kids === "Parents can bring kids under 2 years"}
              />
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
                  value="Communication accessibility features This is how you communicate with guests on your experience."
                  label="Communication accessibility features This is how you communicate with guests on your experience."
                  onChange={(e) => {
                    setaccessibilityFeatures(e.target.value);
                    dispatch(updateAccessibilityFeatures(e.target.value));
                  }}
                  checked={
                    accessibilityFeatures ===
                    "Communication accessibility features This is how you communicate with guests on your experience."
                  }
                />
                <Radio
                  id="radio2"
                  value="Environmental accessibility features These are the attributes of the location of your experience"
                  label="Environmental accessibility features These are the attributes of the location of your experience"
                  onChange={(e) => {
                    setaccessibilityFeatures(e.target.value);
                    dispatch(updateAccessibilityFeatures(e.target.value));
                  }}
                  checked={
                    accessibilityFeatures ===
                    "Environmental accessibility features These are the attributes of the location of your experience"
                  }
                />
                <Radio
                  id="radio3"
                  value="Other accessibility features"
                  label="Other accessibility features"
                  onChange={(e) => {
                    setaccessibilityFeatures(e.target.value);
                    dispatch(updateAccessibilityFeatures(e.target.value));
                  }}
                  checked={
                    accessibilityFeatures === "Other accessibility features"
                  }
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
                <Radio
                  id="radio4"
                  value="Light"
                  label="Light"
                  onChange={(e) => {
                    setactivityLevel(e.target.value);
                    dispatch(updateActivityLevel(e.target.value));
                  }}
                  checked={activityLevel === "Light"}
                />
                <Radio
                  id="radio5"
                  value="Moderate"
                  label="Moderate"
                  onChange={(e) => {
                    setactivityLevel(e.target.value);
                    dispatch(updateActivityLevel(e.target.value));
                  }}
                  checked={activityLevel === "Moderate"}
                />
                <Radio
                  id="radio6"
                  value="Strenuous"
                  label="Strenuous"
                  onChange={(e) => {
                    setactivityLevel(e.target.value);
                    dispatch(updateActivityLevel(e.target.value));
                  }}
                  checked={activityLevel === "Strenuous"}
                />
                <Radio
                  id="radio7"
                  value="Extreme"
                  label="Extreme"
                  onChange={(e) => {
                    setactivityLevel(e.target.value);
                    dispatch(updateActivityLevel(e.target.value));
                  }}
                  checked={activityLevel === "Extreme"}
                />
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
                <Radio
                  id="radio8"
                  value="Beginner"
                  label="Beginner"
                  onChange={(e) => {
                    setskillLevel(e.target.value);
                    dispatch(updateSkillLevel(e.target.value));
                  }}
                  checked={skillLevel === "Beginner"}
                />
                <Radio
                  id="radio9"
                  value="Intermediate"
                  label="Intermediate"
                  onChange={(e) => {
                    setskillLevel(e.target.value);
                    dispatch(updateSkillLevel(e.target.value));
                  }}
                  checked={skillLevel === "Intermediate"}
                />
                <Radio
                  id="radio10"
                  value="Advanced"
                  label="Advanced"
                  onChange={(e) => {
                    setskillLevel(e.target.value);
                    dispatch(updateSkillLevel(e.target.value));
                  }}
                  checked={skillLevel === "Advanced"}
                />
                <Radio
                  id="radio11"
                  value="Expert"
                  label="Expert"
                  onChange={(e) => {
                    setskillLevel(e.target.value);
                    dispatch(updateSkillLevel(e.target.value));
                  }}
                  checked={skillLevel === "Expert"}
                />
              </RadioGroup>
            </div>
          </div>
          <span className="btn-position">
            <Link to="/localisation">
              <Button
                onClick={() => {
                  handleContinueClick();
                  handleContinue();
                }}
              />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Requirements;
