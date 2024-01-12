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
  import { useContext } from "react";
  import { AuthContext } from "./context/AuthContext.js";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Register/>} />
          <Route path="/login" element={user ? <Redirect to="/"/> : <Login />} />
          <Route path="/register" element={user ? <Redirect to="/"/> : <Register />} />
          <Route path="/profile/:username" element={<Profile />} />

        </Routes>
    </Router>
  );    
}

export default App