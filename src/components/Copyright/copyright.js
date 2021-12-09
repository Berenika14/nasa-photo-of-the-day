import React, { useState } from "react";
import "./Copyright.css";

const CopyRight = (props) => {
  const { copyRightOfImg } = props;
  return (
    <div>
      <p> Copyright: {copyRightOfImg}</p>
    </div>
  );
};

export default CopyRight;
