import React, { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";

const StyledImage = styled.img`
  border-radius: 20px;
  border-style: solid;
  border-color: purple;
  border-width: 0.5px;
`;

const Image = ({ nasaURL }) => {
  return <StyledImage src={nasaURL} alt="Nasa Photo Of The Day" />;
};
export default Image;

// const Image = ({ nasaURL }) => {
//   return (
//     <StyledImage>
//       <img src={nasaURL} alt="Nasa Photo Of The Day" />
//     </StyledImage>
//   );
// };
// export default Image;
