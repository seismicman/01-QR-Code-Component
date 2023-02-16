import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="qr">
        <img src="./src/assets/images/image-qr-code.png" alt="" />
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
