import React, { useRef } from "react";
import movieImg1 from "../../assets/img1.png";
import movieImg2 from "../../assets/img2.png";
import movieImg3 from "../../assets/img3.png";
import movieImg4 from "../../assets/img4.png";
import movieImg5 from "../../assets/img5.png";
import AgeLimit from "./AgeLimit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Popular = () => {
  const swiperRef = useRef();

  return (
    <div>
      <div className="title">
        <h4>POPULAR THIS WEEK</h4>
        <div className="arrows">
          <button
            className="arrow"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button
            className="arrow"
            onClick={() => swiperRef.current.slideNext()}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      <div className="movies">
        <div className="movie-list">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={5}
            spaceBetween={30}
          >
            <SwiperSlide>
              <img
                src={movieImg1}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={movieImg2}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={movieImg3}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={movieImg4}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={movieImg5}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={movieImg1}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={movieImg2}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={movieImg3}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={movieImg4}
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={movieImg5}
                alt="img"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <AgeLimit age="16+"></AgeLimit>
      </div>
    </div>
  );
};

export default Popular;
