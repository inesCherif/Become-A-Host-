import React, { useState } from "react";
import "./Locations.css";
import Navbar from "../../../../layouts/navbar/Navbar";
import { Link } from "react-router-dom";
import Button from "../../../../components/button/Button";
import useActiveNav from "../../../../hooks/useActiveNav";
import Tips from "../../../../components/tips/Tips";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ThemeSelector from "../../../../components/theme/ThemeSelector";
import LocationModal from "../../../../components/location-popup/LocationModal";


const Locations = () => {
  const { selectedNavItem, handleContinueClick } = useActiveNav(
    "locations",
    "photos"
  );

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const selectCountry = (val) => {
    setCountry(val);
    setShowCountryText(false); // Hide the <span> when a country is selected
  };

  const selectRegion = (val) => {
    setRegion(val);
  };

  const [showCountryText, setShowCountryText] = useState(true);

  return (
    <>
      <Navbar selectedNavItem={selectedNavItem} selectedNavStep="step3" />
      <div className="desktop-content">
        <div className="content-position">
          <h1 className="content-title">Location</h1>
          <Tips
            title="Tips"
            text="Don’t leave it up to your guests to pick a location, most travelers don’t know your city well. They’re looking to you, the host, to identify the places that make an area special."
          />

          <div className="idea-content">
            <p>
              <span className="idea-title">Where should guests meet you?</span>
              <br />
              <span className="idea-subtitle">
                Make sure the meeting place is easy to find. The exact
                <br />
                address won’t be shared until the guest’s reservation is
                confirmed.
              </span>
            </p>

            <div className="location-form">
              <form action="">
                <table>
                  <tr>
                    <td>
                      <label htmlFor="Coutry" className="custom-label">
                        Coutry / region
                      </label>
                      <br />
                      {showCountryText && ( // Render the <span> only if showCountryText is true
                        <span className="custom-input-country-text">
                          Type your country name
                        </span>
                      )}
                      <CountryDropdown
                        defaultOptionLabel=""
                        value={country}
                        onChange={selectCountry}
                        className="custom-selector"
                        onClick={() => setShowCountryText(false)}
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label htmlFor="City" className="custom-label">
                        City
                      </label>
                      <br />

                      <RegionDropdown
                        blankOptionLabel=""
                        defaultOptionLabel="Now select a region, pal."
                        country={country}
                        value={region}
                        onChange={selectRegion}
                        className="custom-selector"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label htmlFor="street" className="custom-label">
                        Street address
                      </label>
                      <br />
                      <input
                        type="text"
                        className="custom-input"
                        name="street"
                        placeholder="House name/number + street/road"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label htmlFor="state" className="custom-label">
                        state
                      </label>
                      <br />
                      <input
                        type="text"
                        className="custom-input"
                        name="state"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label htmlFor="ZIP" className="custom-label">
                        ZIP code
                      </label>
                      <br />
                      <input type="text" className="custom-input" name="ZIP" />
                    </td>
                  </tr>
                </table>
              </form>
            </div>

            <br />
            <br />

            <p>
              <span className="idea-title">Where will everything take place?</span>
              <br />
              <span className="idea-subtitle">
              Choose up to three locations for your experience.
              </span>
            </p>
            <ThemeSelector text="&nbsp;&nbsp;&nbsp;&nbsp;Select a location" PopupComponent={LocationModal} />




          </div>
          <span className="btn-position">
            <Link to="/photos">
              <Button onClick={handleContinueClick} />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Locations;
