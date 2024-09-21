import React, {useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Others from './components/Others/Others'
import Footer from './components/Footer/Footer'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const container = document.getElementsByClassName('about__subtext')[0];
    const sections = gsap.utils.toArray(".about__subtext section");
    
    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 0.1,
          end: "+=" + (sections.length * window.innerWidth)
      }
    });

    return () => {
      scrollTween.kill();
    };
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Intro/>
      <About/>
      <Others/>
      <Footer/>
    </div>
  );
}

export default App;
