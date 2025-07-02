import logo from './logo.svg';
import './App.css';
import { useEffect,useState,useNavigate } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
