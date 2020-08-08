import React, {useContext, useState} from "react"
import {Switch, Route, Link} from 'react-router-dom';

import {QuizContext} from "./QuizContext"
import About from './About'
import Home from './Home'
import Movie from './movie/Movie'

const IndexContent = () =>{
    const [isLogin,setIslogin] = useContext(QuizContext);

    const logOut = (event) => {
        setIslogin(false);
    }

    return(
        <>
        {isLogin && 
        <>
            <header>
                <img id="logo" width="200px" className="logo"/>
                <nav>
                    <div className="navbar">
                        {/* <Link to='/tugas12'>Tugas 12</Link> */}
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/movie'>Movie</Link>
                        <a href="javasript:void(0);" onClick={logOut}>Logout</a>
                        
                    </div>
                </nav>
            </header>
            <section>
                <Switch>
                    
                    <Route path='/about'>
                        <About/>
                    </Route>
                    <Route path='/movie'>
                        <Movie/>
                    </Route>
                    <Route path='/'>
                        <Home/>
                    </Route>
                </Switch>
            </section>
        </>
        }
        
        </>
    )
}

export default IndexContent