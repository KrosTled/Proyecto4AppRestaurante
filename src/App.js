// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Inicio from './components/inicio';
import Menu from './components/menu';



function App() {
 
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Inicio />}/>
        <Route path='/Menu' element={<Menu/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
