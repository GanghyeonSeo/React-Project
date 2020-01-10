import React from "react";
import styled from "styled-components";

const PostHeadBlock = styled.div`
  img {
    width: 80vw;
    height: 100%;
  }
`;

function PostHead() {
  return (
    <PostHeadBlock>
      <img src="banner.png" alt="사진"></img>
    </PostHeadBlock>
  );
}

export default PostHead;
