import React, { useState } from "react";
import Header from "../components/Header";

const Contact = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  console.log("Value of data: " + JSON.stringify(data));

  return (
    <>
      <Header />
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <br />
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <br />
        <br />
        <button>Submit</button>
      </div>
    </>
  );
};

export default Contact;
