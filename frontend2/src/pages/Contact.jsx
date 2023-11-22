import React, { useState } from "react";
import Header from "../components/Header";

const Contact = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  console.log("Value of form: " + JSON.stringify(form));

  return (
    <>
      <Header />
      <div className="contact_form">
        <label>Name</label>
        <br />
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br />
        <br />
        <button>Submit</button>
      </div>
    </>
  );
};

export default Contact;
