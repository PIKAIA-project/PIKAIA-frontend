import React from "react";
import "./ErrorModal.css";

function ErrorModal({ type, message }) {
  if (type = "Success") {
    return (
      <div className="modal success-modal">
        <strong>Success</strong>
        <p>{message}</p>
      </div>
    );
  }
  if (type = "Error") {
    return (
      <div className="modal error-modal">
        <strong>Error</strong>
        <p>{message}</p>
      </div>
    );
  }
  if (type = "Warning") {
    return (
      <div className=" warning-modal">
        <strong>Warning</strong>
        <p>{message}</p>
      </div>
    );
  }
}

export default ErrorModal;
