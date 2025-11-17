import MovieCard from "../components/movie_card"

function Home (){
    const movies = [
        {id: 1, title:"Interstellar", release_date: "2014"},
        {id: 2, title:"Fight Club", release_date: "2005"},
        {id: 3, title:"Shutter Island", release_date: "2009"}
    ]

    return (
    <div className="home">
        <form onSubmit={} className="search-form">
            <input typr="text" placeholder="Search for movies" className="search-input"/>
        </form>

        <div className="movies-grid">
            {movies.map(movie => 
            <MovieCard movie={movie} key={movie.id}
            />
        )}
        </div>
    </div>
    )
};

export default Home