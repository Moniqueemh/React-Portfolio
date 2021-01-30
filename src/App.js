import React from 'react'

// components
import MyNavbar, {  } from "./components/my-navbar/mynavbar";
import MyCarousel from './components/my-carousel/mycarousel.component';

import './App.css';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      My Portfolio
    </div>
  );
}

export default App;
