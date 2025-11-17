import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieCard from "./components/movie_card"
import './App.css'

function App() {
  const movieNumber = 1;

  return (
    <>
      {movieNumber === 1 ? (<MovieCard movie={{title: "Justas Andru", release_date: "2005"}}></MovieCard>
      ) : (
      <MovieCard movie={{title: "Justas Andrusk", release_date: "2005"}}></MovieCard>
      )}
    </>
  )

  
}


export default App
