import React,{useContext} from 'react';
import axios from "axios"
import {MovieContext} from './MovieContext';

const MovieForm = () => {
    const [apiUrl,movie,setMovie, 
        inputTitle, setInputTitle,
        inputDescription, setInputDescription,
        inputYear,setInputYear,
        inputDuration,setInputDuration,
        inputGenre,setInputGenre,
        inputRating,setInputRating,
        selectedId, setSelectedId,
        statusForm, setStatusForm] = useContext(MovieContext);

    const handleSubmit = (event) => {
        event.preventDefault()
        let title = inputTitle
        let description = inputDescription
        let year = parseInt(inputYear)
        let duration = parseInt(inputDuration)
        let genre = inputGenre
        let rating = parseInt(inputRating)

        if (title.replace(/\s/g,'') === '') {
            return
        }

        if (statusForm === 'create') {
            axios.post(apiUrl,{
                title,description,year,duration,genre,rating})
            .then(res => {
                setMovie([...movie,{
                    id: res.data.id,
                    title: res.data.title,
                    description: res.data.description,
                    year: res.data.year,
                    duration: res.data.duration,
                    genre: res.data.genre,
                    rating: res.data.rating,
                }])
            }).catch(error => {
                console.log(error)
            })
        }else{
            axios.put(`${apiUrl}/${selectedId}`,{
                title,description,year,duration,genre,rating})
            .then(res => {
                let selectMovie = movie.find(el => el.id === selectedId)
                selectMovie.title = title
                selectMovie.description = description
                selectMovie.year = year
                selectMovie.duration = duration
                selectMovie.genre = genre
                selectMovie.rating = rating
                setMovie([...movie])

            }).catch(error => {
                console.log(error)
            })

        }
        setStatusForm("create")
        setSelectedId(0)
        setInputTitle('')
        setInputDescription('')
        setInputYear(0)
        setInputDuration(0)
        setInputGenre('')
        setInputRating(0)
    }

    const handleChange = (event) => {
        let typeOfInput = event.target.name
        switch (typeOfInput) {
            case 'title':
                setInputTitle(event.target.value)
                break;
            case 'description':
                setInputDescription(event.target.value)
                break;
            case 'year':
                setInputYear(event.target.value)
                break;
            case 'duration':
                setInputDuration(event.target.value)
                break;
            case 'genre':
                setInputGenre(event.target.value)
                break;
            case 'rating':
                setInputRating(event.target.value)
                break;
        
            default:
                break;
        }
    }


return(
        <>
            <div>
                <h2 className='title'>Form Movie</h2>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td className='ten'>
                                    <label>
                                        Title
                                    </label>
                                </td>
                                <td className='thirty'>
                                    <input id="title" name="title" type="text" value ={inputTitle} onChange={handleChange}/>
                                </td>
                                <td className='ten'></td>
                                <td className='ten'>Genre</td>
                                <td className='thirty'>
                                    <input id="genre" name="genre" type="text" value = {inputGenre} onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Year
                                </td>
                                <td>
                                <input id="year" name="year" type="number" value ={inputYear} onChange={handleChange}/>
                                </td>
                                <td className='ten'></td>
                                <td rowSpan='3'>
                                    Description
                                </td>
                                <td rowSpan='3'>
                                    <textarea  id="description" name="description" type="text" value = {inputDescription} onChange={handleChange} rows='4'/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Duration (min)
                                </td>
                                <td>
                                <input id="duration" name="duration" type="number" value = {inputDuration} onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Rating
                                </td>
                                <td>
                                <input id="rating" name="rating" type="number" value = {inputRating} onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="5">
                                    <button className='button-green float-right'>
                                        Submit
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>   
                </form>
            </div>
        </>
    )
}

export default MovieForm