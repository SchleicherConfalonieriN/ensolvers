import './App.css';
import CreateNote from './main/CreateNote';
import EditNote from './main/EditNote.js'
import Register from './main/Register';
import Login from './main/Login';
import Home from './main/Home';
import Archived from './main/Archived';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">

<BrowserRouter>
<Routes>
<Route path='/' element={ <Login/>} />
<Route path='/home' element={ <Home/>} />
<Route path='/home/archived' element={ <Archived/>} />
<Route path='/register' element={ <Register/>} />
<Route path='/create' element={ <CreateNote/>} />
<Route path='/edit/:id' element={ <EditNote/>} />
</Routes>
</BrowserRouter>

      

    </div>
  );
}

export default App;
