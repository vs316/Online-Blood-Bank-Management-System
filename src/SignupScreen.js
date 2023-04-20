import React, { useRef, useState } from "react";
import Nav from "./Nav";
import "./SignupScreen.css";
import { auth, db } from "./firebase";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check eligibility based on the answers
    if (age >= 18 && weight >= 50 && bloodGroup !== "") {
      setShowPopup(false);

      // Store user info in Firebase
      db.collection("users").add({
        name: name,
        age: age,
        weight: weight,
        bloodGroup: bloodGroup,
      });
    } else {
      alert("Sorry, you are not eligible to donate blood.");
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
            className="signupScreen__link"
            onClick={() => setShowPopup(true)}
          >
            Sign up now by answering a few questions.
          </button>
        </h4>
      </form>
      {showPopup && (
        <SignupPopup
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

// Define a new component for the pop-up modal
function SignupPopup({
  isOpen,
  setIsOpen,
  showPopup,
  handleFormSubmit,
  setName,
  setAge,
  setWeight,
  setBloodGroup,
  bloodGroup,
  age,
  weight,
  name,
}) {
  return (
    isOpen && (
      <div className="signupScreen__overlay">
        <div className="signupScreen__popup">
          <form onSubmit={handleFormSubmit}>
            <h2>Are you eligible to donate blood?</h2>
            <label>
              Name:
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                required
                min="18"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label>
              Weight (kg):
              <input
                type="number"
                required
                min="50"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
            <label>
              Blood Group:
              <select
                required
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option value="">--Please select--</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </label>
            <p>
              Have you already given blood in the last 16 weeks?
              <input type="radio" name="question1" value="yes" required /> Yes
              <input type="radio" name="question1" value="no" required /> No
            </p>

            <p>
              Have you got a chesty cough, sore throat or active cold sore?
              <input type="radio" name="question2" value="yes" required /> Yes
              <input type="radio" name="question2" value="no" required /> No
            </p>

            <p>
              Are you pregnant or breastfeeding?
              <input type="radio" name="question3" value="yes" required /> Yes
              <input type="radio" name="question3" value="no" required /> No
            </p>

            <p>
              Do you have or have you ever had:
              <br />
              a. Chest pains, heart disease/surgery or a stroke?{" "}
              <input type="radio" name="question4" value="yes" required /> Yes
              <input type="radio" name="question4" value="no" required /> No
              <br />
              b. Lung disease, tuberculosis or asthma?{" "}
              <input type="radio" name="question5" value="yes" required /> Yes
              <input type="radio" name="question5" value="no" required /> No
              <br />
              c. Cancer, a blood disease, an abnormal bleeding disorder, or a
              bleeding gastric ulcer or duodenal ulcer?{" "}
              <input type="radio" name="question6" value="yes" required /> Yes
              <input type="radio" name="question6" value="no" required /> No
              <br />
              d. Diabetes, thyroid disease, kidney disease, epilepsy (fits)?
              <input type="radio" name="question7" value="yes" required /> Yes
              <input type="radio" name="question7" value="no" required /> No
              <br />
              e. Chagas disease, babesiosis, HTLVI/II or any other chronic
              infectious disease?{" "}
              <input type="radio" name="question8" value="yes" required /> Yes
              <input type="radio" name="question8" value="no" required /> No
            </p>
            <p>
              In the past 12 months:
              <br />
              Have you been under a doctor’s care, undergone surgery, or a
              diagnostic procedure, suffered a major illness, or been involved
              in a serious accident?{" "}
              <input type="radio" name="question9" value="yes" required /> Yes
              <input type="radio" name="question9" value="no" required /> No
            </p>
            <p>
              Have you ever had yellow jaundice (excluding jaundice at birth),
              hepatitis or liver disease or a positive test for hepatitis?{" "}
              <input type="radio" name="question10" value="yes" required /> Yes
              <input type="radio" name="question10" value="no" required /> No
              <br />
              a. In the past 12 months, have you had close contact with a person
              with yellow jaundice or viral hepatitis, or have you been given a
              hepatitis B vaccination?{" "}
              <input type="radio" name="question11" value="yes" required /> Yes
              <input type="radio" name="question11" value="no" required /> No
              <br />
              b. Have you ever had hepatitis B or hepatitis C or think you may
              have hepatitis now?{" "}
              <input type="radio" name="question12" value="yes" required /> Yes
              <input type="radio" name="question12" value="no" required /> No
              <br />
              c. In the past 12 months, have you been tattooed, (y/n) had ear or
              body piercing, acupuncture, circumcision or scarification,
              cosmetic treatment?{" "}
              <input type="radio" name="question13" value="yes" required /> Yes
              <input type="radio" name="question13" value="no" required /> No
            </p>
            <p>
              In the past 12 months, have you or your sexual partner received a
              blood transfusion?{" "}
              <input type="radio" name="question14" value="yes" required /> Yes
              <input type="radio" name="question14" value="no" required /> No
            </p>
            <p>
              Have you or close relatives had an unexplained neurological
              condition or been diagnosed with Creutzfeldt-Jacob Disease or ‘mad
              cow disease’?{" "}
              <input type="radio" name="question15" value="yes" required /> Yes
              <input type="radio" name="question15" value="no" required /> No
            </p>
            <p>
              Have you:
              <br />
              a. Ever had malaria or an unexplained fever (y/n) associated with
              travel?{" "}
              <input type="radio" name="question16" value="yes" required /> Yes
              <input type="radio" name="question16" value="no" required /> No
              <br />
              b. Visited any malarial area in the last 12 months?{" "}
              <input type="radio" name="question17" value="yes" required /> Yes
              <input type="radio" name="question17" value="no" required /> No
            </p>
            <p>
              Is your reason for donating blood to undergo an HIV test?{" "}
              <input type="radio" name="question18" value="yes" required /> Yes
              <input type="radio" name="question18" value="no" required /> No
            </p>
            <p>
              Have you ever been tested for HIV?
              <input type="radio" name="question19" value="yes" required /> Yes
              <input type="radio" name="question19" value="no" required /> No
            </p>
            <p>
              Have you suffered from a sexually transmitted disease (STD): e.g.
              syphilis, gonorrhoea, genital herpes, genital ulcer, VD, or
              ‘drop’?
              <input type="radio" name="question20" value="yes" required /> Yes
              <input type="radio" name="question20" value="no" required /> No
            </p>
            <p>
              Have you ever injected yourself or been injected with illegal or
              non-prescribed drugs including body-building drugs or cosmetics
              (even if this was only once or a long time ago)?
              <input type="radio" name="question21" value="yes" required /> Yes
              <input type="radio" name="question21" value="no" required /> No
            </p>
            <p>
              Have you ever been refused as a blood donor, or told not to donate
              blood?
              <input type="radio" name="question22" value="yes" required /> Yes
              <input type="radio" name="question22" value="no" required /> No
            </p>
            <button type="submit">Submit</button>
          </form>
          ) : (
          <div>
            <h2>Congratulations! You are eligible to donate blood.</h2>
            <p>
              Please proceed to the nearest blood donation center to donate
              blood.
            </p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      </div>
    )
  );
}
