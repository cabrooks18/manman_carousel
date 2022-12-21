import React from 'react';
import 'tailwindcss/tailwind.css';
import Nav from './Nav';
import Cart from './Cart';
import Menu from './Menu';
import Carousel from './Carousel';
// import Calendar from './Calendar';

function App() {
  return (
    <div>
      <Nav />
      <Cart />
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
