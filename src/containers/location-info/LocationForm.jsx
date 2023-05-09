import React, { useEffect, useState } from "react";
import "./LocationForm.css";
import InputField from "../../components/input-field/InputField";
import { useDispatch } from "react-redux";
import { db, auth } from "../../firebase";
import { updateUserCountry, updateUserCity,updateYearsOfLiving,updateUserAdress} from "../../redux/actions/step1-actions/locationActions"

const LocationForm = () => {


  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [years_of_living, setYears_of_living] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();



  // fetch data from firebase and display it in select
  useEffect(() => {
    const fetchData = async () => {
      const userId = auth.currentUser.uid;
      const applicationRef = db.collection("applications").doc(userId);
      const doc = await applicationRef.get();
      if (doc.exists && doc.data().location) {
        const {
          country: fetchedcountry,
          city: fetchedcity,
          years_of_living: fetchedyears,
          address: fetchedaddress,
        } = doc.data().location;
        if (fetchedcountry !== undefined) {
          setCountry(fetchedcountry);
          dispatch(updateUserCountry(fetchedcountry));
        }
        if (fetchedcity !== undefined) {
          setCity(fetchedcity);
          dispatch(updateUserCity(fetchedcity));
        }
        if (fetchedyears !== undefined) {
          setYears_of_living(fetchedyears);
          dispatch(updateYearsOfLiving(fetchedyears));
        }

        if (fetchedaddress !== undefined) {
          setAddress(fetchedaddress);
          dispatch(updateUserAdress(fetchedaddress));
        }
      }
    };
    fetchData();
  }, []);































  // const [state, setState] = useState({
  //   country: "",
  //   city: "",
  //   years_of_living: "",
  //   address: ""
  // });

  // const dispatch = useDispatch();
  // const { country, city, years_of_living, adress } = state;
  // const handleInputChange = (event) => {
  //   let { name, value } = event.target;
  //   setState({ ...state, [name]: value }); 
  //   dispatch(updateLocationInfo(country, city, years_of_living, adress));
  // };

  // // fetch data from firebase and display it in inputs
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const userId = auth.currentUser.uid;
  //     const applicationRef = db.collection("applications").doc(userId);
  //     const doc = await applicationRef.get();
  //     if (doc.exists && doc.data().location) {
  //       setState(doc.data().location);
  //     }
  //   };
  //   fetchData();
  // }, []);
  

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
                onChange={(e) => {
                  setCountry(e.target.value);
                  dispatch(updateUserCountry(e.target.value));
                }}
              />
            </td>
            <td>
              <InputField
                id="country-info"
                name="city"
                htmlFor="city"
                labelText="Your city name"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  dispatch(updateUserCity(e.target.value));
                }}
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
                onChange={(e) => {
                  setYears_of_living(e.target.value);
                  dispatch(updateYearsOfLiving(e.target.value));
                }}
              />
            </td>
            <td>
              <InputField
                id="country-info"
                name="adress"
                htmlFor="adress"
                labelText="Adress"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  dispatch(updateUserAdress(e.target.value));
                }}
              />
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default LocationForm;
