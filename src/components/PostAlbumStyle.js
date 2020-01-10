import React from "react";
import styled from "styled-components";

const AlbumBlock = styled.div`
  margin: 0 auto;
`;

function Album({ children }) {
  return <AlbumBlock>{children}</AlbumBlock>;
}

export default Album;
