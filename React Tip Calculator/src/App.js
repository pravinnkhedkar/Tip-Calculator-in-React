import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Assignment/Header';
import Tip from './Assignment/Tip';
import Footer from './Assignment/Footer';

function App() {
  return (
    <main className="div">
      <Header /> <hr />
      <Tip />
      <Footer />
    </main>
  );
}

export default App;
