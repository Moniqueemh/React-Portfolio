import React from 'react'

// components
import MyNavbar, {  } from "./components/my-navbar/mynavbar";
import MyCarousel from './components/my-carousel/mycarousel.component';
import TitleMessage from './components/title/title.component'

import './App.css';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
    </div>
  );
}

export default App;
