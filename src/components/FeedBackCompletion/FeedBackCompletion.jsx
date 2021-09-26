import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function FeedBackCompletion() {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleCreateNew = () => {
        dispatch({ type: 'CLEAR_REVIEWS' })
        history.push('/')
    }
    return(
        <div>
            <h1>You Have Submitted Your Review!!</h1>
            <br/>
            <h3>If You Would Like To Submit A New Review</h3>
            <h3>Click the Create New Review Button</h3>
            <br/>
            <button onClick = {handleCreateNew}>Create New Review</button>
        </div>
    )
}

export default FeedBackCompletion;