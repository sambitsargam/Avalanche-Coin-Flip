import React from "react";

import '../index.css'

/*
* Component to take in the users bet amount, guess, and submission
*/
export function Flip({ flip }) {
  // state that holds the forms data
  const [formData, setFormData] = React.useState({
        bet: "", 
        amount: 0, 
    }
  )
  
  // update the state when the form is changed
  function handleChange(event) {
      const {name, value} = event.target
      setFormData(prevFormData => {
          return {
              ...prevFormData,
              [name] : value
          }
      })
  }

  // when the user submits the form, flip the coin
  function handleSubmit(event) {
    event.preventDefault();

    if (formData.bet && formData.amount) {
      flip(formData.bet, formData.amount);
    } else {
      window.alert("Please set wager amount and your guess");
    }
  }

  return (
    <div className="form-div">
      <h1>Flip a Coin</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Amount of AVAX to bet:</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            placeholder="1"
            onChange={handleChange}
            value={formData.amount}
            required
          />
        </div>
        <hr/>
        <div className="form-group radio-toolbar">
            <h4>Select Heads or Tails</h4>
            <div>
              <input type="radio" id="heads" name="bet" value="1" checked={formData.bet === "1"} onChange={handleChange}/>
              <label htmlFor="heads">Heads</label>
              
              <input type="radio" id="tails" name="bet" value="0" checked={formData.bet === "0"} onChange={handleChange}/>
              <label htmlFor="tails">Tails</label>
            </div>  
        </div>

        <div className="form-group">
          <input className="flip btn btn-primary" type="submit" value="Flip!" />
        </div>
      </form>
    </div>
  );
}
