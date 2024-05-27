'use client';

import React from 'react';
import styles from './Skills.module.scss';
import Image from 'next/image';
import htmlIcon from '../../assets/img/icons/html5.svg';
import css3Icon from '../../assets/img/icons/css3.svg';
import lessIcon from '../../assets/img/icons/less.svg';
import sassIcon from '../../assets/img/icons/sass.svg';
import jsIcon from '../../assets/img/icons/js.svg';
import tsIcon from '../../assets/img/icons/ts.svg';
import reactIcon from '../../assets/img/icons/react.svg';
import nextIcon from '../../assets/img/icons/next.svg';
import gitIcon from '../../assets/img/icons/git.svg';
import githubIcon from '../../assets/img/icons/github.svg';
import gitlabIcon from '../../assets/img/icons/gitlab.svg';
import bitbucketIcon from '../../assets/img/icons/bitbucket.svg';
import magentoIcon from '../../assets/img/icons/magento.svg';
import jiraIcon from '../../assets/img/icons/jira.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';


const SkillsLogos: React.FC = () => {
  return (
    <div className={styles.skillsContainer}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000} 
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 9,
            spaceBetween: 10,
          },
        }}
        modules={[ Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={htmlIcon} alt="HTML" width="100" height="100" />HTML</SwiperSlide>
        <SwiperSlide><Image src={css3Icon} alt="CSS" width="100" height="100" />CSS</SwiperSlide>
        <SwiperSlide><Image src={lessIcon} alt="Less" width="100" height="100" />LESS</SwiperSlide>
        <SwiperSlide><Image src={sassIcon} alt="Sass" width="100" height="100" />SASS</SwiperSlide>
        <SwiperSlide><Image src={jsIcon} alt="HTML" width="100" height="100" />JAVASCRIPT</SwiperSlide>
        <SwiperSlide><Image src={tsIcon} alt="CSS" width="100" height="100" />TYPESCRIPT</SwiperSlide>
        <SwiperSlide><Image src={reactIcon} alt="Less" width="100" height="100" />REACT</SwiperSlide>
        <SwiperSlide><Image src={nextIcon} alt="Sass" width="100" height="100" />NEXTJS</SwiperSlide>
        <SwiperSlide><Image src={gitIcon} alt="CSS" width="100" height="100" />GIT</SwiperSlide>
        <SwiperSlide><Image src={githubIcon} alt="Less" width="100" height="100" />GITHUB</SwiperSlide>
        <SwiperSlide><Image src={gitlabIcon} alt="Sass" width="100" height="100" />GITLAB</SwiperSlide>
        <SwiperSlide><Image src={bitbucketIcon} alt="HTML" width="100" height="100" />BITBUCKET</SwiperSlide>
        <SwiperSlide><Image src={magentoIcon} alt="CSS" width="100" height="100" />MAGENTO</SwiperSlide>
        <SwiperSlide><Image src={jiraIcon} alt="Sass" width="100" height="100" />JIRA</SwiperSlide>
        <SwiperSlide><Image src={reactIcon} alt="Less" width="100" height="100" />REACT</SwiperSlide>
        <SwiperSlide><Image src={nextIcon} alt="Sass" width="100" height="100" />NEXTJS</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SkillsLogos;
