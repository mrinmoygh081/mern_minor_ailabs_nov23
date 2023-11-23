import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [val, setVal] = useState(null);

  const getData = () => {
    let requestOptions = {
      method: "GET",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setVal(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(val);

  return (
    <>
      <Header />
      <div>
        {val &&
          val.map((item, i) => (
            <div key={i} style={{ padding: "10px" }}>
              <h1>
                <b>{item.title}</b>
              </h1>
              <p>{item.body}</p>
            </div>
          ))}
      </div>
      <section className="contact" id="contact">
        <div className="contact-row">
          <div className="contact-head">
            <h2>Contact Me!</h2>
          </div>
          <div className="contact-sec">
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="floatingInput">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="form-floating mb-5">
                <select
                  onChange={(e) =>
                    setData({ ...data, subject: e.target.value })
                  }
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option>Subject</option>
                  <option value="Collaboration1">Collaboration</option>
                  <option value="Team up">Team up</option>
                  <option value="Help">Help</option>
                </select>
                <label htmlFor="floatingSelect">Choose from below</label>
              </div>

              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  value={data.message}
                ></textarea>
                <label htmlFor="floatingTextarea2">Message</label>
              </div>
              <button type="submit" className="btn mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
