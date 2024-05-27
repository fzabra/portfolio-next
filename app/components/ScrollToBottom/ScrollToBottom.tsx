"use client"
import React, { useEffect, useState } from 'react';
import styles from './ScrollToBottom.module.scss';
import ArrowDownIcon from '../../assets/img/icons/arrow-down.svg';
import Image from 'next/image';

const ScrollToBottom = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const scrollToBottom = () => {
    if (isAtBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      setIsAtBottom(atBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.scrollToBottom} ${isAtBottom ? styles.atBottom : ''}`} onClick={scrollToBottom}>
      <Image src={ArrowDownIcon} alt="HTML" width="100" height="100" />
    </div>
  );
};

export default ScrollToBottom;

