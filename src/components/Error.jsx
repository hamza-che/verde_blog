import React from "react";

const Error = ({ errorMsg }) => {
  return (
    <h2 className="text-2xl font-bold text-red-600 mx-auto text-center">
      {errorMsg}
    </h2>
  );
};

export default Error;
