import React from 'react'
import {MovieProvider} from '../movie/MovieContext'
import MovieList from '../movie/MovieList'
import MovieForm from './MovieForm'

const Movie = () =>{
    return(
        
      <MovieProvider>
        <MovieForm/>
        <MovieList/>
      </MovieProvider>
    )
  }
  
  export default Movie