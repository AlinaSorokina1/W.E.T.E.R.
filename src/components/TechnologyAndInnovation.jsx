import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
 

import styles from '../styles/TechnologyAndInnovation.module.scss';

import 'swiper/css';

import FirstImg from '../assets/images/ImagesTechAndIn/First.svg';
import SecondImg from '../assets/images/ImagesTechAndIn/Second.svg';
import ThirdImg from '../assets/images/ImagesTechAndIn/Third.svg';

function TechnologyAndInnovation (){
  return (
    <div className={styles.TechnologyAndInnovation}>
      <h2>Технология и инновации</h2>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={1}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideContent}>
            <img src={FirstImg} alt='' />
            <div className={styles.separator}></div>
            <p>Концентрация воздушного потока</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideContent}>
            <img src={SecondImg} alt='' />
            <div className={styles.separator}></div>
            <p>Аэродинамические щиты</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideContent}>
            <img src={ThirdImg} alt='' />
            <div className={styles.separator}></div>
            <p>Независимые модули на статичной оси</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TechnologyAndInnovation;
