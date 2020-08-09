import React, {useContext} from "react"
import {Switch, Route, Link} from 'react-router-dom';

import {QuizContext} from "./QuizContext"
import About from './About'
import Home from './Home'
import Movie from './movie/Movie'
import Login from './LoginContent'

const IndexContent = () =>{
    const [isLogin, setIsLogin,user] = useContext(QuizContext);

    return(
        <>
            <header>
                <div className='logo-user'>
                    <img id="logo" width="200px" className="logo"/>
                    {isLogin && 
                        <div className='label-user'>Welcome ! {user}</div>
                    }
                </div>
                
                
               
                <nav>
                    <div className="navbar">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        {
                            isLogin ?
                            <><Link to='/movie'>Movie</Link>
                            <a href="javasript:void(0);" onClick={()=>setIsLogin(!isLogin)}>Logout</a></>
                            :
                            <Link to ='/login'>{isLogin ? 'Logout' : 'Login'}</Link>
                        }
                    </div>
                </nav>
            </header>
            <section>
                <Switch>
                    
                    <Route path='/login'>
                        <Login/>
                    </Route>
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
            <footer>
                <h5>copyright &copy; 2020 by Sanbercode:Khafit.Bimo</h5>
            </footer>
        </>
    )
}

export default IndexContent