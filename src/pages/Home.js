
import React from 'react';
import CarouselComponent from '../components/carousel';
import VerticalsSection from '../components/verticalsection';
import Accomplishments from '../components/Accomplishments';
import Founder from '../components/Founder';




const Home = () => {
  return (
    <div>
   
     <CarouselComponent/>
     <VerticalsSection/>
     <Accomplishments/>
     <Founder/>
    <main className="container mt-4">
      </main>
    </div>
  );
};

export default Home;

