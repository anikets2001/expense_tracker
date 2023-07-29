import React from "react";

const Expenses = () => {
  return (
    <div className="your-expenses-wrapper">
      <div className="balance">
        <h2>Your Balance</h2>
        <h4>$0.00</h4>
      </div>
      <div className="income-expense-tracker">
        <div className="left">
          <h4>Income</h4>
          <h2>$0.00</h2>
        </div>
        <div className="right">
          <h4>Expense</h4>
          <h2>$0.00</h2>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
