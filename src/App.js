import React from 'react'
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';
import {BrowserRouter , Routes , Route} from "react-router-dom"
// import ItemCount from './components/ItemCount/ItemCount';

function App() {

  
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
