import React from "react";

import '../index.css'

export function LoserMessage({ dismiss }) {
  return (
    <div className="alert alert-danger" role="alert">
      <div>
      <h1>Better luck next time </h1>
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
      <div className="alert alert-danger" role="alert">
      <h1><b>You Lost</b></h1>
      </div>
    </div>
  );
}
