import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function FeedBackForm1() {
    const [ feeling, setFeeling ] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const submitFeeling = (event) => {
        dispatch({ type: 'SET_FEELING', payload: { feeling: feeling }})
    }

    history.push('/')

    return(
        <div className='App'>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
            </header>
            <h1>How are you feeling today?</h1>

            <br/>

            <form onSubmit  = { submitFeeling } >
                <input 
                    required
                    placeholer = '1-5'
                    value = {feeling}
                    onchange={ (event) => setFeeling( event.target.value )}
                />

                <button type="number">Next</button>
            </form>

            {/* <h3>Feeling?</h3>
            <input type = 'number' min = '1' max = '5'/>
            <button onClick={submitFeeling}>NEXT</button> */}
        </div>
    )
}

export default FeedBackForm1;