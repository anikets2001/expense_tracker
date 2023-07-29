import React from "react";

const AddNew = () => {
  return (
    <div className="add-new-wrapper">
      <div className="top">
        <h4>Add New Interaction</h4>
        <h2>Text</h2>
        <input type="text" placeholder="Enter Text..." />
      </div>

      <div className="bottom">
        <h2>Amount</h2>
        <p>(Negetive - expense, Positive - Income)</p>
        <div className="amount-wrapper">
          <span>0</span>
        </div>
        <button>Add Transaction</button>
      </div>
    </div>
  );
};

export default AddNew;
