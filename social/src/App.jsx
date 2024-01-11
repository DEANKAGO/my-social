import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
  } from "react-router-dom";

function App() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:username" element={<Profile />} />

        </Routes>
    </Router>
  );    
}

export default App