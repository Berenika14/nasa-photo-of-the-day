import React, { useState } from "react";
import "./Explanation.css";

const Explanation = (props) => {
  const { imgExplanation } = props;
  return (
    <div>
      <h3> {imgExplanation}</h3>
    </div>
  );
};

export default Explanation;
