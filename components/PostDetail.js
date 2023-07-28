// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const PostDetail = ({ postId }) => {
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${postId}`
//       );
//       setPost(response.data);
//     };
//     fetchPost();
//   }, [postId]);

//   if (!post) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </div>
//   );
// };

// export default PostDetail;

import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
  background-color: #f2f2f2;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

const PostBody = styled.p`
  color: #555;
`;

const PostDetail = ({ title, body }) => {
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      <PostBody>{body}</PostBody>
    </PostContainer>
  );
};

export default PostDetail;
