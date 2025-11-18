import MovieCard from "../components/movie_card"
import "../css/Home.css"
import Add_movie from "../components/add_movie";
import {useState} from "react"

function Home (){
    

    const [movies, setMovies] = useState([
        {id: 1, title:"Interstellar", release_date: "2014", image: "interstellar.jpg"},
        {id: 2, title:"Fight Club", release_date: "1999", image: "fight-club.jpg"},
        {id: 3, title:"Shutter Island", release_date: "2009", image: "shutter-island.jpg"},
        {id: 4, title:"Seven", release_date: "1995", image: "seven.jpg"}
    ]);
    
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) =>{
        e.preventDefault()
        alert("Type at least one symbol");
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
            movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id} image={movie.image}
            />)
        ))}
        </div>
        <Add_movie movies={movies} setMovies={setMovies}/>
    </div>
    )
};

export default Home