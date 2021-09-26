import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function FeedbackReview(params) {
    const history = useHistory();
    const reduxStore = useSelector ( store => store )

    const handToCompletionPage = () => {
        history.push('/completion')
    }
    return(
        <div>
            <h1>Review Your Feedback</h1>
            <ul>
                <p>Feelings: {reduxStore.feedbackReducer.feeling}</p>
                <p>Understandings: {reduxStore.feedbackReducer.understanding}</p>
                <p>Support: {reduxStore.feedbackReducer.support}</p>
                <p>Comments: {reduxStore.feedbackReducer.comments}</p>
            </ul>
            <button onClick={handToCompletionPage}>Submit</button>
        </div>
    )
}

export default FeedbackReview;