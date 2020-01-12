import React from "react";
import PostComments from "./PostComment";
import PostAlbum from "./PostAlbum";
import styled from "styled-components";

const TopBlock = styled.div`
  padding-top: 20px;
  padding-bottom: 35px;
  margin-bottom: 50px;
  width: 80vw;
  background: #f3f3f3;
`;

const DescriptionBlock = styled.div`
  margin: auto;
  width: 80vw;
  padding-top: 50px;
  background: white;
  .Description {
    color: #999999;
    margin-bottom: 5px;
  }
`;

export default function SinglePost({ post }) {
  const { id, title, body, album } = post;

  return (
    <>
      <TopBlock>
        <h1>{title}</h1>
        <PostAlbum album={album} />
      </TopBlock>
      <DescriptionBlock>
        <p className="Description">Description</p>
        <p>{body}</p>
        <PostComments id={id} />
      </DescriptionBlock>
    </>
  );
}
