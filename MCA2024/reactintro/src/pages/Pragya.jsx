import React from "react";

const Pragya = () => {
  return (
    <>
      <a name="top"></a>
      {/* <!--Start Navigation--> */}
      <header class="header">
        <h1 id="logo">HOMEFINDER</h1>
        <nav class="toplinks">
          <a href="#" class="nlinks">
            Home
          </a>
          <a href="#" class="nlinks">
            Buy
          </a>
          <a href="#" class="nlinks">
            Rent
          </a>
          <a href="#" class="nlinks">
            Commercial
          </a>
          <a href="#" class="nlinks">
            PG
          </a>
          <a href="#" class="nlinks">
            Plot/Land
          </a>
          <a href="#" class="nlinks">
            Contact Us
          </a>
        </nav>
        <div class="topicons">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-regular fa-user"></i>
        </div>
      </header>
      {/* <!--End Navigation--> */}

      {/* <!--Start main section--> */}
      {/* <img src={require("../path/img.jpg")} /> */}
      <main class="main">
        <section class="top">
          <img
            src="https://assets.architecturaldesigns.com/plan_assets/325004048/large/69746AM_Render_1569961385.jpg?1569961385"
            alt="frontYardHouse"
            class="banner"
          />
          <div class="search">
            <div class="searchpart1">
              <label for="residential">All Residential</label>
              <select name="residential" id="residential">
                <option value="reeses">--Select--</option>
                <option value="flat">Residential ApartMent</option>
                <option value="dave">Residential Land</option>
                <option value="pumpernickel">Independent House/Villa</option>
                <option value="reeses">Office Spaces</option>
                <option value="reeses">PG for Girls</option>
                <option value="reeses">PG for Boys</option>
              </select>
            </div>
            <div class="searchpart2">
              <input type="text" placeholder="San Jose, CA" />
            </div>
            <div class="searchpart3">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </section>
        <h2 id="divider">Top Picks</h2>
        <section class="shop">
          <div class="box">
            <img
              src="https://images.unsplash.com/photo-1584738766473-61c083514bf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWVzJTIwZm9yJTIwc2FsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="home"
            />
            <h3 class="location">Tracy</h3>
            <p class="details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              dolor molestiae dignissimos cum nostrum autem mollitia eum in.
            </p>
            <h5 class="price">$100k - $250k</h5>
            <button class="click">Know More</button>
          </div>
          <div class="box">
            <img
              src="https://images.unsplash.com/photo-1623005329287-0848374575d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXMlMjBiYWNreWFyZHxlbnwwfHwwfHx8MA%3D%3D"
              alt="home"
            />
            <h3 class="location">Tracy</h3>
            <p class="details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              dolor molestiae dignissimos cum nostrum autem mollitia eum in.
            </p>
            <h5 class="price">$100k - $250k</h5>
            <button class="click">Know More</button>
          </div>
          <div class="box">
            <img
              src="https://images.unsplash.com/photo-1698758626354-ab29968c616b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWVzJTIwYmFja3lhcmR8ZW58MHx8MHx8fDA%3D"
              alt="home"
            />
            <h3 class="location">Tracy</h3>
            <p class="details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              dolor molestiae dignissimos cum nostrum autem mollitia eum in.
            </p>
            <h5 class="price">$100k - $250k</h5>
            <button class="click">Know More</button>
          </div>
          <div class="box">
            <img
              src="https://images.unsplash.com/photo-1472224371017-08207f84aaae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWVzJTIwYmFja3lhcmR8ZW58MHx8MHx8fDA%3D"
              alt="home"
            />
            <h3 class="location">Tracy</h3>
            <p class="details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              dolor molestiae dignissimos cum nostrum autem mollitia eum in.
            </p>
            <h5 class="price">$100k - $250k</h5>
            <button class="click">Know More</button>
          </div>
        </section>
        <section class="shop">
          <div class="box">
            <img
              src="https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXMlMjBiYWNreWFyZHxlbnwwfHwwfHx8MA%3D%3D"
              alt="home"
            />
            <h3 class="location">Tracy</h3>
            <p class="details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              dolor molestiae dignissimos cum nostrum autem mollitia eum in.
            </p>
            <h5 class="price">$100k - $250k</h5>
            <button class="click">Know More</button>
          </div>
          <div class="box">
            <img
              src="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWVzJTIwYmFja3lhcmR8ZW58MHx8MHx8fDA%3D"
              alt="home"
            />
            <h3 class="location">Tracy</h3>
            <p class="details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              dolor molestiae dignissimos cum nostrum autem mollitia eum in.
            </p>
            <h5 class="price">$100k - $250k</h5>
            <button class="click">Know More</button>
          </div>
          <div class="box">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMGhvdXNlJTIwY29sb255fGVufDB8fDB8fHww"
              alt="home"
            />
            <h3 class="location">Tracy</h3>
            <p class="details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              dolor molestiae dignissimos cum nostrum autem mollitia eum in.
            </p>
            <h5 class="price">$100k - $250k</h5>
            <button class="click">Know More</button>
          </div>
          <div class="box">
            <img
              src="https://assets.architecturaldesigns.com/plan_assets/325004048/large/69746AM_Render_1569961385.jpg?1569961385"
              alt="home"
            />
            <h3 class="location">Tracy</h3>
            <p class="details">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est,
              dolor molestiae dignissimos cum nostrum autem mollitia eum in.
            </p>
            <h5 class="price">$100k - $250k</h5>
            <button class="click">Know More</button>
          </div>
        </section>
      </main>
      {/* <!--End main section--> */}

      {/* <!--Start Footer--> */}
      <footer class="footer">
        <div class="f1">
          <div class="line1">
            <a href="#" class="nlinks">
              Locations
            </a>
            <a href="#" class="nlinks">
              Hot Zones
            </a>
            <a href="#" class="nlinks">
              Sold
            </a>
          </div>
          <div class="line2">
            <a href="#" class="nlinks">
              Buy
            </a>
            <a href="#" class="nlinks">
              Rent
            </a>
            <a href="#" class="nlinks">
              Commercial
            </a>
            <a href="#" class="nlinks">
              PG
            </a>
          </div>
          <div class="line3">
            <div class="sub">
              <input type="text" placeholder="Subscribe" />
              <button class="subtn">Enter</button>
            </div>
          </div>
        </div>
        <div class="f2">
          <div class="topicons">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
          <p class="copy"> &copy; findhome 2024</p>
          <a href="#top">
            <i class="fa-solid fa-circle-arrow-up"></i>
          </a>
        </div>
      </footer>
      {/* <!--End Footer--> */}
    </>
  );
};

export default Pragya;
