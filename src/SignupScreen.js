import React, { useRef, useState } from "react";
import Nav from "./Nav";
import SignupPopup from "./SignupPopup";
import "./SignupScreen.css";
import { auth, db } from "./firebase";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const signIn = async (e) => {
    e.preventDefault();

    try {
      const authUser = await auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(authUser);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check eligibility based on the answers
      if (age >= 18 && weight >= 50 && bloodGroup !== "") {
        // Store user info in Firebase
        await db.collection("users").add({
          name: name,
          age: age,
          weight: weight,
          bloodGroup: bloodGroup,
        });

        setIsPopupOpen(false);
      } else {
        alert("Sorry, you are not eligible to donate blood.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
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
          <button
            type="button"
            className="signupScreen__link"
            onClick={() => setIsPopupOpen(true)}
          >
            Sign up now by answering a few questions.
          </button>
        </h4>
      </form>
      {isPopupOpen && (
        <SignupPopup
          onClose={() => setIsPopupOpen(false)}
          setIsPopupOpen={setIsPopupOpen}
          handleFormSubmit={handleFormSubmit}
          setName={setName}
          setAge={setAge}
          setWeight={setWeight}
          setBloodGroup={setBloodGroup}
          bloodGroup={bloodGroup}
          age={age}
          weight={weight}
          name={name}
        />
      )}
    </div>
  );
}

export default SignupScreen;
