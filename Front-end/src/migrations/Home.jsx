import MovieCard from "../components/movie_card"
import "../css/Home.css"
import {useState} from "react"

function Home (){
    const movies = [
        {id: 1, title:"Interstellar", release_date: "2014"},
        {id: 2, title:"Fight Club", release_date: "2005"},
        {id: 3, title:"Shutter Island", release_date: "2009"}
    ]
    
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) =>{
        e.preventDefault()
        alert(searchQuery);
    };

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies" 
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-btn">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => (
            movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}
            />)
        ))}
        </div>
    </div>
    )
};

export default Home