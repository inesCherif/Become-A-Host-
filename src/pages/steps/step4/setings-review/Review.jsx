import React from "react";
import "./Review.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import useActiveNav from "../../../../hooks/useActiveNav";
import Submit from "../../../../components/submit/Submit";
import RadioGroup from "../../../../containers/radio-group/RadioGroup";
import Radio from "../../../../components/radio/Radio";
import Box from "../../../../components/box/Box";

const Review = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "review",
    "review"
  );

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step4" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Just a few last things...</h1>

          <div>
            <h1 className="add-photo-title">
              Just a few more questions before you submit
            </h1>
            <span className="contact-details">
              Tabaani will review the version you’re about to submit, so make
              sure you’re happy with it. You can still <br /> go back and
              fine-tune your descriptions at any time.
            </span>
            <h1 className="add-photo-title">
              Are you complying with local tourism laws and location
              requirements?
            </h1>
            <span className="contact-details">
              Many places have laws regulating tours, tour guides, and other
              services provided to tourists. You may <br /> need a license or
              permit to host the experience, and you may also need formal
              permission from the <br /> location or community where you are
              hosting.
            </span>
            <p className="contact-details">
              What’s covered by these laws varies. In some places the law could
              apply only to visits to monuments <br /> and points of interest,
              elsewhere it could apply to any guided activity. The location
              where you are hosting <br /> the experience may also have rules or
              cultural norms applicable to the experience. <br /> It’s your
              responsibility to learn about and comply with any local laws that
              affect the experience.
            </p>
            <div className="radio-position">
              <RadioGroup
                name="experience"
                label="Which of the following applies to you and the experience?
            Select one option."
              >
                <Radio
                  id="radio1"
                  value="unique"
                  label="I have all necessary licenses, permits, or permissions that apply to tour guiding or tourist services."
                />
                <Radio
                  id="radio2"
                  value="perspective"
                  label="No license, permit or permission applying to tour guiding or tourist services is required for me to operate the experience."
                />
                <Radio
                  id="radio3"
                  value="without-me"
                  label="I do not have the necessary licenses, permits, or permissions required to conduct the experience."
                />
              </RadioGroup>
            </div>
            <br />
            <p className="contact-details">
              I understand that Tabaani reserves the right to request proof of
              compliance (including proof of any <br /> applicable permits,
              licenses, or permissions), or proof that the experience is not
              regulated by the types <br /> of laws or requirements described
              above. Hosts and experiences may be removed from the platform if{" "}
              <br /> they are unable to provide such proof if requested.
            </p>
            <h1 className="add-photo-title">
              Review our policies before you submit to Tabaani
            </h1>
            <p className="contact-details">
              <span className="policies-title">Minimum guests</span> <br />
              Experiences on Tabaani have a 1 guest minimum. That means if one
              person books your experience, <br /> you’ll still be expected to
              host them. <br />
              <br />
              <span className="policies-title">Service fees</span> <br />
              Tabaani takes 10% of each booking. Tabaani handles payment
              processing, provides 24-hour customer <br /> service, and
              maintains liability insurance for most experiences. <br />
              <br />
              <span className="policies-title">Exclusivity</span> <br />
              Each experience date you schedule through Tabaani must only be
              attended by Tabaani guests. Guests <br /> who book and pay through
              other platforms must be hosted at separate times.
            </p>
            <h1 className="add-photo-title">
              By submitting, I confirm the following is true:
            </h1>
            <div className="final-part">
              <div>
                <div className="box-container">
                <Box />
                <div>
                  <p className="body">
                    My experience complies with local laws. <br /> about other
                    laws (like business licensing) that may apply.
                  </p>
                </div>
              </div>
              <div className="box-container">
                <Box />
                <div>
                  <p className="body">
                    I confirm that my descriptions and photos are my own,
                    <br /> and accurately reflect my experience.
                  </p>
                </div>
              </div>
              <div className="box-container">
                <Box />
                <div>
                  <p className="body">
                    I agree to the{" "}
                    <span className="draging-photos-link">
                      Tabaani Experiences Terms of Service
                    </span>{" "}
                    and <br />
                    <span className="draging-photos-link">
                      Guest Refund Policy.
                    </span>
                  </p>
                </div>
              </div>
              </div>
              
              <div>
                <span className="">
                <Link to="/review">
                  <Submit onClick={handleContinueClick} />
                </Link>
              </span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
