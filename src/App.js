import React from 'react';
import 'tailwindcss/tailwind.css';
import Nav from './Nav';
import Menu from './Menu';
import Carousel from './Carousel';
// import Calendar from './Calendar';

function App() {
  return (
    <div>
      <Nav />
      {/* <Calendar />  */}
      <Carousel />
      <Menu />

      {/* <Hero />
        <Features />
        <Footer /> */}
    </div>
  );
}

export default App;
