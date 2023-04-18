import React from "react";
import ProvideModal from "../containers/provide-modal/ProvideModal";

const renderProvidePopup = (selectedTag, handleModalClose) => {
  switch (selectedTag) {
    case "Food":
      return (
        <ProvideModal
          title="Select the food you will be providing"
          options={[
            "Snack",
            "Appetizers",
            "Breakfast",
            "Lunch",
            "Dinner",
            "Dessert",
            "Tasting menu",
          ]}
          onClose={handleModalClose}
        />
      );

    case "Drink":
      return (
        <ProvideModal
          title="Select the Drinks you will be providing"
          options={[
            "Aperitif",
            "Cocktail",
            "Coffee",
            "Juice",
            "Soft drinks",
            "Tea",
            "Water",
            "Wine",
          ]}
          onClose={handleModalClose}
        />
      );
    case "Tickets":
      return (
        <ProvideModal
          title="Select the tickets you will be providing"
          options={["Event tickets", "Show tickets", "Entrance fee"]}
          onClose={handleModalClose}
        />
      );

    case "Transportation":
      return (
        <ProvideModal
          title="Select the transportation you will be providing"
          options={[
            "Bus",
            "Train",
            "Car",
            "Bicycle",
            "Motorcycle",
            "Camel ride",
            "Horse ride",
            "Boat",
            "Ferry",
            "Hot air balloon",
            "Plane",
          ]}
          onClose={handleModalClose}
        />
      );
    case "Equipments":
      return (
        <ProvideModal
          title="Select the equipment you will be providing"
          options={[
            "Sports equipment",
            "Outdoor gear",
            "Safety equipments",
            "Creative supplies",
            "Camera",
            "Photography ",
          ]}
          onClose={handleModalClose}
        />
      );

    default:
      return null;
  }
};

export default renderProvidePopup;
