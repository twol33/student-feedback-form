import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function FeedBackForm1() {
    const [ feeling, setFeeling ] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const submitFeeling = event => {
        event.preventDefault();

        dispatch({ type:'SET_FEELING', payload: { feeling: feeling }})

        history.push('/2')
    }

    

    return(
        <section>
            <h1>How are you feeling today?</h1>
            <h3>Feeling?</h3>
            <form onSubmit  = { submitFeeling } >
                <input 
                    required
                    placeholer = '1-5'
                    value = {feeling}
                    onchange={ (event) => setFeeling( event.target.value )}
                />

                <button type="number">Next</button>
            </form>
        </section>
    )

}

export default FeedBackForm1;

{/* <h3>Feeling?</h3>
            <input type = 'number' min = '1' max = '5'/>
            <button onClick={submitFeeling}>NEXT</button>
    ) */}