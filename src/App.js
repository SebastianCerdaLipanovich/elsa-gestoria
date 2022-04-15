import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer"
import PageNotFound from './components/PageNotFound';
import MyHome from './components/MyHome';
import Cart from './components/Cart'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/" element={<MyHome/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route exact path="/Servicios/" element={<ItemListContainer />} />
        <Route exact path="/Servicios/:id" element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
