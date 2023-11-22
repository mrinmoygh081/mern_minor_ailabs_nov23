import React from "react";

const Illustrator = ({ heading, para }) => {
  return (
    <div className="col2">
      <div className="card2">
        <div className="card2-content">
          <div className="text2-content">
            <h2>{heading}</h2>
            <p>{para}</p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustrator;
