import React from "react";
import ArrowTag from "../components/arrow-tags/ArrowTag";
import SimpleTag from "../components/simple-tags/SimpleTag";
import Modal from "../containers/modal/Modal";
import SecondModal from "../containers/second-modal/food-modals/SecondModal";
import MarketTour from "../containers/second-modal/food-modals/MarketTour";
import SocialDining from "../containers/second-modal/food-modals/SocialDining";
import FoodTasting from "../containers/second-modal/food-modals/FoodTasting";
import DrinkCoffee from "../containers/second-modal/drink-modals/DrinkCofee";
import DrinkTea from "../containers/second-modal/drink-modals/DrinkTea";
import DrinkFood from "../containers/second-modal/drink-modals/DrinkFood";
import Ecology from "../containers/second-modal/nature-modal/Ecology";
import Sky from "../containers/second-modal/nature-modal/Sky";
import Agriculture from "../containers/second-modal/nature-modal/Agriculture";
import Adrenaline from "../containers/second-modal/sport-modals/Adrenaline";
import Outdoor from "../containers/second-modal/sport-modals/Outdoor";
import Water from "../containers/second-modal/sport-modals/Water";

const renderTagComponent = (selectedTag, handleCloseModal) => {
  switch (selectedTag) {
    case "Animals":
      return (
        <Modal
          handleCloseModal={handleCloseModal}
          title="What’s exactly in Animals?"
          tags={[
            { component: SimpleTag, props: { text: "Bee keeping" } },
            { component: SimpleTag, props: { text: "Bird Watching" } },
            { component: SimpleTag, props: { text: "Farm animals" } },
            { component: SimpleTag, props: { text: "Pet walking" } },
            { component: SimpleTag, props: { text: "Horseback riding class" } },
            {
              component: SimpleTag,
              props: { text: "Horse/Camel riding tour" },
            },
            { component: SimpleTag, props: { text: "Marine life" } },
            { component: SimpleTag, props: { text: "Wild life" } },
            {
              component: SimpleTag,
              props: { text: "Other animal experience" },
            },
          ]}
        />
      );

    case "Art":
      return (
        <Modal
          handleCloseModal={handleCloseModal}
          title="What’s exactly in Art & Design ?"
          tags={[
            { component: SimpleTag, props: { text: "Architecture tour" } },
            { component: SimpleTag, props: { text: "Art class" } },
            { component: SimpleTag, props: { text: "Art Museum tour" } },
            { component: SimpleTag, props: { text: "Craft Class" } },
            { component: SimpleTag, props: { text: "Fashion Class" } },
            { component: SimpleTag, props: { text: "Photography class tour" } },
            { component: SimpleTag, props: { text: "Photoshoot" } },
            { component: SimpleTag, props: { text: "Street art tour" } },
            { component: SimpleTag, props: { text: "Other art experience" } },
          ]}
        />
      );
    case "Culture":
      return (
        <Modal
          handleCloseModal={handleCloseModal}
          title="What’s exactly in Cultures & society?"
          tags={[
            { component: SimpleTag, props: { text: "Cultural dancing" } },
            { component: SimpleTag, props: { text: "Cultural festival" } },
            { component: SimpleTag, props: { text: "Cultural tour" } },
            { component: SimpleTag, props: { text: "Language class" } },
            { component: SimpleTag, props: { text: "Science tour" } },
            { component: SimpleTag, props: { text: "Social case tour" } },
            { component: SimpleTag, props: { text: "Volunteering" } },
            {
              component: SimpleTag,
              props: { text: "Other Culture experience " },
            },
          ]}
        />
      );
    case "Food":
      return (
        <Modal
          handleCloseModal={handleCloseModal}
          title="What’s exactly in Food?"
          tags={[
            {
              component: ArrowTag,
              props: {
                text: "Cooking and food making",
                SecondModal: SecondModal,
              },
            },
            {
              component: ArrowTag,
              props: { text: "Food and market tour", SecondModal: MarketTour },
            },
            {
              component: ArrowTag,
              props: { text: "Social dining", SecondModal: SocialDining },
            },
            {
              component: ArrowTag,
              props: { text: "Food tasting", SecondModal: FoodTasting },
            },
          ]}
        />
      );
    case "Drink":
      return (
        <Modal
          handleCloseModal={handleCloseModal}
          title="What’s exactly in Food?"
          tags={[
            { component: ArrowTag, props: { text: "Coffee", SecondModal:DrinkCoffee } },
            { component: ArrowTag, props: { text: "Tea", SecondModal:DrinkTea } },
            { component: ArrowTag, props: { text: "Wine & Beer", SecondModal:DrinkFood } },
          ]}
        />
      );
    case "Entertainment":
      return (
        <Modal
          handleCloseModal={handleCloseModal}
          title="What’s exactly in Entertaiment?"
          tags={[
            { component: SimpleTag, props: { text: "Theater workshop" } },
            { component: SimpleTag, props: { text: "Music workshop" } },
            { component: SimpleTag, props: { text: "Dance class" } },
          ]}
        />
      );
    case "History":
      return (
        <Modal
          handleCloseModal={handleCloseModal}
          title="What’s exactly in History and literatures?"
          tags={[
            { component: SimpleTag, props: { text: "Museum tour" } },
            { component: SimpleTag, props: { text: "History tour" } },
            { component: SimpleTag, props: { text: "Literature tour" } },
            { component: SimpleTag, props: { text: "Myth & Storytelling" } },
            { component: SimpleTag, props: { text: "Writing class" } },
          ]}
        />
      );
    case "Nature":
      return (
        <Modal
          handleCloseModal={handleCloseModal}
          title="What’s exactly in Natures and outdoors ?"
          tags={[
            { component: SimpleTag, props: { text: "Camping" } },
            { component: SimpleTag, props: { text: "Hiking" } },
            { component: SimpleTag, props: { text: "National park tour" } },
            { component: ArrowTag, props: { text: "Nature and ecology tour", SecondModal:Ecology } },
            { component: ArrowTag, props: { text: "Night Sky ", SecondModal:Sky } },
            { component: ArrowTag, props: { text: "Plants and Agriculture", SecondModal:Agriculture } },
          ]}
        />
      );
    case "Signtsees":
      return (
        <Modal
          handleCloseModal={handleCloseModal}
          title="What’s exactly in Sightsees, Shopping and transportation ?"
          tags={[
            { component: SimpleTag, props: { text: "Boat tour" } },
            { component: SimpleTag, props: { text: "Car ride" } },
            { component: SimpleTag, props: { text: "Cycling tour" } },
            { component: SimpleTag, props: { text: "Helicopter tour" } },
            { component: SimpleTag, props: { text: "Hot air balloon tour" } },
            { component: SimpleTag, props: { text: "Scooter tour " } },
            { component: SimpleTag, props: { text: "Shopping tour" } },
            { component: SimpleTag, props: { text: "Sightseeing tour" } },
            {
              component: SimpleTag,
              props: { text: "Other animal experience" },
            },
          ]}
        />
      );
    case "Sports":
      return (
        <Modal
          handleCloseModal={handleCloseModal}
          title="What’s exactly in Sports?"
          tags={[
            { component: ArrowTag, props: { text: "Adrenaline sport",SecondModal:Adrenaline } },
            { component: SimpleTag, props: { text: "Fitness" } },
            { component: SimpleTag, props: { text: "Mountain sport" } },
            { component: ArrowTag, props: { text: "Outdoor sport",SecondModal:Outdoor } },
            { component: ArrowTag, props: { text: "Water Sports",SecondModal:Water } },
          ]}
        />
      );
    case "Wellness":
      return (
        <Modal
          handleCloseModal={handleCloseModal}
          title="What’s exactly in Welness?"
          tags={[
            { component: SimpleTag, props: { text: "Astrology" } },
            { component: SimpleTag, props: { text: "Beauty care" } },
            { component: SimpleTag, props: { text: "Holistic health" } },
            { component: SimpleTag, props: { text: "Spa" } },
            { component: SimpleTag, props: { text: "Yoga" } },
          ]}
        />
      );
    default:
      return null;
  }
};

export default renderTagComponent;
