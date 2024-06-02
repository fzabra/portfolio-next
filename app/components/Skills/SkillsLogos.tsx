'use client';

import React, { useState } from 'react';
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
import { ClipLoader } from 'react-spinners';

const SkillsLogos: React.FC = () => {
  const icons = [
    { src: htmlIcon, alt: 'HTML', label: 'HTML' },
    { src: css3Icon, alt: 'CSS', label: 'CSS' },
    { src: lessIcon, alt: 'Less', label: 'LESS' },
    { src: sassIcon, alt: 'Sass', label: 'SASS' },
    { src: jsIcon, alt: 'JavaScript', label: 'JAVASCRIPT' },
    { src: tsIcon, alt: 'TypeScript', label: 'TYPESCRIPT' },
    { src: reactIcon, alt: 'React', label: 'REACT' },
    { src: nextIcon, alt: 'NextJS', label: 'NEXTJS' },
    { src: gitIcon, alt: 'Git', label: 'GIT' },
    { src: githubIcon, alt: 'GitHub', label: 'GITHUB' },
    { src: gitlabIcon, alt: 'GitLab', label: 'GITLAB' },
    { src: bitbucketIcon, alt: 'Bitbucket', label: 'BITBUCKET' },
    { src: magentoIcon, alt: 'Magento', label: 'MAGENTO' },
    { src: jiraIcon, alt: 'Jira', label: 'JIRA' },
  ];

  const [imageLoading, setImageLoading] = useState(
    new Array(icons.length).fill(true)
  );

  const handleImageLoad = (index: number) => {
    setImageLoading((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

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
        modules={[Autoplay]}
        className="mySwiper"
      >
        {icons.map((icon, index) => (
          <SwiperSlide key={index}>
            <div className={styles.imageContainer}>
              {imageLoading[index] && (
                <div className={styles.loaderContainer}>
                  <ClipLoader color="#000" loading={true} size={50} />
                </div>
              )}
              <Image
                src={icon.src}
                alt={icon.alt}
                width={100}
                height={100}
                loading="lazy"
                onLoad={() => handleImageLoad(index)}
                className={imageLoading[index] ? styles.hidden : styles.visible}
              />
              {!imageLoading[index] && <span>{icon.label}</span>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsLogos;
