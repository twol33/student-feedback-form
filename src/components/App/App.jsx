import React from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();

  function submitFeeling() {
    history.push('/')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h1>How are you feeling today?</h1>

      <h3>Feeling?</h3>
      <input type = 'number' min = '1' max = '5'/>
      

      <Router>
        <button onClick={submitFeeling}>NEXT</button>
        <Route exact path='/'></Route>
        <Route exact path='/2'></Route>
        <Route exact path='/3'></Route>
        <Route exact path='/4'></Route>
      </Router>
    </div>
  );
}

export default App;
