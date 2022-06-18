import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Rasmla from './components/Rasmla'
import Carusel from './components/Carusel'
import Icons from './components/Icons'
import Sale from './components/Sale'
import { Outlet } from 'react-router-dom'
import Kiyimla from './components/Kiyimla'
import Aksesuar from './components/Aksesuar'
import Modal from './Modal'

function App() {
  return (
    <div className="container">
      <Navbar className="navbar"/>
      <Sale/>
      

    </div>
  );
}

export default App;
