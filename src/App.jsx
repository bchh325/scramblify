import { Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Home from './pages/Home';
import Game from './pages/Game';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/game" element={<Game />}/>
        <Route path="/categories" element={<Categories/>}/>
      </Routes>
    </div>
  );
}

export default App;
