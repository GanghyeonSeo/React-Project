import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import SinglePost from "./SinglePost";

const PostBlock = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-bottom: 25px;
  h1 {
    font-family: NotoSansDisplay;
    font-size: 35px;
    text-align: center;
  }
  h2 {
    font-family: sans-serif;
    font-size: 30px;
    text-align: center;
  }
  p {
    margin: 0 auto;
    width: 40vw;
    font-family: NotoSansDisplay;
    font-size: 20px;
  }
  ul {
    padding-left: 0px;
  }
`;

function Posts() {
  const [posts, setPosts] = useState(null);
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      setError(null);
      setPosts(null);
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    } catch (e) {
      setError(e);
    } finally {
    }
    setLoading(false);
  };

  const fetchAlbum = async () => {
    try {
      setError(null);
      setAlbum(null);
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      setAlbum(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
    fetchAlbum();
  }, []);

  useEffect(() => {
    if (album && posts) {
      const newAlbum = posts.map((singlePost, index) => {
        return {
          ...singlePost,
          album: album[singlePost.id - 1]
        };
      });
      setPosts(newAlbum);
    }
  }, [album]);

  if (loading) return <div style={{ padding: 10, margin: 10 }}>로딩..</div>;
  if (error) return <div style={{ padding: 10, margin: 10 }}>에러</div>;
  if (!posts) return null;

  return (
    <>
      <PostBlock>
        {posts.map(post => (
          <SinglePost key={post.id} post={post}></SinglePost>
        ))}
      </PostBlock>
    </>
  );
}

export default Posts;
