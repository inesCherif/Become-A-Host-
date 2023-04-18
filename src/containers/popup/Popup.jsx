import React, { useState } from "react";
import "./Popup.css";
import Tags from "../../components/tags/Tags";
import Animal from "../../assets/icons/animal.png";
import Art from "../../assets/icons/art.png";
import Culture from "../../assets/icons/culture.png";
import Food from "../../assets/icons/food.png";
import Drink from "../../assets/icons/drink.png";
import Entertainment from "../../assets/icons/entertainment.png";
import History from "../../assets/icons/history.png";
import Nature from "../../assets/icons/nature.png";
import Shop from "../../assets/icons/shop.png";
import Sport from "../../assets/icons/sport.png";
import Wellness from "../../assets/icons/wellness.png";
import renderTagComponent from "../../hoc/renderTagComponent";


const Popup = ({ popupRef, handlePopup }) => {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleCloseModal = () => {
    setSelectedTag(null);
    handlePopup();
  };

  return (
    <div className="popup" ref={popupRef}>
      <div onClick={handlePopup} className="overlay"></div>
      <div className="popup-content">
        <h2 className="popup-title">All themes</h2>

        <div className="popup-grid">
          <Tags
            src={Animal}
            theme="Animals"
            onClick={() => setSelectedTag("Animals")}
          />
          <Tags
            src={Art}
            theme="Art &amp; Design"
            onClick={() => setSelectedTag("Art")}
          />
          <Tags
            src={Culture}
            theme="Culture &amp; Society"
            onClick={() => setSelectedTag("Culture")}
          />
          <Tags
            src={Food}
            theme="Food"
            onClick={() => setSelectedTag("Food")}
          />
          <Tags
            src={Drink}
            theme="Drink"
            onClick={() => setSelectedTag("Drink")}
          />
          <Tags
            src={Entertainment}
            theme="Entertainment"
            onClick={() => setSelectedTag("Entertainment")}
          />
          <Tags
            src={History}
            theme="History &amp; Literatures"
            onClick={() => setSelectedTag("History")}
          />
          <Tags
            src={Nature}
            theme="Nature &amp; Out door"
            onClick={() => setSelectedTag("Nature")}
          />
          <Tags
            src={Shop}
            theme="Signtsees, shopping &amp; Transportation"
            onClick={() => setSelectedTag("Signtsees")}
          />
          <Tags
            src={Sport}
            theme="Sports"
            onClick={() => setSelectedTag("Sports")}
          />
          <Tags
            src={Wellness}
            theme="Wellness"
            onClick={() => setSelectedTag("Wellness")}
          />
        </div>
      </div>
      {renderTagComponent(selectedTag, handleCloseModal)}
    </div>
  );
};

export default Popup;
