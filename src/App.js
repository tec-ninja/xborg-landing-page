import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Supply from './components/Supply/Supply';
import Team from './components/Team/Team';
import Tiers from './components/Tiers/Tiers';
import Xborg from './components/Xborg/Xborg';
import SliderXborg from './components/Slider/SliderXborg';
import Benefits from './components/Benefits/Benefits';
import Roadmap from './components/Roadmap/Roadmap';

function App() {
  useEffect (()=>{
    Aos.init({ duration: 1000 });
  }, [])
  return (
    <div style={{overFlow:'hidden'}}>
      <Header/>
      <Hero/>
      <Xborg/>
      <SliderXborg/>
      <Supply/>
      <Tiers/>
      <Benefits/>
      <Roadmap/>
      <FAQ/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
