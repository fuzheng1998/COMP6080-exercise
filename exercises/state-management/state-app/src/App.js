import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App for State management</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code>.
        </p>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/news/how-to-manage-state-in-your-react-apps/#:~:text=Local%20state%20is%20perhaps%20the,including%20primitive%20and%20object%20values."
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React State
        </a>
      </header>
      <VoteCounter/>
    </div>
  );
}

const initialState = { votes: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'upvote':
      return {votes: state.votes + 1};
    case 'downvote':
      return {votes: state.votes - 1};
    default:
      throw new Error();
  }
}
function VoteCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const upvoteHandler = () => dispatch({ type: "upvote" });
  return (
    <>
    <h1>Value {state.votes}</h1>
    {/* todo upvote and downvote is recognized 
    type error is weird
    */}
    <button onClick={upvoteHandler}>Upvote</button>
      <button onClick={() => dispatch({type: 'downvote'})}>Downvote</button>
    </>
    
  )
  
}
export default App;
