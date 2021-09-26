import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function FeedbackReview() {
    const history = useHistory();
    const reduxStore = useSelector ( store => store.feedbackReducer )

    const handToCompletionPage = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: reduxStore,
        }).then(response => {
            console.log('review posted');
        }).catch(error => {
            alert('Could Not Submit Your ')
        })
        history.push('/completion')
    }
    return(
        <div>
            <h1>Review Your Feedback</h1>
            <ul>
                <p>Feelings: {reduxStore.feeling}</p>
                <p>Understandings: {reduxStore.understanding}</p>
                <p>Support: {reduxStore.support}</p>
                <p>Comments: {reduxStore.comments}</p>
            </ul>
            <button onClick={handToCompletionPage}>Submit</button>
        </div>
    )
}

export default FeedbackReview;