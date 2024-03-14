import { calculateInvestmentResults } from "../util/investment";
export default function Table({ dataObj }) {
  // console.log(dataObj)
  const result = calculateInvestmentResults(dataObj);
  console.log(result);
  return (
    <p>Results</p>
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Year</th>
    //       <th>Investment Value</th>
    //       <th>Interest(year)</th>
    //       <th>Total Interest</th>
    //       <th>Invested Capital</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       {annualData.map((data) => {
    //         return (
    //           <>
    //             <td>{data.year}</td>
    //             <td></td>
    //             <td>{data.interest}</td>
    //             <td></td>
    //             <td></td>
    //           </>
    //         );
    //       })}
    //     </tr>
    //   </tbody>
    // </table>
  );
}
