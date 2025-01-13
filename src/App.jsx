import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard.jsx';
import Register from './Components/Register.jsx';
import Sidebar from'./Components/Sidebar.jsx';
import Login from'./Components/Login.jsx';
import LandingPage from './Components/LandingPage';


function App() {
  return (
    <div>
      {<BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Sidebar' element={<Sidebar/>}/>
        </Routes>
      </BrowserRouter>}

    </div>
  );
}

export default App;
