import React from "react";
import StudentInfo from "../components/StudentInfo";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <StudentInfo name="Shreya" age="09" />
          <StudentInfo name="Akansha" age="90" />
          <StudentInfo name="Subha" age="26" />
          <StudentInfo name="Subha" age="26" />
          <StudentInfo name="Subha" age="26" />
          <StudentInfo name="Subha" age="26" />
        </div>
      </div>
    </>
  );
};

export default Home;
