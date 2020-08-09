import React, { useState, createContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = props => {
    const [isLogin,setIsLogin] = useState(false);
    const [inputUsername,setUsername] = useState('')
   

    return (<QuizContext.Provider value={[isLogin, setIsLogin,inputUsername,setUsername]}>
        {props.children}
      </QuizContext.Provider>);
};