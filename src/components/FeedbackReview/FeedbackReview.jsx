import React from 'react';
import { useHistory } from 'react-router-dom';

function FeedbackReview(params) {
    const history = useHistory();

    const handToCompletionPage = () => {
        history.push('/completion')
    }
    return(
        <div>
            <h1>Review Your Feedback</h1>
            <ul>
                <p>Feelings:</p>
                <p>Understandings:</p>
                <p>Support:</p>
                <p>Comments:</p>
            </ul>
            <button onClick={handToCompletionPage}>Submit</button>
        </div>
    )
}

export default FeedbackReview;