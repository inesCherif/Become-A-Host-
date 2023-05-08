import React, { useEffect, useState } from "react";
import "./Size.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePrivateGroupSize,
  updatePublicGroupSize,
} from "../../../../redux/actions/step4-actions/groupSizeActions";
import groupSizeDataToToFirestore from "../../../../redux/actions/step4-actions/groupeSizeDataToFirestore";
import { auth, db } from "../../../../firebase";

const Size = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "groupsize",
    "availability"
  );
  const groupSize = useSelector((state) => state.groupSize);
  const handleContinue = () => {
    groupSizeDataToToFirestore(dispatch, groupSize);
  };

  const dispatch = useDispatch();
  const [publicGroupSize, setPublicGroupSize] = useState("");
  const [privateGroupSize, setPrivateGroupSize] = useState("");

  const selectedPublicGroupValue = () => {
    const Selected = document.getElementById("publicGroub").value;
    setPublicGroupSize(Selected);
    dispatch(updatePublicGroupSize(Selected));
  };

  const selectedPrivateGroupValue = () => {
    const Selected = document.getElementById("privateGroup").value;
    setPrivateGroupSize(Selected);
    dispatch(updatePrivateGroupSize(Selected));
  };

  // fetch data from firebase and display it in select
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().groupSize) {
        const {
          publicGroupSize: fetchedPublicGroupSize,
          privateGroupSize: fetchedPrivateGroupSize,
        } = doc.data().groupSize;
        if (fetchedPublicGroupSize !== undefined) {
          setPublicGroupSize(fetchedPublicGroupSize);
          dispatch(updatePublicGroupSize(fetchedPublicGroupSize));
        }
        if (fetchedPrivateGroupSize !== undefined) {
          setPrivateGroupSize(fetchedPrivateGroupSize);
          dispatch(updatePrivateGroupSize(fetchedPrivateGroupSize));
        }
      }
    };
    fetchData();
  }, []);

 
  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step4" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Maximum group size</h1>
          <div className="tips">
            <p className="type16">
              <br />
              Think about what group size is best for your experience. Is it
              more interactive with fewer people, or more fun with a larger
              group? Remember: If only one person books, you'll still be
              expected to host. <br />
              You can host a public group for up to 10 guests. Guests who book
              may or may not know each other.
            </p>
          </div>
          <div className="contacts-content">
            <h1 className="add-photo-title">Public groups</h1>
            <div className="select-container">
              <label htmlFor="duration" className="select-label selected-label">
                Maximum Group size
              </label>
              <br />
              <select
                name="publicGroub"
                id="publicGroub"
                className="select select-container-size"
                onChange={selectedPublicGroupValue}
              >
                <option value="4" selected>
                  4
                </option>
                <option value="5" selected={publicGroupSize === "5"}>
                  5
                </option>
                <option value="6" selected={publicGroupSize === "6"}>6</option>
                <option value="7" selected={publicGroupSize === "7"}>7</option>
                <option value="8" selected={publicGroupSize === "8"}>8</option>
                <option value="9" selected={publicGroupSize === "9"}>9</option>
                <option value="10" selected={publicGroupSize === "10"}>10</option>
              </select>
              <p className="contact-details">
                We suggest 8 people based on <br /> your activity. You can
                always <br /> change this later.
              </p>
            </div>

            <h1 className="add-photo-title">Private Groups</h1>
            <div className="select-container">
              <label htmlFor="duration" className="select-label selected-label">
                Maximum Group size
              </label>
              <br />
              <select
                name="privateGroup"
                id="privateGroup"
                className="select select-container-size"
                onChange={selectedPrivateGroupValue}
              >
                <option value="4" selected>
                  4
                </option>
                <option value="5" selected={privateGroupSize === "5"}>5</option>
                <option value="6" selected={privateGroupSize === "6"}>6</option>
                <option value="7" selected={privateGroupSize === "7"}>7</option>
                <option value="8" selected={privateGroupSize === "8"}>8</option>
                <option value="9" selected={privateGroupSize === "9"}>9</option>
                <option value="10" selected={privateGroupSize === "10"}>10</option>
              </select>
              <p className="contact-details">
                For in-person experiences, you can <br /> host a private group
                for up to 25 <br /> guests.
              </p>
            </div>
          </div>

          <span className="btn-position">
            <Link to="/availability">
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

export default Size;
