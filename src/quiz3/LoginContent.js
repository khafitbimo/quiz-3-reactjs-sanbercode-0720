import React, {useContext, useState, useEffect} from "react"
import { useHistory } from 'react-router-dom';
import {QuizContext} from './QuizContext';

const LoginContent = () => {
    const [isLogin, setIsLogin,inputUsername,setUsername]=useContext(QuizContext);
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLogin(true)
        setUsername(inputUsername)
        history.goBack()
    }

    const handleChange = (event) => {
            
        setUsername(event.target.value)
    }

    return(
        <>
        <div>
                <h2 className='title'>Form Login</h2>
                <form onSubmit={handleSubmit} className='form-login'>
                    <div className='label'>Username</div>
                    <div className='input'>
                        <input className='thirty' id="user" name="user" type="text" value ={inputUsername} onChange={handleChange}/>
                    </div>
                    <button className='button-login button-green'>Login</button> 
                </form>
            </div>
        </>
    )
}

export default LoginContent