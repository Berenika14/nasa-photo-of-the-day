import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const StyledCopyright = styled.div`
  color: white;
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
