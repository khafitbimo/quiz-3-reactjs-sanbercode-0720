import React, { useState, createContext,useEffect } from "react";

export const QuizContext = createContext();

export const QuizProvider = props => {
    const [isLogin,setIsLogin] = useState(false);
    const [user,setUser] = useState(null);
    const [inputUsername,setUsername] = useState('')
   

    return (<QuizContext.Provider value={[isLogin, setIsLogin,user,setUser,inputUsername,setUsername]}>
        {props.children}
      </QuizContext.Provider>);
};