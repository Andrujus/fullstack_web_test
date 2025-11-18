import { useState } from "react";

function Add_movie (){
const [movies, setMovies] = useState([
        {id: 1, title:"Interstellar", release_date: "2014"},
        {id: 2, title:"Fight Club", release_date: "1999"},
        {id: 3, title:"Shutter Island", release_date: "2009"},
        {id: 4, title:"Seven", release_date: "1995"}
    ]);
const newId = () =>{
    movies[movies.length-1].id+1;
}
const [newTitle, setNewTitle] = useState('');
const [newRelease, setNewRelease] = useState('');

const AddMovie = (e) => {
    e.preventDefault();
    setMovies(
        ...movies,
        {
            id: newId,
            title: newTitle,
            release_date: newRelease
        }
    )
}

const [showForm, setShowForm] = useState(false);

    return (
        <>
        <div className="new-movie">
            <button className="new-movie-btn" onClick={setShowForm => true}>Add a movie</button>
        </div>
        {showForm && (
            <>
        <div className="new-movie-form">
            <form className="new-movie-input">
                <input className="new-title-input" type="text"></input>
                <input className="new-release-input" type="text"></input>
                <button className="submit">Submit</button>
            </form>
        </div>
        </>
        )}
        </>
    )
}

export default Add_movie