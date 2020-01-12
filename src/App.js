import React from "react";
import Posts from "./components/Posts";
import styled from "styled-components";

const PostContainer = styled.div`
  width: 80vw;
  height: 100%;

  margin: 0 auto;
  background: white;
  border-radius: 8px;
`;

const PostHead = styled.div`
  img {
    width: 80vw;
    height: 100%;
  }
`;

function App() {
  return (
    <>
      <PostContainer>
        <PostHead>
          <img src="banner.png" alt="사진"></img>
        </PostHead>
        <Posts />
      </PostContainer>
    </>
  );
}

export default App;
