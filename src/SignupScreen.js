import React, { useRef } from "react";
import { auth } from "./firebase";
import "./SignupScreen.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function LoginScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  /* const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  }; */
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <Nav />
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New Here? </span>
          <Link to="./newsignup">
            <span className="signupScreen__link">
              Sign up now by answering a few questions.
            </span>
          </Link>
        </h4>
      </form>
    </div>
  );
}

export default LoginScreen;
