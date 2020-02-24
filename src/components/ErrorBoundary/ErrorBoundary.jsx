import React from "react";

function ErrorBoundary(props) {
  const {message} = props;
  return (
    <div className="card-box card-box--error">
      <div className="error-message">Error: {message}</div>
    </div>
  );
}

export default ErrorBoundary;
