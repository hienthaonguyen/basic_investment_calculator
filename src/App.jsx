import React, { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import TableResult from "./components/TableResult"

function App() {
  // since we needed input values for the result, we will lift the state up to the App component
  const [inputValues, setInputValues] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const handleUserInputChange = (e) => {
    setInputValues({
      ...inputValues,
      // plus sign is used to convert the value to a number
      [e.target.name]: +e.target.value
    });
  };

  const isValidInput = inputValues.duration > 0
  return (
    <>
      <Header />
      <UserInput inputValues={inputValues}handleInputChange={handleUserInputChange}/>
      {isValidInput ? <TableResult inputData={inputValues}/> : <p className="center">Duration must be greater than 0</p>}
    </>

  )
}

export default App
