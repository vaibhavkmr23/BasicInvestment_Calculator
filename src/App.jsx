import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";
import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const dataObj = {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  };
  const result = calculateInvestmentResults(dataObj);

  function handleInitialInvestChange(e) {
    // console.log(e.target.value)
    setInitialInvestment(e.target.value);
    console.log(initialInvestment);
  }
  function handleAnnualInvestChange(e) {
    // console.log(e.target.value)
    setAnnualInvestment(e.target.value);
    console.log(annualInvestment);
  }
  function handleExpectedReturnChange(e) {
    // console.log(e.target.value)
    setExpectedReturn(e.target.value);
    console.log(expectedReturn);
  }
  function handleDurationChange(e) {
    // console.log(e.target.value)
    setDuration(e.target.value);
    console.log(duration);
  }

  return (
    <>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <UserInput
            type="number"
            className="input-group"
            value={initialInvestment}
            inputValue="INITIAL INVESTMENT"
            onKeyChange={handleInitialInvestChange}
          />
          <UserInput
            type="number"
            value={annualInvestment}
            className="input-group"
            inputValue="ANNUAL INVESTMENT"
            onKeyChange={handleAnnualInvestChange}
          />
        </div>
        <div className="input-group">
          <UserInput
            type="number"
            value={expectedReturn}
            className="input-group"
            inputValue="EXPECTED RETURN"
            onKeyChange={handleExpectedReturnChange}
          />
          <UserInput
            type="number"
            value={duration}
            className="input-group"
            inputValue="DURATION"
            onKeyChange={handleDurationChange}
          />
        </div>
      </section>

      <div id="result">
        <Table annualData={result} dataObj={dataObj}/>
      </div>
    </>
  );
}

export default App;
