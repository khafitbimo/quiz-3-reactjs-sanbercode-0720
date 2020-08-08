import React, { useState, createContext,useEffect } from "react";

export const QuizContext = createContext();

export const QuizProvider = props => {
    const [isLogin,setIsLogin] = useState(false);
   

    return (<QuizContext.Provider value={[isLogin, setIsLogin]}>
        {props.children}
      </QuizContext.Provider>);
};