import React,{useContext,useState} from 'react';
import axios from "axios"
import {MovieContext} from './MovieContext';

const MovieList = () => {
    const [apiUrl,movie,setMovie, 
        inputTitle, setInputTitle,
        inputDescription, setInputDescription,
        inputYear,setInputYear,
        inputDuration,setInputDuration,
        inputGenre,setInputGenre,
        inputRating,setInputRating,
        selectedId, setSelectedId,
        statusForm, setStatusForm] = useContext(MovieContext);

    
        const handleEdit = (event) => {
            let idMovie = parseInt(event.target.value);
            let selectMovie = movie.find(el => el.id === idMovie);

            setSelectedId(idMovie);
            setInputTitle(selectMovie.title === null ? '' : selectMovie.title);
            setInputDescription(selectMovie.description === null ? '' : selectMovie.description);
            setInputYear(selectMovie.year === null ? '' : selectMovie.year);
            setInputDuration(selectMovie.duration === null ? '' : selectMovie.duration);
            setInputGenre(selectMovie.genre === null ? '' : selectMovie.genre);
            setInputRating(selectMovie.rating === null ? '' : selectMovie.rating);

        }

        const handleDelete = (event) => {
            let idMovie = parseInt(event.target.value);
            console.log(idMovie)
            let newMovie = movie.filter(el => el.id !== idMovie);
            axios.delete(`${apiUrl}/${idMovie}`)
            .then(res => {
                console.log(res)
            })
            setMovie([...newMovie])
        }

        return(
            <>
            <div>
            <h1>Tabel Harga Buah</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Duration</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    movie !== null && movie.map((item,index) => {
                        return(
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.year}</td>
                                <td>{item.duration} Jam</td>
                                <td>{item.genre}</td>
                                <td>{item.rating}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button onClick={handleEdit} value={item.id}>Edit</button>
                                    <button onClick={handleDelete} value={item.id}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>
            </>
        )

    
}

export default MovieList