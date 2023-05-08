import React, { useEffect, useState } from "react";
import "./Connection.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tip from "../../../../components/detailed-tips/Tip";
import RadioGroup from "../../../../containers/radio-group/RadioGroup";
import Radio from "../../../../components/radio/Radio";
import { useDispatch, useSelector } from "react-redux";
import connectionDataToFirestore from "../../../../redux/actions/step2-actions/connectionDataToFirestore";
import { auth, db } from "../../../../firebase";
import { updateConnectionActivity } from "../../../../redux/actions/step2-actions/connectionAction";

const Connection = () => {
  const [communication_style, SetCommunication_style] = useState();
  const dispatch = useDispatch();

  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "Connection",
    "theme"
  );
  const connection = useSelector((state) => state.connection);
  const handleContinue = () => {
    connectionDataToFirestore(dispatch, connection);
  };

  // fetch data from firebase and display it in Radio
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().connection) {
        const { communication_style: fetchedCommunication_style } =
          doc.data().connection;
        if (fetchedCommunication_style !== undefined) {
          SetCommunication_style(fetchedCommunication_style);
          dispatch(updateConnectionActivity(fetchedCommunication_style));
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
              value="I love bringing people together and creating new friendships"
              label="I love bringing people together and creating new friendships"
              onChange={(e) => {
                SetCommunication_style(e.target.value);
                dispatch(updateConnectionActivity(e.target.value));
              }}
              checked={
                communication_style ===
                "I love bringing people together and creating new friendships"
              }
            />
            <Radio
              id="radio2"
              value="I enjoy sharing my personal experience with others"
              label="I enjoy sharing my personal experience with others"
              onChange={(e) => {
                SetCommunication_style(e.target.value);
                dispatch(updateConnectionActivity(e.target.value));
              }}
              checked={
                communication_style ===
                "I enjoy sharing my personal experience with others"
              }
            />
            <Radio
              id="radio3"
              value="I prefer not to get too personal with guests"
              label="I prefer not to get too personal with guests"
              onChange={(e) => {
                SetCommunication_style(e.target.value);
                dispatch(updateConnectionActivity(e.target.value));
              }}
              checked={
                communication_style ===
                "I prefer not to get too personal with guests"
              }
            />
          </RadioGroup>

          <span className="btn-position">
            <Link to="/theme">
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

export default Connection;
