import React from 'react'
import {QuizProvider} from './QuizContext'
import IndexContent from './IndexContent'
import LoginContent from './LoginContent'

const Quiz = () =>{
    return(
      <QuizProvider>
        <IndexContent/>
        <LoginContent/>
      </QuizProvider>
    )
  }
  
  export default Quiz