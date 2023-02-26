import { Route, Routes } from 'react-router-dom';
import Name from './title/Name';
import './App.css';

import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
