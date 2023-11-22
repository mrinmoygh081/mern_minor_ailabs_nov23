import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Illustrator from "../components/Illustrator";

const Home = () => {
  return (
    <Fragment>
      <Header />
      {/* <!---SLIDER AND IMAGE--> */}
      <div className="slider1">
        <div className="img-slide1">
          <img src={require("../asset/webpage-front.jpg")} />
          <img src={require("../asset/webpage-front.jpg")} />
          <img src={require("../asset/webpage-front.jpg")} />
          <img src={require("../asset/webpage-front.jpg")} />
          <img src={require("../asset/webpage-front.jpg")} />
        </div>
        <div className="img-slide1">
          <img src={require("../asset/webpage-front.jpg")} />
          <img src={require("../asset/webpage-front.jpg")} />
          <img src={require("../asset/webpage-front.jpg")} />
          <img src={require("../asset/webpage-front.jpg")} />
          <img src={require("../asset/webpage-front.jpg")} />
        </div>
      </div>
      {/* <!---Get started section--> */}
      <div>
        <div className="wrapper">
          <h2 className="title-color">
            <strong>Illustrative Insights</strong>
            <br />
            artist profile explorer
          </h2>
          <a href="#" className="button-1">
            Get Started
          </a>
        </div>
      </div>

      {/* <!---ILLUSTRATOR--> */}
      <div className="Artist-center">
        <div className="Artist">
          <h1>Illustrator</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>

      {/* <!---1st card section--> */}

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={require("../asset/wolp1.jpg")} alt="" />
              <h2>WOLP</h2>
              <p>
                Wolp is an artist who creates detailed and high-quality
                illustrations.
              </p>
              <a href="#">Click here</a>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="asset/oriday-tap6.png" alt="" />
              <h2>Oridays</h2>
              <p>
                An illustrator and YouTuber who creates illustrations and
                teaches tutorials
              </p>
              <a href="#">Click here</a>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="asset/wenjun-lin-tab.jpg" alt="" />
              <h2>Wenjun</h2>
              <p>
                Creates digital art, Illustrator Wenjun Lin/JUNC @wenjunlin6
              </p>
              <a href="#">Click here</a>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="asset/berry-tab.jpg" alt="" />
              <h2>B.Verrine</h2>
              <p>
                Japanese Illustrator BerryVerrineです！, briging you wide range
                of digital art
              </p>
              <a href="#">Click here</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!---VIEW MORE--> */}
      <div className="view-more">
        <div>
          <a href="#" className="button-1">
            View More
          </a>
        </div>
      </div>
      {/* <!---TREADING NOW--> */}
      <div className="Artist-center">
        <div className="Artist">
          <h1>Trending Now</h1>
        </div>
      </div>
      {/* <!---Trending card section--> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="asset/anime-tab.png" alt="" />
              <div className="card-text">
                <h2>
                  <a href="#">Anime</a>
                </h2>
                <a href="#">Expore</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="asset/ai-art2.png" alt="" />
              <div className="card-text">
                <h2>
                  <a href="#">AI Art</a>
                </h2>
                <a href="#">Expore</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="asset/fantasy-tab2.png" alt="" />
              <div className="card-text">
                <h2>
                  <a href="#">Fantasy</a>
                </h2>
                <a href="#">Expore</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="asset/gaming.png" alt="" />
              <div className="card-text">
                <h2>
                  <a href="#">Gaming</a>
                </h2>
                <a href="#">Expore</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="asset/steampunk-tab1.png" alt="" />
              <div className="card-text">
                <h2>
                  <a href="#">Steampunk</a>
                </h2>
                <a href="#">Expore</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="asset/protrait-tab1.png" alt="" />
              <div className="card-text">
                <h2>
                  <a href="#">Portraits</a>
                </h2>
                <a href="#">Expore</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="asset/realist-tab1.png" alt="" />
              <div className="card-text">
                <h2>
                  <a href="#">Realistic</a>
                </h2>
                <a href="#">Expore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="view-more">
        <div>
          <a href="#" className="button-1">
            View More
          </a>
        </div>
      </div>
      {/* <!---Futured illustrator--> */}
      <div className="Artist-center">
        <div className="Artist">
          <h1>Futured Illustrator</h1>
          <a href="#"></a>
        </div>
      </div>
      {/* <!---Futured Section--> */}
      <div className="container2">
        <div className="row2">
          <Illustrator
            heading={"Hrishita Dey"}
            para={"She is very talkative person."}
          />
          <Illustrator
            heading={"Parthib Sanyel"}
            para={"Cool Developer, Hot, Good person"}
          />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
