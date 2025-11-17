import MovieCard from "./components/movie_card"
import Favorite from "./migrations/Favorites"
import Home from "./migrations/Home"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/nav_bar"
import './css/App.css'

function App() {
return (
  <div>
    <NavBar></NavBar>
    <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorite/>}/>
    </Routes>
    </main>
  </div>
  
  );
}


export default App
