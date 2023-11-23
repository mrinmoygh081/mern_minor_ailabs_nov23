import React from "react";

const ServiceCard = ({ heading, para }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{heading}</h5>
            <p className="card-text">{para}</p>
            <a href="#" className="btn btn-primary">
              More Info
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
