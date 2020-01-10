import React from "react";
import styled from "styled-components";

const PostContainerBlock = styled.div`
  width: 80vw;
  height: 100%;

  margin: 0 auto;
  background: white;
  border-radius: 8px;
`;

function PostContainer({ children }) {
  return <PostContainerBlock>{children}</PostContainerBlock>;
}

export default PostContainer;
