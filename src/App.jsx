import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Video_player from "./components/Video-player/Video_player";
import { useState } from "react";

function App() {

  const [play, setPlay] = useState(false)

  return (
    <>
      <Navbar />
      <Hero />
      <div className="conatiner">
        <Title subTitle="Our Progarm" title="What we Offer" />
        <Programs />
        <About setPlay={setPlay}/>
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <Video_player play={play} setPlay={setPlay}/>
    </>
  );
}

export default App;
