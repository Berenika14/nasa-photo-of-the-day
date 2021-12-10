import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const StyledExplanation = styled.div`
  color: red;
  width: 55%;
  margin: 0 auto;
  text-align: center;
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
