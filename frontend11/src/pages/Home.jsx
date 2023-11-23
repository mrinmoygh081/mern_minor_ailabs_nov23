import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  return (
    <>
      <Header />
      {/* <!-- about section --> */}
      <section id="About">
        <div className="container1">
          <div className="home">
            <div className="col">
              <div className="about">
                <h1>Arya Basu</h1>
                <span>
                  <p>
                    I'm currently pursuing Computer Applications final year. I
                    have worked on various open source projects as well as some
                    private repositories. my expertise are python, java, html,
                    javascript, css.
                  </p>
                </span>
              </div>
            </div>
            <div className="col">
              <img src={require("../imgs/hero.png")} alt="sample pic" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- carousel --> */}
      <section>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/images/2387218.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/12893.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="/images/wallpaperflare.com_wallpaper1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* <!-- services --> */}
      <section className="services">
        <div className="container">
          <div className="service-row">
            <div className="ser-head">
              <h2>Services</h2>
            </div>
            <div className="card-row">
              <ServiceCard heading="Digital Marketing" para="Nothing..." />
              <ServiceCard heading="IT Solutions" para="Nothing2..." />
              <ServiceCard heading="SMM" para="Nothing3..." />
              <ServiceCard heading="Ethical Hacking" para="Nothing4..." />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- contact section --> */}
      <section className="contact" id="contact">
        <div className="contact-row">
          <div className="contact-head">
            <h2>Contact Me!</h2>
          </div>
          <div className="contact-sec">
            <form>
              <div className="mb-3">
                <label className="form-label" for="floatingInput">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="form-floating mb-5">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>Subject</option>
                  <option value="1">Collaboration</option>
                  <option value="2">Team up</option>
                  <option value="3">Help</option>
                </select>
                <label for="floatingSelect">Choose from below</label>
              </div>

              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px", backgroundColor: "red" }}
                ></textarea>
                <label for="floatingTextarea2">Message</label>
              </div>
              <button type="submit" className="btn mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* <!-- footer --> */}
      <Footer />
    </>
  );
};

export default Home;
