import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  console.log("this is data:", data);

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Eg: name@example.com"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="form-control"
              onChange={(e) => setData({ ...data, message: e.target.value })}
            ></textarea>
          </div>
          <button className="btn btn-success">SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
