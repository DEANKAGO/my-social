import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigateTo = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      // Use setCustomValidity on the input element
      passwordAgain.current.setCustomValidity( "Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("http://127.0.0.1:8800/api/auth/register", user);
        navigateTo("login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" id='username' name='username' autoComplete='username' className="loginInput" ref={username} required/>
            <input placeholder="Email" id='email' name='email' autoComplete='email' className="loginInput" ref={email} type="email" required/>
            <input placeholder="Password" id='password' name='password' autoComplete='current-password' className="loginInput" type='password' ref={password} minLength="6" required/>
            <input placeholder="Password Again" className="loginInput" ref={passwordAgain} type="password" required />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register