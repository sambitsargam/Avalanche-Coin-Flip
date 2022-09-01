import React from "react";
import '../index.css'

import Confetti from "react-confetti";

export function WinnerSplash ({ dismiss }) {
    return (
        <div>
        <div className="splash">
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                opacity={0.9}
                gravity={0.7}
            />
        </div>
        <div className="alert alert-danger" role="alert">
        <h1>You win 🎉</h1>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={dismiss}
      >
        <span aria-hidden="true">&times;</span>
      </button>
        </div>
        
        </div>
      );
}
  