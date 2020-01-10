import React from "react";
import PostContainer from "./components/PostContainer";
import PostHead from "./components/PostHead";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <PostContainer>
        <PostHead />
        <Posts />
      </PostContainer>
    </>
  );
}

export default App;
