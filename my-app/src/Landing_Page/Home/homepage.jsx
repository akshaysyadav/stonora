import React from 'react';
import Navbar from './navbar';
import Hero from './hero';
import WhySection from './whysection';
import Hero1 from './hero1';
import WhySec from './whysec';
import OurServices from './ourservices';
import OurServices1 from './ourservices2';
import Footer from './footer';

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero1 />
    <WhySection />
    <OurServices />
    <Hero />
    <WhySec />
    <OurServices1 />
    <Footer />
    </>
  );
}

export default Home;
