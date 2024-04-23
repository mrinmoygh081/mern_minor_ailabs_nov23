import React from "react";

const StudentInfo = ({ name, age }) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <p>
            Name: <span>{name}</span>
          </p>
          <p>
            age: <span>{age}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default StudentInfo;
