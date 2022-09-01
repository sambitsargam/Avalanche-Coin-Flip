import React from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";
import '../index.css'

export function ConnectWallet({ connectWallet, networkError, dismiss }) {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {networkError && (
            <NetworkErrorMessage 
              message={networkError} 
              dismiss={dismiss} 
            />
          )}
        </div>
        <div className="col-6 p-4 text-center">
          <h1>Please connect to your wallet.</h1>
          <button
            className="btn btn-primary"
            type="button"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
