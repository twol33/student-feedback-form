import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function FeedBackForm4() {
    const [ comments, setComments ] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const submitComments = event => {
        event.preventDefault();

        dispatch({ type:'SET_COMMENTS', payload: { comments: comments }})

        history.push('/feedbackReview')
    }

    return(
        <section>
            <h1>Any comments you want to leave?</h1>
            <h3>Comments</h3>
            <form onSubmit  = { submitComments } >
                <input 
                    placeholer = 'Comment Here'
                    value = {comments}
                    onChange={ (event) => setComments( event.target.value )}
                />

                <button>Next</button>
            </form>
        </section>
    )

}

export default FeedBackForm4;