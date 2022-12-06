import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Header from './Header/Header'
import SectionOne from './Sections/SectionOne'
import SectionTwo from './Sections/SectionTwo'
import SectionThree from './Sections/SectionThree'
import SectionFour from './Sections/SectionFour'
import SectionFive from './Sections/SectionFive'
import SectionSix from './Sections/SectionSix'
import Footer from './Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    
      <Footer />
    </div>
  );
}

export default App;
