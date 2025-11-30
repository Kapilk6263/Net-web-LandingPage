import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Why from './components/why';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import FAQ from './components/FAQ';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/ourWhy' element={<Why/>} />
      <Route path='/FAQ' element={<FAQ/>} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
