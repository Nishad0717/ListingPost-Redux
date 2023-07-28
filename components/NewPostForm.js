// 
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const FormContainer = styled.form`
  padding: 5rem;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body: description,
        userId: 1, // Change the user ID according to your needs
      });

    //   console.log('New post created:', response.data);

      alert('New post created successfully!');

      history.goBack();
    } catch (error) {
      console.error('Error creating new post:', error.message);
      alert('Failed to create a new post. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="title">Title:</Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Description:</Label>
        <TextArea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={1000}
        />
      </FormGroup>
      <SubmitButton type="submit" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Submit'}
      </SubmitButton>
    </FormContainer>
  );
};

export default NewPostForm;
