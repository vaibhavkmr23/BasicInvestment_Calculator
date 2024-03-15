import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";

const DATA_OBJ = {
  initialInvestment: 100,
  annualInvestment: 200,
  expectedReturn: 2,
  duration: 2,
};

function App() {
  // manage with single state

  const [investmentData, setInvestmentData] = useState(DATA_OBJ);

  function handleChange(key, value) {
    setInvestmentData((prevData) => {
      return {
        ...prevData,
        [key]: +value,
      };
    });
  }

  const inputIsValid = investmentData.duration >= 1;
  return (
    <>
      <Header />
      <UserInput dataValue={investmentData} onFieldChange={handleChange} />
      <div>
        {!inputIsValid && (
          <p className="center">Please select a Valid Duration</p>
        )}
        {inputIsValid && <Table dataObj={investmentData} />}
      </div>
    </>
  );
}

export default App;
