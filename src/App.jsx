import { Route, Routes } from 'react-router-dom';
import Name from './title/Name';
import './App.css';

import Login from './pages/Login';
import Home from './pages/Home';
import Game from './pages/Game';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/game" element={<Game />}/>
      </Routes>
    </div>
  );
}

export default App;
