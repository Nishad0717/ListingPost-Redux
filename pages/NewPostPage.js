import React from 'react';
import NewPostForm from '../components/NewPostForm';
import styled from "styled-components";

const PostHeading =  styled.h2`
padding-left: 20px`

const NewPostPage = () => {
  return (
    <div>
      <PostHeading>Create New Post</PostHeading>
      <NewPostForm />
    </div>
  );
};

export default NewPostPage;
