import React, { useEffect, useState } from "react";
import "./Expertise.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tip from "../../../../components/detailed-tips/Tip";
import RadioGroup from "../../../../containers/radio-group/RadioGroup";
import Radio from "../../../../components/radio/Radio";
import { useDispatch, useSelector } from "react-redux";
import {
  updateGuideTour,
  updateHostedActivity,
} from "../../../../redux/actions/step2-actions/expertiseActions";
import expertiseDataToFirestore from "../../../../redux/actions/step2-actions/expertiseDataToFirestore";
import { auth, db } from "../../../../firebase";

const Expertise = () => {
  const [hostedActivity, setHostedActivity] = useState();
  const [guideTour, setGuideTour] = useState();
  const dispatch = useDispatch();

  // const test = useSelector(state =>state.expertise);
  // console.log(test)

  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "expertise",
    "access"
  );
  const expertise = useSelector((state) => state.expertise);
  const handleContinue = () => {
    expertiseDataToFirestore(dispatch, expertise);
  };

  // fetch data from firebase and display it in Radio
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().expertise) {
        // extract the hostedActivity and guideTour fields from the expertise object
        const {
          hostedActivity: fetchedHostedActivity,
          guideTour: fetchedGuideTour,
        } = doc.data().expertise;
        if (fetchedHostedActivity !== undefined) {
          setHostedActivity(fetchedHostedActivity);
          dispatch(updateHostedActivity(fetchedHostedActivity));
        }
        if (fetchedGuideTour !== undefined) {
          setGuideTour(fetchedGuideTour);
          dispatch(updateGuideTour(fetchedGuideTour));
        }
      }
    };
    fetchData();
  }, []);

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
              value="Yes, I’ve hosted or taught this activity professionally"
              label="Yes, I’ve hosted or taught this activity professionally"
              onChange={(e) => {
                setHostedActivity(e.target.value);
                dispatch(updateHostedActivity(e.target.value));
              }}
              checked={
                hostedActivity ===
                "Yes, I’ve hosted or taught this activity professionally"
              }
            />
            <Radio
              id="radio2"
              value="Yes, I’ve hosted this activity informally for friends or family"
              label="Yes, I’ve hosted this activity informally for friends or family"
              onChange={(e) => {
                setHostedActivity(e.target.value);
                dispatch(updateHostedActivity(e.target.value));
              }}
              checked={
                hostedActivity ===
                "Yes, I’ve hosted this activity informally for friends or family"
              }
            />
            <Radio
              id="radio3"
              value="No, I’ve never hosted this activity before"
              label="No, I’ve never hosted this activity before"
              onChange={(e) => {
                setHostedActivity(e.target.value);
                dispatch(updateHostedActivity(e.target.value));
              }}
              checked={
                hostedActivity === "No, I’ve never hosted this activity before"
              }
            />
          </RadioGroup>
          <RadioGroup name="guide" label="Do you have a Tour guide License?">
            <Radio
              id="radio4"
              value="Yes, I’m a full time Tour guide"
              label="Yes, I’m a full time Tour guide"
              onChange={(e) => {
                setGuideTour(e.target.value);
                dispatch(updateGuideTour(e.target.value));
              }}
              checked={guideTour === "Yes, I’m a full time Tour guide"}
            />
            <Radio
              id="radio5"
              value="No, I’ve no license but i’m a freelancer"
              label="No, I’ve no license but i’m a freelancer"
              onChange={(e) => {
                setGuideTour(e.target.value);
                dispatch(updateGuideTour(e.target.value));
              }}
              checked={guideTour === "No, I’ve no license but i’m a freelancer"}
            />
            <Radio
              id="radio6"
              value="No, I’ve another full time job"
              label="No, I’ve another full time job"
              onChange={(e) => {
                setGuideTour(e.target.value);
                dispatch(updateGuideTour(e.target.value));
              }}
              checked={guideTour === "No, I’ve another full time job"}
            />
          </RadioGroup>

          <span className="btn-position">
            <Link to="/access">
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

export default Expertise;
