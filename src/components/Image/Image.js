import React, { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";

const StyledImage = styled.div`
  border-radius: 20px;
  border-color: white solid;
  border-width: 60px;
`;

const Image = ({ nasaURL }) => {
  return (
    <StyledImage>
      <img src={nasaURL} alt="Nasa Photo Of The Day" />
    </StyledImage>
  );
};
export default Image;
