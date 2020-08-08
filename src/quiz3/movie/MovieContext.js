import React, { useState, createContext,useEffect } from "react";
import axios from "axios";


// let url = 'http://backendexample.sanbercloud.com/api/movies';
export const MovieContext = createContext();

export const MovieProvider = props => {
    const [apiUrl] = useState('http://backendexample.sanbercloud.com/api/movies')
    const [movie,setMovie] = useState(null);
    
    const [inputTitle, setInputTitle] = useState("")
    const [inputDescription, setInputDescription] = useState("")
    const [inputYear,setInputYear] = useState(0)
    const [inputDuration,setInputDuration] = useState(0)
    const [inputGenre,setInputGenre] = useState("")
    const [inputRating,setInputRating] = useState(0)

    const [selectedId, setSelectedId]  =  useState(0);
    const [statusForm, setStatusForm]  =  useState("create")

    useEffect( () => {
        if (movie === null){
          axios.get(apiUrl)
          .then(res => {
            setMovie(res.data.map(el=>{ 
                return {
                    id : el.id,
                    title : el.title,
                    description : el.description,
                    year : el.year,
                    duration : el.duration,
                    genre : el.genre,
                    rating : el.rating,
                }
            } ))
          })
        }
      }, [movie])

      return(
          <MovieContext.Provider value={
              [apiUrl,movie,setMovie, 
                inputTitle, setInputTitle,
                inputDescription, setInputDescription,
                inputYear,setInputYear,
                inputDuration,setInputDuration,
                inputGenre,setInputGenre,
                inputRating,setInputRating,
                selectedId, setSelectedId,
                statusForm, setStatusForm]
              
          }>
              {props.children}
          </MovieContext.Provider>
      )
}