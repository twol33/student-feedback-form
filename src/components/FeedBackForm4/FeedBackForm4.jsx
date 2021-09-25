import React from "react";
import { useHistory } from 'react-router-dom';

function FeedBackForm4() {
    const history = useHistory();

    const submitComment = () => {
        history.push('/feedbackReview')
    }


    return(
        <div>
            <h1>Any comments you want to leave?</h1>

            <h3>Comments</h3>
            <input type = 'text'/>
            <button onClick={submitComment}>NEXT</button>
        </div>
    )
    
}

export default FeedBackForm4;