// TASK-1
import BookList from './components/BookList';
import "./App.css"

// TASK-2
import UserProfile from './components/UserProfile';

// TASK-3
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* TASK-1 */}
      <BookList/>
      {/* TASK-2 */}
      <UserProfile name = "Haris Rana" location = "Uganda" profileImage = ":-)"/>
      {/* TASK-3 */}
      <Message isSuccess = 'true' />
      {/* TASK-4 */}
      <button onClick={ () => { alert("Sawagat ni karo gy Humara)") } }> Button Alert </button>
      <button onClick={ () => { console.log("This is the function handler"); } }> Button Console </button>
    </div> 
  );
}

export default App;
