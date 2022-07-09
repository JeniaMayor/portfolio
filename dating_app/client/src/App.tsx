import React, { useEffect,useState } from "react";

import "./View/styles/global.scss";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import LogoBar from './View/Pages/LogoBar';
import Login from './View/Components/Login';
import NavBar from './View/Components/NavBar';
import Home from './View/Pages/Home';
import Profile from "./View/Components/Profile";
import Register from "./View/Components/register";
import LandingPage from "./View/Pages/LandingPage";

function App() {

  const [showRegister, setShowRegister] = useState(true)
  useEffect(()=>{
    (async () => {
      const {data} = await axios.get('/api/users')
      const {users}=data
      console.log(users)
     
    })();
  },[])

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LogoBar/>}>
        <Route index  element={<LandingPage/>}></Route>  
        <Route path="/Home" >
          <Route index element={<Home  />}></Route>
          
          <Route path=':userProfile'  element={<Profile/>}></Route>  
          </Route>      
       
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
