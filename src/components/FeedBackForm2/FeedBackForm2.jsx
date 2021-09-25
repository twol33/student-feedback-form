import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function FeedBackForm2() {
    const [ understanding, setUnderstanding ] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const submitUnderstanding = event => {
        event.preventDefault();

        dispatch({ type:'SET_UNDERSTAND', payload: { understanding: understanding }})

        history.push('/3')
    }

    return(
        <section>
            <h1>How well are you understanding the content?</h1>
            <h3>Understanding?</h3>
            <form onSubmit  = { submitUnderstanding } >
                <input 
                    required
                    placeholer = '1-5'
                    value = {understanding}
                    onChange={ (event) => setUnderstanding( event.target.value )}
                />

                <button>Next</button>
            </form>
        </section>
    )

}
export default FeedBackForm2;