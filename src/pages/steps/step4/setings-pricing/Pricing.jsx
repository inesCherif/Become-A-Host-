import React from "react";
import "./Pricing.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import CommentIcon from "../../../../assets/images/comment icon.png";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const Pricing = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "pricing",
    "bookings"
  );
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "#000000;",
      boxShadow: theme.shadows[2],
      fontSize: 16,
      fontWeight: 300,
      fontFamily: "Roboto",
      padding:20,
      textAlign: "center",

    },
  }));
  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step4" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Maximum group size</h1>
          <div className="tips">
            <p className="type16">
              <br />
              <br />
              How much you charge is entirely up to you. Enter the price you
              want each guest to pay and discover what you can earn.
              <br />
              <br />
            </p>
          </div>
          <div className="contacts-pricing-content">
            <div className="usd-container">
              <div>
                <h1 className="add-photo-title">Individual rate</h1>
                <span className="contact-details">Each guest pays</span>
                <div className="usd-card">
                  <p className="body">
                    <span className="usd-word">USD</span>&nbsp; 20
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="contact-details">
                    Your estimated <br /> earnings&nbsp;&nbsp;
                    <LightTooltip
                      title="Your earnings minus Tabaani 10% service fee. Actual earnings may be further reduced by applicable taxes. See Transaction History for details about actual earnings."
                      placement="bottom"
                    >
                      <img src={CommentIcon} alt="" className="comment-icon" />
                    </LightTooltip>
                  </p>
                </div>

                <div className="usd-card usd-card-disabled">
                  <p className="body usd-word">USD&nbsp; 20</p>
                </div>
              </div>
            </div>

            <br /><br /><br />
            <div>
                <h1 className="add-photo-title">Per instance: Private groups</h1>
                <span className="contact-details">If no other seats are taken, guests can book an instance <br /> for a private group.</span>
                <div className="usd-card">
                  <p className="body">
                    <span className="usd-word">USD</span>&nbsp; 20
                  </p>
                </div>
                <p className="contact-details">Guests who book for a private group will pay <br /> the total per person pricing if that’s higher <br /> than your minimum price. </p>
              </div>
          </div>
          <span className="btn-position">
            <Link to="/bookings">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Pricing;
