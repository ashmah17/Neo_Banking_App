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
import { use } from 'react';


function App() {

  const [DarkMood, setDarkMood] = useState(()=>{
    const savedMood = localStorage.getItem('theme');
    return savedMood ? JSON.parse(savedMood) : true;
  })
  
const handleMood =()=>{
  setDarkMood((prevMood)=>{
    const newMood = (!prevMood);
    localStorage.setItem('theme', JSON.stringify(newMood))
    return newMood
  })
}


 


  return (
    <div className=''>
      {<BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Dashboard' element={<Dashboard DarkMood={DarkMood} handleMood={handleMood} />}/>
          <Route path='/Login' element={<Login DarkMood={DarkMood}/>}/>
          <Route path='/Register' element={<Register DarkMood={DarkMood}/>}/>
          <Route path='/Sidebar' element={<Sidebar DarkMood={DarkMood}/>}/>
          <Route path='/Transaction' element={<Transaction DarkMood={DarkMood}/>} />
          <Route path='/AddMoney' element={<AddMoney DarkMood={DarkMood}/>} />
          <Route path='/NewCard' element={<NewCard DarkMood={DarkMood}/>} />
          <Route path='/Replacement' element={<Replacement DarkMood={DarkMood}/>} />
          <Route path='/Setting' element={<Setting DarkMood={DarkMood}/>} />
          <Route path='/Transfer' element={<Transfer DarkMood={DarkMood}/>} />
          <Route path='/Profile' element={<Profile DarkMood={DarkMood}/>} />
        </Routes>
      </BrowserRouter>}

    </div>
  );
}

export default App;
