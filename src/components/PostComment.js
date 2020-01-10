import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CommentsBlock = styled.div`
  marign: auto;
  width: 80vw;

  .CommentsName {
    margin-bottom: 10px;
    padding-left: 10px;
  }
  .CommentsEmail {
    margin-bottom: 50px;
    color: #d8d8d8;
    padding-left: 10px;
  }
  div {
    margin: 0 auto;
    width: 40vw;
    border-left: 3px solid #e6bc78;
  }
  .CommentsBody {
    margin-bottom: 20px;
    color: #999999;
    padding-left: 10px;
  }
`;

function PostComments({ id }) {
  const [postcomments, setPostComments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPostComments = async () => {
    try {
      setError(null);
      setPostComments(null);
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments?postId=" + id
      );
      setPostComments(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  return (
    <>
      <button
        style={{
          width: 100,
          height: 30,
          margin: 30,
          color: "#e6bc78",
          background: "white"
        }}
        onClick={fetchPostComments}
      >
        Reply (5)
      </button>
      {loading ? (
        <div style={{ padding: 10, margin: 10 }}>로딩...</div>
      ) : error ? (
        <div style={{ padding: 10, margin: 10 }}>에러</div>
      ) : postcomments ? (
        <CommentsBlock>
          {postcomments.map(postcomment => (
            <div key={postcomment.id}>
              <p className="CommentsName">{postcomment.name}</p>
              <p className="CommentsBody">{postcomment.body}</p>
              <p className="CommentsEmail">{postcomment.email}</p>
            </div>
          ))}
        </CommentsBlock>
      ) : null}
    </>
  );
}

export default PostComments;
