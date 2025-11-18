import "../css/movie_card.css"

function MovieCard({movie}){

    const imagePath = new URL(`../assets/img/${movie.image}`, import.meta.url).href;

    function onFavClick(){
        alert("clicked")
    }

    return(
        <div className="movie-card">
        <div className="movie-img">
            <img src={imagePath} alt={movie.title}></img>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavClick}>❤️</button>
            </div>
        </div>
        <div className="movie-txt">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
    )
    
}

export default MovieCard