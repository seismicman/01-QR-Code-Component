import React from "react";
import barcode from "../assets/images/image-qr-code.png";

const Card = () => {
  return (
    <div className="card">
      <div className="qr">
        <img src={barcode} alt="" />
        <div className="text">
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
