import React from "react";

import '../index.css'

export function WaitingForTransactionMessage() {
  return (
    <div className="alert alert-info" role="alert">
      <h3>Flipping Your Coin...</h3>
    </div>
  );
}
