import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <form action="" className="card">
              <div className="mb-3">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">PHONE</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter email number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message">MESSAGE</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  className="form-control"
                ></textarea>
              </div>
              <button className="btn btn-primary">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
