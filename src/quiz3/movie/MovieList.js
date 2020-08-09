import React,{useContext,useState} from 'react';
import axios from "axios"
import {MovieContext} from './MovieContext';

const MovieList = () => {
    const [apiUrl,movie,setMovie, 
         setInputTitle,
         setInputDescription,
        setInputYear,
        setInputDuration,
        setInputGenre,
        setInputRating,
         setSelectedId,
         setStatusForm] = useContext(MovieContext);

    
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
            setStatusForm("edit")
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
            <h2 className='title'>Daftar Film Terbaik</h2>
            <table className='table-movie'>
                <thead>
                    <tr>
                        <th className='ten'>Title</th>
                        <th className='ten'>Year</th>
                        <th className='ten'>Duration</th>
                        <th className='ten'>Genre</th>
                        <th className='ten'>Rating</th>
                        <th className='fourty'>Description</th>
                        <th className='ten'>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    movie !== null && movie.sort((a,b) => parseInt(b.id) - parseInt(a.id)).map((item,index) => {
                        return(
                            <tr key={index} className='border-bottom margin-bottom-top-ten'>
                                <td className='center'>{item.title}</td>
                                <td className='center'>{item.year}</td>
                                <td className='center'>{item.duration/60} Jam</td>
                                <td className='center'>{item.genre}</td>
                                <td className='center'>{item.rating}</td>
                                <td>{item.description}</td>
                                <td className='center'>
                                    <button className='button-blue' onClick={handleEdit} value={item.id}>Edit</button><br></br>
                                    <button className='button-red' onClick={handleDelete} value={item.id}>Delete</button>
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