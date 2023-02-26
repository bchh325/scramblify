import { Route, Routes } from 'react-router-dom';
import Name from './title/Name';
import './App.css';
import { UserContext } from './context/UserContext';
import { useState } from 'react';
import axios from 'axios';
import Login from './pages/Login';
import Home from './pages/Home';
import Game from './pages/Game';

function App() {
  const client_id = "d559adf71389493dbd4b84821189173a";
  const response_type = 'token';
  const client_secret = "c0cf5ad3734e4e249295db892869ecd5";
  const redirect_uri = "http://localhost:3000/";
  const auth_URI = 'http://accounts.spotify.com/en/authorize'

  const {userObj, setUserObj} = useState({})


  return (
    <div className="App">
      <UserContext.Provider value={{ userObj, setUserObj}}>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/game" element={<Game />}/>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
