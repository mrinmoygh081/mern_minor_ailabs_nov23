import React from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  return (
    <>
      <Header />

      <div className="image_container">
        <img className="image" src="neom-AC3T7tvwPrY-unsplash.jpg" alt="" />
      </div>

      <div className="services">
        <h1 className="heading">Services</h1>
        <p className="para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nemo
          animi, aperiam ex similique quam odit fugit libero nihil? Aut
          architecto, optio ipsum, tempora nihil voluptatum obcaecati
          perferendis modi reprehenderit cumque illum ex.
        </p>
      </div>

      <section className="service_card">
        <div className="container">
          <div className="row">
            <ServiceCard
              heading="Digital Marketing"
              desc="Marketting digitally"
            />
            <ServiceCard heading="MERN" desc="React-Node" />
            <ServiceCard
              heading="Digital Marketing"
              desc="Marketting digitally"
            />
            <ServiceCard heading="MERN" desc="React-Node" />
          </div>
        </div>
      </section>

      <div className="gallery">
        <h1 className="heading">Gallery</h1>
        <br />
      </div>

      <div className="container2">
        <img className="image2" src="neom-AC3T7tvwPrY-unsplash.jpg" alt="" />
        <img className="image2" src="neom-AC3T7tvwPrY-unsplash.jpg" alt="" />
        <img className="image2" src="neom-AC3T7tvwPrY-unsplash.jpg" alt="" />
        <img className="image2" src="neom-AC3T7tvwPrY-unsplash.jpg" alt="" />
        <img className="image2" src="neom-AC3T7tvwPrY-unsplash.jpg" alt="" />
        <img className="image2" src="neom-AC3T7tvwPrY-unsplash.jpg" alt="" />
        <img className="image2" src="neom-AC3T7tvwPrY-unsplash.jpg" alt="" />
        <img className="image2" src="neom-AC3T7tvwPrY-unsplash.jpg" alt="" />
      </div>

      <section id="contact-us">
        <h1 className="heading">Contact Us</h1>
        <div className="form-container">
          <form>
            <label htmlFor="fname">First name: </label>
            <input type="text" id="fname" required />
            <label htmlFor="lname">Last name: </label>
            <input type="text" id="lname" required />
            <label htmlFor="about">Message:</label> <textarea></textarea>
            <div className="btns">
              <input type="submit" />
              <input type="reset" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
