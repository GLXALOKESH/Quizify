import React from "react";

const ErrorPopUp = ({ message }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-red-500 text-white text-center">
      {message}
    </div>
  );
};

export default ErrorPopUp;
