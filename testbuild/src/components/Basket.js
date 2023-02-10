import React, { useState } from "react";
import Navbar from "./Navbar";

// Set state for the total, interest, months and payment
function Basket() {
  const [total, setTotal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [months, setMonths] = useState(0);
  const [payment, setPayment] = useState(0);

  // Calculate the interest and payment
  // The interest is 20% of the total
  // Values are string so I had to convert them to numbers
  const calculate = () => {
    let interest = (total * 0.2) / months; // 20% interest
    let payment = total + interest;
    setInterest(Number(interest)); // 2 decimal places
    //console.log(typeof payment);
    setPayment(Number(payment)); // The values are strings
  };

  return (
    <>
      <Navbar />
      <div className={"p-5 m-5"}>
        <h1>Basket 🛒</h1>
        <br />
        <input
          type="number"
          placeholder="Total"
          onChange={(e) => setTotal(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Months"
          onChange={(e) => setMonths(Number(e.target.value))}
        />
        <button onClick={calculate}>Calculate</button>
        <br />
        <hr />
        <p>Total: {total}</p>
        <p>Interest: {interest.toFixed(2)}%</p>
        <p>Months: {months}</p>
        <p>Payment: {payment.toFixed(2)}</p>
        <h1>How much do you want to borrow?</h1>

        <br />
        <p>
          You pay £{interest.toFixed(2)} each month for {months} Months. Your
          total payment will be £{payment.toFixed(2)}
        </p>
      </div>
    </>
  );
}
// for example: 100 + 100 = 100100
// 100 + 100 = 200
// Taken from lecture examples.
// <input type="number" placeholder="Total" onChange={(e) => setTotal(e.target.value)} />
// This will convert the string to a number
export default Basket;
