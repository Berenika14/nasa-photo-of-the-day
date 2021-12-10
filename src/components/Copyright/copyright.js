import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const StyledCopyright = styled.div`
  color: purple;
  font-style: italic;
`;

const CopyRight = (props) => {
  const { copyRightOfImg } = props;
  return (
    <StyledCopyright>
      <p> Copyright: {copyRightOfImg}</p>
    </StyledCopyright>
  );
};

export default CopyRight;
