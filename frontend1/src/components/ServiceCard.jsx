import React from "react";

const ServiceCard = ({ heading, desc }) => {
  return (
    <>
      <div className="col">
        <div className="card" style={{ backgroundColor: "transparent" }}>
          <img
            className="bell"
            src={require("../imgs/img.jpeg")}
            alt="placeholder"
            style={{ width: "90px" }}
          />
          <h4>{heading}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
