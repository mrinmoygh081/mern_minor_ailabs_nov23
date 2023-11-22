import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!---Footer section--> */}
      <div className="footer">
        <div className="container-footer">
          <div className="row-footer">
            <div className="col-footer">
              <h4>LOGO</h4>
              <div className="social-link">
                <a href="#">
                  <i>
                    <img src="asset/icon/icons8-facebook-24.png" alt="#" />
                  </i>
                </a>
                <a href="#">
                  <i>
                    <img src="asset/icon/icons8-twitterx-24.png" alt="#" />
                  </i>
                </a>
                <a href="#">
                  <i>
                    <img src="asset/icon/icons8-instagram-24.png" alt="#" />
                  </i>
                </a>
              </div>
            </div>
            <div className="col-footer">
              <h4>EXPLORE</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
            </div>
            <div className="col-footer">
              <h4>Help</h4>
              <ul>
                <li>
                  <a href="#">Terms of Services</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Copyright Policy</a>
                </li>
                <li>
                  <a href="#">Help and FAQ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
