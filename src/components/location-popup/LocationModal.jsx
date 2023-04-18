import React, { useState } from "react";
import "./LocationModal.css";
import RadioLocation from "./RadioLocation";

const LocationModal = ({ popupRef, handlePopup }) => {
  const worship = ["Cemetery", "Church", "Mosque", "Synagogue", "Temple"];
  const attraction = [
    "Fountain",
    "Historic site",
    "Lighthouse",
    "Memorial site",
    "Monument",
    "Plaza",
    "Tourist information center",
  ];
  const Government = [
    "Animal rescue center",
    "City",
    "City hall",
    "Hospital",
    "Library",
    "Neighborhood",
    "Palace",
    "School",
    "University",
  ];
  const Sports = [
    "Bath house",
    "Beauty venue",
    "Gym",
    "Massage studio",
    "Nail salon",
    "Sauna",
    "Sports venue",
    "Wellness venue",
    "Workout studio",
  ];
  const Retail = [
    "Bookstores",
    "Boutique",
    "Clothing store",
    "Cosmetics shop",
    "Costume shop",
    "Flea market",
    "Flower shop",
    "Market",
    "Shopping mall",
    "Shops",
  ];
  const Food = [
    "Bakery",
    "Beer shop",
    "Brewery",
    "Butcher shop",
    "Cafe",
    "Cheese shop",
    "Cooking school",
    "Delicatessen",
    "Distillery",
    "Farmers market",
    "Fish market",
    "Food court",
    "Food stand",
    "Food truck",
    "Grocery stores",
    "Ice cream shop",
    "Restaurants",
    "Winery",
  ];
  const Entertainment = [
    "Amusement park",
    "Aquarium",
    "Arcade",
    "Art gallery",
    "Arts venue",
    "Bar",
    "Beer garden",
    "Casino",
    "Club",
    "Event venue",
    "Film studio",
    "Jazz club",
    "Karaoke",
    "Movie theater",
    "Museums",
    "Music venue",
    "Observatory",
    "Pub",
    "Stadium",
    "Theater venue",
    "Wine bar",
    "Zoo",
  ];
  const nature = [
    "Bay",
    "Beach",
    "Campground",
    "Cave",
    "Countryside",
    "Desert",
    "Farm",
    "Field",
    "Forest",
    "Garden",
    "Harbor",
    "Hot Spring",
    "Island",
    "Jungle",
    "Lake",
    "Mountain",
    "Ocean",
    "Parks",
    "Pond",
    "Pool",
    "Rainforest",
    "River",
    "Ski area",
    "Tidepools",
    "Trail",
    "Tundra",
    "Vineyard",
    "Volcano",
    "Waterfall",
    "Waterfront",
  ];



  const [selected, setSelected] = useState(false); // state variable to track selection

  const handleRadioSelect = () => {
    setSelected(true); // set selection to true when a radio button is selected
  };
  const handleDone = () => {
    handlePopup();
  };

  return (
    <div className="location-popup" ref={popupRef}>
      <div className="popup-location-overlay"  onClick={handlePopup}></div>
      <div className="popup-location-content">
        <h2 className="popup-location-title">Select a location</h2>
        <hr />
        <div className="popup-location-radio">
          <RadioLocation
            text="Place of worship"
            id="radio"
            name="worship"
            value={worship}
            onSelect={handleRadioSelect} 
          />
          <RadioLocation
            text="Tourist attraction"
            id="radio2"
            name="attraction"
            value={attraction}
            onSelect={handleRadioSelect} 
          />
          <RadioLocation
            text="Government or education venue"
            id="radio3"
            name="Government"
            value={Government}
            onSelect={handleRadioSelect} 
          />
          <RadioLocation
            text="Sports and wellness venue"
            id="radio4"
            name="Sports"
            value={Sports}
            onSelect={handleRadioSelect} 
          />
          <RadioLocation
            text="Retail venue"
            id="radio5"
            name="Retail"
            value={Retail}
            onSelect={handleRadioSelect} 
          />
          <RadioLocation
            text="Food venue"
            id="radio6"
            name="Food"
            value={Food}
            onSelect={handleRadioSelect} 
          />
          <RadioLocation
            text="Entertainment venue"
            id="radio7"
            name="Entertainment"
            value={Entertainment}
            onSelect={handleRadioSelect} 
          />
          <RadioLocation
            text="In nature"
            id="radio8"
            name="nature"
            value={nature}
            onSelect={handleRadioSelect} 
          />
        </div>
        <button className="close-modal" onClick={handlePopup}>
          <span class="close">&times;</span>
        </button>
        <hr />
        <button className="done-button" onClick={handleDone} disabled={!selected}>Done</button>
      </div>
    </div>
  );
};

export default LocationModal;
