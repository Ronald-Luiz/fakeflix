import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Movies from './pages/movies';
import Header from './components/header/header';
import Main from './components/main/main';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header Movies="Movies" buttonLink="/movies" buttonLink2="/" />



        {/* Rotas */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
