import React, { useEffect, useState } from "react";
import "./LocationForm.css";
import InputField from "../../components/input-field/InputField";
import { useDispatch } from "react-redux";
import { updateLocationInfo } from "../../redux/actions/step1-actions/locationActions";
import { db, auth } from "../../firebase";

const LocationForm = () => {
  const [state, setState] = useState({
    country: "",
    city: "",
    years_of_living: "",
    address: ""
  });

  const dispatch = useDispatch();
  const { country, city, years_of_living, adress } = state;
  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setState({ ...state, [name]: value }); 
    dispatch(updateLocationInfo(country, city, years_of_living, adress));
  };

  // fetch data from firebase and display it in inputs
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().location) {
        setState(doc.data().location);
      }
    };
    fetchData();
  }, []);
  

  return (
    <div className="profile-info-inputs">
      <form action="">
        <table>
          <tr>
            <td>
              <InputField
                id="country-info"
                name="country"
                htmlFor="country"
                labelText="Your country"
                value={country}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <InputField
                id="country-info"
                name="city"
                htmlFor="city"
                labelText="Your city name"
                value={city}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <InputField
                id="country-info"
                name="years_of_living"
                htmlFor="years_of_living"
                labelText="How many years have you been living in it ?"
                value={years_of_living}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <InputField
                id="country-info"
                name="adress"
                htmlFor="adress"
                labelText="Adress"
                value={adress}
                onChange={handleInputChange}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default LocationForm;
