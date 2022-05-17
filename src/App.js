import './App.css';
import Navbar from './Page/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Login from './Page/Login/Login';
import Appointment from './Page/Appointment/Appointment';
import SignUp from './Page/SignUp/SignUp';
import RequireAuth from './Page/Login/RequireAuth';


function App() {
  return (

    <div className="max-w-7xl mx-auto">
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<RequireAuth>
          <Appointment />
        </RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />

      </Routes>
    </div>
  );
}

export default App;
