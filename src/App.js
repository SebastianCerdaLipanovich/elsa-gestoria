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
import CartContextProvider from './components/CartContext';
import CheckOutForm from './components/CheckOutForm';

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<MyHome />} />
          <Route path="/Cart" element={<Cart />} />
          <Route exact path="/Servicios/" element={<ItemListContainer />} />
          <Route exact path="/Servicios/:id" element={<ItemDetailContainer />} />
          <Route exact path="/CheckOut" element={<CheckOutForm />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
