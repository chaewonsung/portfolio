import React from 'react';
import '@styles/home';
import Header from '@components/common/header/Header';
import Background from '@components/home/Background';
import IntroSection from '@components/home/01_intro';
import WorksSection from '@components/home/02_works';
import SubWorksSection from '@components/home/03_sub_works';
import AboutSection from '@components/home/04_about';
import BottomOverlay from '@components/home/BottomOverlay';
import Footer from '@components/home/05_footer';

const MainPage = () => {
  return (
    <>
      <Background />
      <BottomOverlay />
      <Header />
      <main>
        <IntroSection />
        <WorksSection />
        <SubWorksSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
