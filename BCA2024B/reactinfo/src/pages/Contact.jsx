import React, { useState } from "react";
import { inputOnWheelPrevent } from "../utils/smallFuns";

const Contact = () => {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    message: "",
  });

  console.log(user);
  return (
    <div>
      <div className="container">
        <div className="card p-3">
          <form action="">
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="form-control"
                onWheel={inputOnWheelPrevent}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="form-control"
                onChange={(e) => setUser({ ...user, message: e.target.value })}
              ></textarea>
            </div>
            <div className="text-center">
              <button className="btn btn-success" type="submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
