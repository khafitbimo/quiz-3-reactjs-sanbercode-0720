import React, {useContext, useState, useEffect} from "react"
import {QuizContext} from './QuizContext';

const LoginContent = () => {
    const [isLogin,setIslogin]=useContext(QuizContext);

    return(
        <>
        {!isLogin && <div>
            <button onClick={()=>setIslogin(true)}>Login</button>
        </div>
        }
        
        
        </>
    )
}

export default LoginContent