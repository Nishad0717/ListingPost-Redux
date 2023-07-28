import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

const PostTile = styled.div`
  background-color: #f2f2f2;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h2`
  margin-bottom: 0.5rem;
`;

const PostDescription = styled.p`
  color: #555;
`;
const PostHeading = styled.h2`
  padding-left: 20px;
`;
const StyledLink = styled(RouterLink)`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const PostList = ({ posts, isLoading }) => {
  return (
    <div>
      <PostHeading>List of Posts</PostHeading>
      {posts.map((post) => (
        <PostTile key={post.id}>
          <PostTitle>
            {" "}
            <StyledLink to={`/posts/${post.id}`}>{post.title}</StyledLink>
          </PostTitle>
          <PostDescription>{post.body}</PostDescription>
        </PostTile>
      ))}
    </div>
  );
};

export default PostList;
