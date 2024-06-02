'use cliente'
import React from 'react';
import RigthImg from '../../assets/img/d.jpg'
import Image from 'next/image';
import SortProducts from '../../portfolio/sort'
import styles from './Home.module.scss';

import { Major_Mono_Display } from 'next/font/google'
import SkillsLogos from '../Skills/SkillsLogos';
import GitHubCalendarComponent from '../Skills/SkillsGitHub'
import ScrollToBottom from '../ScrollToBottom/ScrollToBottom';
 
const fontGoogle2 = Major_Mono_Display({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Home = () => {
  
  return (
    <>
    <div className={styles.containerHome}>
      <ScrollToBottom/>
      <div className={styles.contentHome}>
        <h1>Bem vindo</h1>
        <p>Sou Fabricio Sobral Pinto, um desenvolvedor frontend com mais de 20 anos de experiência na indústria de tecnologia, pronto para compartilhar minha jornada e projetos com você.</p>
      </div>
      <div className={styles.contentHomeImg}><Image src={RigthImg} alt="Profile image" />
      <p>Developer Frontend - REACT | TYPESCRIPT | JAVASCRIPT | HTML | CSS</p></div>
    </div>
    <div>
      <div className={styles.contentDashboard}>
        <h1 className={fontGoogle2.className}>Hard Skills</h1>
        <SkillsLogos />
        <GitHubCalendarComponent/>
      </div>
    </div>
    {/* <div>
      <div className={styles.contentPortfolio}>
        <h1 className={fontGoogle2.className}>Portfolio</h1>
        <SortProducts />
      </div>
    </div> */}
  </>
  )
}

export default Home
