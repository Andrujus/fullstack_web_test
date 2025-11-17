
function MovieCard({movie}){

    function onFavClick(){
        alert("clicked")
    }

    return(
        <div className="movie-card">
        <div className="movie-img">
            <img src={movie.url} alt={movie.title}></img>
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