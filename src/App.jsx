import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard.jsx';
import Register from './Components/Register.jsx';
import Sidebar from'./Components/Sidebar.jsx';
import Login from'./Components/Login.jsx';
import LandingPage from './Components/LandingPage';
import AddMoney from './Components/AddMoney.jsx';
import Transaction from './Components/Transaction.jsx';
import NewCard from './Components/NewCard.jsx';
import Replacement from './Components/Replacement.jsx';
import Setting from './Components/Setting.jsx';
import Transfer from './Components/Transfer.jsx';
import Profile from './Components/Profile.jsx';


function App() {
  return (
    <div className=''>
      {<BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Sidebar' element={<Sidebar/>}/>
          <Route path='/Transaction' element={<Transaction/>} />
          <Route path='/AddMoney' element={<AddMoney/>} />
          <Route path='/NewCard' element={<NewCard/>} />
          <Route path='/Replacement' element={<Replacement/>} />
          <Route path='/Setting' element={<Setting/>} />
          <Route path='/Transfer' element={<Transfer/>} />
          <Route path='/Profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>}

    </div>
  );
}

export default App;
