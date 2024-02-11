import React, { useState } from 'react';
import Info from './components/Info';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  

  return (
    <main>
      <section className='container'>
        
        <Info />
        <About />
        <Footer />

       
      </section>
    </main>
  )
}

export default App;
