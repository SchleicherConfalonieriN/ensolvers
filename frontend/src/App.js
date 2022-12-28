import './App.css';
import CreateNote from './main/CreateNote';
import Note from './components/Note';
import Register from './main/Register';
import Login from './main/Login';

function App() {
  return (
    <div className="App">
      <Login/>
      <CreateNote/>
      <Note/>
      <Register/>
    </div>
  );
}

export default App;
