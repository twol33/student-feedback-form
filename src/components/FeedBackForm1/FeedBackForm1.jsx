import React from 'react';
import { useHistory } from 'react-router-dom';

function FeedBackForm1() {
    const history = useHistory();

    const submitFeeling = () => {
        history.push('/')
    }

    return(
        <div className='App'>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
            </header>
            <h1>How are you feeling today?</h1>

            <h3>Feeling?</h3>
            <input type = 'number' min = '1' max = '5'/>
            <button onClick={submitFeeling}>NEXT</button>
        </div>
    )
}

export default FeedBackForm1;