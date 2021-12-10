import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`;

const StyledExplanation = styled.div`
  color: purple;
  width: 56%;
  margin: 0 auto;
  margin-top: 2em;
  text-align: center;

  opacity: 0;
  transform: scale(0) rotateZ(180deg);
  animation: ${kf} 0.3s ease-in-out forwards;
`;

const Explanation = (props) => {
  const { imgExplanation } = props;
  return (
    <StyledExplanation>
      <h3> {imgExplanation}</h3>
    </StyledExplanation>
  );
};

export default Explanation;
