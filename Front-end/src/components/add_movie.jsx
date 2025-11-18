import { useState } from "react";

function Add_movie ({movies, setMovies}){

const newId = () =>{
    return movies[movies.length-1].id+1;
}
const [newTitle, setNewTitle] = useState('');
const [newRelease, setNewRelease] = useState('');

const AddMovie = (e) => {
    e.preventDefault();
    setMovies([
        ...movies,
        {
            id: newId(),
            title: newTitle,
            release_date: newRelease
        }
])
        
}

const [showForm, setShowForm] = useState(false);

    return (
        <>
        <div className="new-movie">
            <button className="new-movie-btn" onClick={() => setShowForm(true)}>Add a movie</button>
        </div>
        {showForm && (
                <div className="new-movie-form">
                    <form className="new-movie-input" onSubmit={AddMovie}>
                        <input 
                            className="new-title-input" 
                            type="text"
                            value={newTitle}
                            onChange={(e)=>setNewTitle(e.target.value)}
                        />

                        <input 
                            className="new-release-input" 
                            type="text"
                            value={newRelease}
                            onChange={(e)=>setNewRelease(e.target.value)}
                        />

                        <button className="submit" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default Add_movie