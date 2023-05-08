import React, { useEffect, useState } from "react";
import "./Access.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tip from "../../../../components/detailed-tips/Tip";
import RadioGroup from "../../../../containers/radio-group/RadioGroup";
import Radio from "../../../../components/radio/Radio";
import { useDispatch, useSelector } from "react-redux";
import accessDataToFirestore from "../../../../redux/actions/step2-actions/accessDataToFirestore";
import { auth, db } from "../../../../firebase";
import { updateAccessActivity } from "../../../../redux/actions/step2-actions/accessActions";

const Access = () => {
  const [guests_ability_to_do_activity, setGuests_ability_to_do_activity] =
    useState();
  const dispatch = useDispatch();

  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "access",
    "Connection"
  );
  const access = useSelector((state) => state.access);
  const handleContinue = () => {
    accessDataToFirestore(dispatch, access);
  };

  // fetch data from firebase and display it in Radio
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().access) {
        const {
          guests_ability_to_do_activity: fetchedGuests_ability_to_do_activity,
        } = doc.data().access;
        if (fetchedGuests_ability_to_do_activity !== undefined) {
          setGuests_ability_to_do_activity(
            fetchedGuests_ability_to_do_activity
          );
          dispatch(updateAccessActivity(fetchedGuests_ability_to_do_activity));
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
              value="It’s very unique—guests couldn’t do it without me"
              label="It’s very unique—guests couldn’t do it without me"
              onChange={(e) => {
                setGuests_ability_to_do_activity(e.target.value);
                dispatch(updateAccessActivity(e.target.value));
              }}
              checked={
                guests_ability_to_do_activity ===
                "It’s very unique—guests couldn’t do it without me"
              }
            />
            <Radio
              id="radio2"
              value="Guests could do this on their own, but I bring a unique perspective to the activity"
              label="Guests could do this on their own, but I bring a unique perspective to the activity"
              onChange={(e) => {
                setGuests_ability_to_do_activity(e.target.value);
                dispatch(updateAccessActivity(e.target.value));
              }}
              checked={
                guests_ability_to_do_activity ===
                "Guests could do this on their own, but I bring a unique perspective to the activity"
              }
            />
            <Radio
              id="radio3"
              value="Guests could do this on their own without me"
              label="Guests could do this on their own without me"
              onChange={(e) => {
                setGuests_ability_to_do_activity(e.target.value);
                dispatch(updateAccessActivity(e.target.value));
              }}
              checked={
                guests_ability_to_do_activity ===
                "Guests could do this on their own without me"
              }
            />
          </RadioGroup>

          <span className="btn-position">
            <Link to="/connection">
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

export default Access;
