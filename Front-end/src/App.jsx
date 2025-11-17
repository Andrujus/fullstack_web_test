import MovieCard from "./components/movie_card"
import Favorite from "./migrations/Favorites"
import Home from "./migrations/Home"
import { Route, Routes } from "react-router-dom"
import './App.css'

function App() {
return (
  <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorite/>}/>
    </Routes>
  </main>
  );
}


export default App
