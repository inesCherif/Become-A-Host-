import React, { useEffect, useState } from "react";
import "./Provision.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tips from "../../../../components/tips/Tips";
import ThemeSelector from "../../../../components/theme/ThemeSelector";
import ProvidePopup from "../../../../containers/provide-popup/ProvidePopup";
import Warning from "../../../../components/warning/Warning";
import RadioGroup from "../../../../containers/radio-group/RadioGroup";
import Radio from "../../../../components/radio/Radio";
import { useDispatch, useSelector } from "react-redux";
import provisionDataToFirestore from "../../../../redux/actions/step3-actions/provisonDataToFirestore";
import { auth, db } from "../../../../firebase";
import {
  updateActivityTransport,
  updatecarProblems,
  updatehostProvision,
} from "../../../../redux/actions/step3-actions/provisionActions";

const Provision = () => {
  const [hostProvision, sethostProvision] = useState("I am providing things");
  const [activityTransport, setActivityTransport] = useState();
  const [carProblems, setcarProblems] = useState();
  const dispatch = useDispatch();

  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "provide",
    "requirements"
  );
  const provision = useSelector((state) => state.provision);
  const handleContinue = () => {
    provisionDataToFirestore(dispatch, provision);
  };

  // fetch data from firebase and display it in Radio
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().provision) {
        // extract the activityTransport and carProblems fields from the provision object
        const {
          activityTransport: fetchedactivityTransport,
          carProblems: fetchedcarProblems,
          hostProvision: fetchedHostProvision,
        } = doc.data().provision;
        if (fetchedactivityTransport !== undefined) {
          setActivityTransport(fetchedactivityTransport);
          dispatch(updateActivityTransport(fetchedactivityTransport));
        }
        if (fetchedcarProblems !== undefined) {
          setcarProblems(fetchedcarProblems);
          dispatch(updatecarProblems(fetchedcarProblems));
        }
        if (fetchedHostProvision !== undefined) {
          sethostProvision(fetchedHostProvision);
          dispatch(updatehostProvision(fetchedHostProvision));
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
          <h1 className="content-title">What I’ll provide</h1>
          <Tips
            title="Tips"
            text=" Try to provide special equipment that is usually hard for guests to get on their own 
            Keep food or drink dietary restrictions, and physical limitations for guests in mind "
          />

          <div className="idea-content">
            <p>
              <span className="idea-title">
                Add details about what you’ll provide
              </span>
              <br />
              <span className="idea-subtitle">
                You can provide food and drink, special equipment, a ticket to a
                <br /> concert, or anything else special to make your guests
                <br /> comfortable.
              </span>
            </p>
            <ThemeSelector
              text="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add Item"
              PopupComponent={ProvidePopup}
            />
            <br />
            <ThemeSelector
              text="&nbsp;&nbsp;&nbsp;&nbsp;More Items ?"
              PopupComponent={ProvidePopup}
            />
            <br />
            <p>
              <span className="idea-title">
                Not providing anything for your guests?
              </span>
            </p>
            <div className="future-provision">
              <label className="provision-checkbox">
                {/*
                
                can't uncheck the box
                <input
                  type="checkbox"
                  value="I am not providing anything"
                  onChange={(e) => {
                    sethostProvision(e.target.value);
                    dispatch(updatehostProvision(e.target.value));
                  }}
                  checked={
                    hostProvision ===
                    "I am not providing anything"
                  }
                /> */}
                <input
                  type="checkbox"
                  value="I am not providing anything"
                  onChange={(e) => {
                    if (e.target.checked) {
                      sethostProvision(e.target.value);
                      dispatch(updatehostProvision(e.target.value));
                    } else {
                      sethostProvision("I am providing things");
                      dispatch(updatehostProvision("I am providing things"));
                    }
                  }}
                  checked={hostProvision === "I am not providing anything"}
                />
                I am not providing anything
              </label>
              <br />

              <Warning text="Keep in mind, if you're using an independent business or other third party to provide transportation or equipment for your experience, you should include the name of the business and any other information that might be helpful to the guest. This only applies to transportation and equipment providers - you don't need to list things like food or drink providers (but you can if you want to!)" />
              <br />
              <br />
              <div className="provision-radio-group">
                <RadioGroup
                  name="activity"
                  label="Does your experience involve any one of the following?"
                >
                  <Radio
                    id="radio1"
                    value="Driving (Car, ATV, Motorized Scooter, etc.)"
                    label="Driving (Car, ATV, Motorized Scooter, etc.)"
                    onChange={(e) => {
                      setActivityTransport(e.target.value);
                      dispatch(updateActivityTransport(e.target.value));
                    }}
                    checked={
                      activityTransport ===
                      "Driving (Car, ATV, Motorized Scooter, etc.)"
                    }
                  />
                  <Radio
                    id="radio2"
                    value="Boating (Motorized boat, sailboat, waterski, parasailing, towed tubing etc.)"
                    label="Boating (Motorized boat, sailboat, waterski, parasailing, towed tubing etc.)"
                    onChange={(e) => {
                      setActivityTransport(e.target.value);
                      dispatch(updateActivityTransport(e.target.value));
                    }}
                    checked={
                      activityTransport ===
                      "Boating (Motorized boat, sailboat, waterski, parasailing, towed tubing etc.)"
                    }
                  />
                  <Radio
                    id="radio3"
                    value="Biking"
                    label="Biking"
                    onChange={(e) => {
                      setActivityTransport(e.target.value);
                      dispatch(updateActivityTransport(e.target.value));
                    }}
                    checked={activityTransport === "Biking"}
                  />
                  <Radio
                    id="radio4"
                    value="Flying (Plane, Helicopter, or Hot Air Balloon)"
                    label="Flying (Plane, Helicopter, or Hot Air Balloon)"
                    onChange={(e) => {
                      setActivityTransport(e.target.value);
                      dispatch(updateActivityTransport(e.target.value));
                    }}
                    checked={
                      activityTransport ===
                      "Flying (Plane, Helicopter, or Hot Air Balloon)"
                    }
                  />
                  <Radio
                    id="radio5"
                    value="My experience does not include any of these activities"
                    label="My experience does not include any of these activities"
                    onChange={(e) => {
                      setActivityTransport(e.target.value);
                      dispatch(updateActivityTransport(e.target.value));
                    }}
                    checked={
                      activityTransport ===
                      "My experience does not include any of these activities"
                    }
                  />
                </RadioGroup>
              </div>
              <br />
              <Warning text="You should not personally drive guests unless your license and automobile insurance meets local legal requirements. Learn more about what’s covered by Tabaani’s Experience Protection Insurance." />

              <div className="provision-radio-group">
                <RadioGroup
                  name="activity2"
                  label="Who will be operating the vehicle when it's broken down or experiencing any other issues?"
                >
                  <Radio
                    id="radio6"
                    value="I will be personally operating the vehicle"
                    label="I will be personally operating the vehicle"
                    onChange={(e) => {
                      setcarProblems(e.target.value);
                      dispatch(updatecarProblems(e.target.value));
                    }}
                    checked={
                      carProblems ===
                      "I will be personally operating the vehicle"
                    }
                  />
                  <Radio
                    id="radio7"
                    value="My team and I will provide a vehicle for the guests to operate"
                    label="My team and I will provide a vehicle for the guests to operate"
                    onChange={(e) => {
                      setcarProblems(e.target.value);
                      dispatch(updatecarProblems(e.target.value));
                    }}
                    checked={
                      carProblems ===
                      "My team and I will provide a vehicle for the guests to operate"
                    }
                  />
                  <Radio
                    id="radio8"
                    value="I will be transporting guests via public transportation or a third-party licensed operator"
                    label="I will be transporting guests via public transportation or a third-party licensed operator"
                    onChange={(e) => {
                      setcarProblems(e.target.value);
                      dispatch(updatecarProblems(e.target.value));
                    }}
                    checked={
                      carProblems ===
                      "I will be transporting guests via public transportation or a third-party licensed operator"
                    }
                  />
                </RadioGroup>
              </div>
            </div>
          </div>
          <span className="btn-position">
            <Link to="/requirements">
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

export default Provision;
