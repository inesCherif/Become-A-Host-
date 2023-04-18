import React, { useState } from "react";
import "./ArrowTag.css";
import { IoIosArrowForward } from "react-icons/io";
import SecondModal from "../../containers/second-modal/food-modals/SecondModal";

const ArrowTag = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="arrow-tag" onClick={handleClick}>
        <span className="theme-label text">{props.text}</span>
        <IoIosArrowForward className="icon" />
      </div>
      {showModal && <props.SecondModal handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default ArrowTag;
