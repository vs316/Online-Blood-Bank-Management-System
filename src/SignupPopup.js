import React, { useState } from "react";
import "./SignupPopup.css";
function SignupPopup(props) {
  const {
    onClose,
    handleFormSubmit,
    setName,
    setAge,
    setWeight,
    setBloodGroup,
    bloodGroup,
    age,
    weight,
    name,
  } = props;

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/canDonate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        weight,
        bloodGroup,
      }),
    });

    const data = await response.json();

    if (data.error) {
      setErrorMessage(data.error);
    } else {
      handleFormSubmit(e);
      onClose();
    }
  };

  return (
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
          </p>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPopup;
