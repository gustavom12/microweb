import React, { useEffect } from 'react';
import './App.sass';
import Header from '../header/header';
import Services from '../services/services';
import ContactUs from '../contact_us/contact_us';
import Portfolio from '../portfolio/portfolio';
import * as AOS from "aos"
import "aos/dist/aos.css";
import Footer from '../footer/footer';
function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: true,
      offset: 25,
      anchorPlacement: 'bottom-bottom'
    })
  },[])
  return (
    <main className="App">
      <Header/>
      <Services/>
      <ContactUs/>
      <Portfolio/>
      <Footer/>
    </main>
  );
}

export default App;
