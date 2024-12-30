import React from "react";
import "./Campus.css";
import { images } from "../../assets/images";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallary">
        <img src={images.gallery_1} alt="" />
        <img src={images.gallery_2} alt="" />
        <img src={images.gallery_3} alt="" />
        <img src={images.gallery_4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <img src={images.arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
