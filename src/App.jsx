import { Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Home from './pages/Home';
import Game from './pages/Game';
import Categories from './pages/Categories';
import Playlists from './pages/Playlists';
import Score from './pages/Score';
import Board from './pages/Board';
import Flex from './pages/Flex';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/game" element={<Game />}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/playlists" element={<Playlists/>}/>
        <Route path="/score" element={<Score/>}/>
        <Route path="/test" element={<Board />}/>
        <Route path="/flex" element={<Flex/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
    </div>
  );
}

export default App;
