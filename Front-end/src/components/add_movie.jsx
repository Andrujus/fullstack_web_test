import { useState } from "react";
import "../css/add_movie.css"

function Add_movie ({movies, setMovies}){

const newId = () =>{
    return movies[movies.length-1].id+1;
}
const [newTitle, setNewTitle] = useState('');
const [newRelease, setNewRelease] = useState('');
const [newImage, setNewImage] = useState('');

const AddMovie = (e) => {
    e.preventDefault();
    setMovies([
        ...movies,
        {
            id: newId(),
            title: newTitle,
            release_date: newRelease,
            image: newImage
        }
    ])
    setShowForm(false)
}

const clearForm = () =>{
    newId = newId - 1;
    setNewTitle = "";
    setNewRelease = "";
    setNewImage = "";
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
                            placeholder="Title name"
                            value={newTitle}
                            onChange={(e)=>setNewTitle(e.target.value)}
                        />

                        <input 
                            className="new-release-input" 
                            type="text"
                            placeholder="Release year"
                            value={newRelease}
                            onChange={(e)=>setNewRelease(e.target.value)}
                        />
                        <label className="file-drop">
                            Drop images here, or click to upload.
                            <input type="file" className="file-input" multiple accept="image/*" />
                        </label>
                        <ul className="file-preview"></ul>
                        <button className="clear-btn" onClick={clearForm}>Clear</button>

                        <button className="submit" type="submit" onClick={() => {
                            AddMovie();
                            }}>
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </>
    )
}

export default Add_movie