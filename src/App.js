import React from 'react'
import Container from "react-bootstrap/Container";
//import Fade from "react-reveal/Fade";

// components
import MyNavbar, { } from "./components/my-navbar/mynavbar";
import MyCarousel from './components/my-carousel/mycarousel.component';
import TitleMessage from './components/title/title.component'
import About from './pages/about/about.comp';
import ProjectTimeline from './components/project-timeline/project-timeline.comp'
import ContactForm from './pages/contact/contact-form'
import Footer from './components/footer/footer.comp'

import './App.css';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      {/* about me sect */}
      <About />
      <ProjectTimeline />
      <Container className="container-box rounded">
        <hr />
        <ContactForm />
      </Container>

      <hr />
      <Footer />
    </div >

  );
}

export default App;
