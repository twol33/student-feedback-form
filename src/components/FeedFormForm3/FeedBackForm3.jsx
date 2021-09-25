import React from "react";
import { useHistory } from 'react-router-dom';

function FeedBackForm3() {
    const history = useHistory();

    const submitSupport = () => {
        history.push('/4')
    }


    return(      
        <div>
            <h1>How well are you being supported?</h1>
            <h3>Support?</h3>
            <input type = 'number' min = '1' max = '5'/>
            <button onClick={submitSupport}>NEXT</button>
        </div>
    )
    
}
export default FeedBackForm3;