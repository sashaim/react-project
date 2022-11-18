import React from 'react'
import './App.css';
// import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import { CartContextProvider } from './context/CartContext';
import { NotificationProvider } from './notification/notification';
// import ItemCount from './components/ItemCount/ItemCount';

function App() {

  
  return (
    <div className="App">
    <NotificationProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListConteiner/>} />
            <Route path='/category/:categoryId' element={<ItemListConteiner/>}/>
            <Route path='/detail/:productId' element= {<ItemDetailConteiner/>}/>
            <Route path='*' />
            <Route path='checkout' element />
          </Routes>
          {/* <ItemCount/> */}
        </BrowserRouter>
      </CartContextProvider>
    </NotificationProvider>
    </div>
  );
}

export default App;
