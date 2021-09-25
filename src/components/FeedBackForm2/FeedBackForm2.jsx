import React from "react";
import { useHistory } from 'react-router-dom';

function FeedBackForm2() {
    const history = useHistory();

    const submitUnderstand = () => {
        history.push('/3')
    }


    return(
        <div>
            <h1>How are you feeling today?</h1>
            <h3>Feeling?</h3>
            <input type = 'number' min = '1' max = '5'/>
            <button onClick={submitUnderstand}>NEXT</button>
        </div>
    )
    
}

export default FeedBackForm2;