import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={require("../assets/img1.png")} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require("../assets/img2.jpeg")} alt="" />
        </SwiperSlide>
      </Swiper>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora
      voluptatibus in ab blanditiis eius modi, nemo nobis esse praesentium
      doloribus! Aperiam quae, est nam ullam esse itaque. Veritatis, impedit.
    </div>
  );
};

export default Home;
