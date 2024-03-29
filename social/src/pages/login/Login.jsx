import React from 'react';
import { useRef, useContext } from "react";
import './login.css'
import { AuthContext } from '../../context/AuthContext';
import { loginCall } from "../../apiCalls.jsx"; 
import CircularProgress from '@material-ui/core/CircularProgress';

const Login = () => {

  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch 
    );
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
            <input 
              placeholder="Email" 
              type="email" 
              id='email'
              name='email' 
              autoComplete='email'
              className="loginInput" 
              required
              ref={email}
            />
            <input 
              placeholder="Password" 
              type="password" 
              minLength="6"
              id='password'
              name='password'
              autoComplete='current-password'
              required
              className="loginInput" 
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                < CircularProgress  />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress  />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login