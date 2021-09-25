import React from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import FeedBackForm2 from '../FeedBackForm2/FeedBackForm2';
import FeedBackForm3 from '../FeedFormForm3/FeedBackForm3';
import FeedBackForm4 from '../FeedBackForm4/FeedBackForm4';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import FeedBackForm1 from '../FeedBackForm1/FeedBackForm1';
import FeedBackCompletion from '../FeedBackCompletion/FeedBackCompletion';

function App() {
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path='/'>
          <FeedBackForm1/>
        </Route>

        <Route exact path='/2'>
          <FeedBackForm2/>
        </Route>

        <Route exact path='/3'>
          <FeedBackForm3/>
        </Route>

        <Route exact path='/4'>
          <FeedBackForm4/>
        </Route>

        <Route exact path='/feedbackReview'>
          <FeedbackReview/>
        </Route>

        <Route exact path='/completion'>
          <FeedBackCompletion/>
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
