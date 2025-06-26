import MovieCard from './components/MovieCard';
import Home from './pages/Home'
import Favorite from './pages/Favorite';
import "./css/App.css"
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import { MovieProvider } from './context/MoviesContext';

function App() {
  return (
    <MovieProvider>
    <Navbar></Navbar>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/fav' element={<Favorite></Favorite>}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;