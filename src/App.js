import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer/>
      <Footer />
    </>
  );
}

export default App;
