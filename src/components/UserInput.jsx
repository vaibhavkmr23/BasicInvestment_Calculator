export default function UserInput({ onFieldChange, dataValue }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>INITIAL INVESTMENT</label>
            <input
              type="number"
              required
              value={dataValue.initialInvestment}
              onChange={(e) => {
                onFieldChange("initialInvestment", e.target.value);
              }}
            />
          </p>
          <p>
            <label>ANNUAL INVESTMENT</label>
            <input
              type="number"
              required
              value={dataValue.annualInvestment}
              onChange={(e) => {
                onFieldChange("annualInvestment", e.target.value);
              }}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>EXPECTED RETURN</label>
            <input
              type="number"
              required
              value={dataValue.expectedReturn}
              onChange={(e) => {
                onFieldChange("expectedReturn", e.target.value);
              }}
            />
          </p>
          <p>
            <label>DURATION</label>
            <input
              type="number"
              required
              value={dataValue.duration}
              onChange={(e) => {
                onFieldChange("duration", e.target.value);
              }}
            />
          </p>
        </div>
      </section>
    </>
  );
}
