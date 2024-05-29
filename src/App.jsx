import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  // Debugging: Log the state
  console.log("App Component - userInput state:", userInput);

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    // Debugging: Log the changes
    console.log(`handleChange called - inputIdentifier: ${inputIdentifier}, newValue: ${newValue}`);

    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter valid data</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
