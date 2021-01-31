import React from 'react'

// components
import MyNavbar, {  } from "./components/my-navbar/mynavbar";
import MyCarousel from './components/my-carousel/mycarousel.component';
import TitleMessage from './components/title/title.component'
import About from './pages/about/about.comp';
import ProjectTimeline from './components/project-timeline/project-timeline.comp'

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
    </div>
  );
}

export default App;
