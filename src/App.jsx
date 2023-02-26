import Name from './title/Name';
import './App.css';
import { UserContext } from './context/UserContext';
import { useState } from 'react';
import axios from 'axios';



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
        <Name />
      </UserContext.Provider>
    </div>
  );
}

export default App;
