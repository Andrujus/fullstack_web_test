import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieCard from "./components/movie_card"
import './App.css'

function App() {
  return (
    <>
      <MovieCard movie={{title: "Justas Andru", release_date: "2005"}}></MovieCard>
    </>
  )
}


export default App
