import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AlbumSwiper from "./AlbumSwiper";
import axios from "axios";

const PostAlbumTitle = styled.div`
  h3 {
    font-family: NotoSansDisplay;
    color: #999999;
    font-weight: 300;
    font-size: 25px;
    text-align: center;
  }
`;

const AlbumStyle = styled.div`
  margin: 0 auto;
`;

const defaultAlbum = {
  userId: null,
  id: null,
  title: null
};

function PostAlbum({ album = defaultAlbum }) {
  const { userId, id, title } = album;

  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPhotos = async albumId => {
    try {
      setError(null);
      setPhotos(null);
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?albumId=" + albumId
      );
      setPhotos(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      fetchPhotos(id);
    }
  }, [id]);

  if (loading) return <div style={{ padding: 10, margin: 10 }}>로딩...</div>;
  if (error) return <div style={{ padding: 10, margin: 10 }}>에러</div>;
  if (!photos) return null;

  return (
    <>
      <PostAlbumTitle>
        <h3>{title}</h3>
      </PostAlbumTitle>
      <AlbumStyle>
        <AlbumSwiper photo={photos} />
      </AlbumStyle>
    </>
  );
}

export default PostAlbum;
