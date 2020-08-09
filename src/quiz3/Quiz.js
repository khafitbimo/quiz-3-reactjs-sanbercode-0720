import React from 'react'
import {QuizProvider} from './QuizContext'
import IndexContent from './IndexContent'

const Quiz = () =>{
    return(
      <QuizProvider>
        <IndexContent/>
      </QuizProvider>
    )
  }
  
  export default Quiz