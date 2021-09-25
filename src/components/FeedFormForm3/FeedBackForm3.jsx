import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function FeedBackForm3() {
    const [ support, setSupport ] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const submitSupport = event => {
        event.preventDefault();

        dispatch({ type:'SET_SUPPORT', payload: { support: support }})

        history.push('/4')
    }

    return(
        <section>
            <h1>How well are you being supported?</h1>
            <h3>Support?</h3>
            <form onSubmit  = { submitSupport } >
                <input 
                    required
                    placeholer = '1-5'
                    value = {support}
                    onChange={ (event) => setSupport( event.target.value )}
                />

                <button>Next</button>
            </form>
        </section>
    )

}
export default FeedBackForm3;