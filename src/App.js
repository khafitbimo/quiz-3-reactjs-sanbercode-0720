import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Quiz from './quiz3/Quiz'

function App() {
  return (
    <div>
      <Router>
        <Quiz/>
      </Router>
    </div>
  );
}

export default App;
