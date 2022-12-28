import './App.css';
import CreateNote from './main/CreateNote';
import Note from './components/Note';
import Register from './main/Register';
function App() {
  return (
    <div className="App">
      <CreateNote/>
      <Note/>
      <Register/>
    </div>
  );
}

export default App;
