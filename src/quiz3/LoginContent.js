import React, {useContext, useState, useEffect} from "react"
import { useHistory } from 'react-router-dom';
import {QuizContext} from './QuizContext';

const LoginContent = () => {
    const [isLogin,setIslogin]=useContext(QuizContext);
    const history = useHistory()

    const handleClick = (event) => {
        setIslogin(true)
        history.goBack()
    }

    return(
        <>
        {!isLogin && <div>
            <button onClick={handleClick}>Login</button>
        </div>
        }
        
        
        </>
    )
}

export default LoginContent