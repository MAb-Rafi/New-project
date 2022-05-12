import './App.css';
import Navbar from './Page/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Login from './Page/Login/Login';

function App() {
  return (

    <div className="App">
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
