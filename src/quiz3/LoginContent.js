import React, {useContext} from "react"
import { useHistory } from 'react-router-dom';
import {QuizContext} from './QuizContext';

const LoginContent = () => {
    const [setIsLogin,user,setUser]=useContext(QuizContext);
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLogin(true)
        setUser(user)
        history.goBack()
    }

    const handleChange = (event) => {
            
        setUser(event.target.value)
    }

    return(
        <>
        <div>
                <h2 className='title'>Form Login</h2>
                <form onSubmit={handleSubmit} className='form-login'>
                    <div className='label'>Username</div>
                    <div className='input'>
                        <input className='thirty' id="user" name="user" type="text" value ={user} onChange={handleChange}/>
                    </div>
                    <button className='button-login'>Login</button> 
                </form>
            </div>
        </>
    )
}

export default LoginContent