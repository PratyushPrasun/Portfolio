import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import CursorDot from './components/CursorDot';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experince';
import ThemeProvider from './Contexts/ThemeProvider';
import Education from './components/Education';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import ThemeReveal from './components/ThemeReveal';


export default function App() {
  return (
    <ThemeProvider>
    <ThemeReveal/>
    <BackToTop/>
    <CursorDot/>
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Skills/>
    <Experience/>
    <Education/>
    <Contact/>
    <Footer/>
    </ThemeProvider>
  );
}


