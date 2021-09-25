import { useHistory } from 'react-router-dom';

function FeedBackCompletion() {
    const history = useHistory();

    const handleCreateNew = () => {
        history.push('/')
    }
    return(
        <div>
            <h1>You Have Submitted Your Review!!</h1>
            <h2>If You Would Like To Submit A New Review</h2>
            <br/>
            <h2>Click the Create New Review Button</h2>
            <br/>
            <button onClick = {handleCreateNew}>Create New Review</button>
        </div>
    )
}

export default FeedBackCompletion;