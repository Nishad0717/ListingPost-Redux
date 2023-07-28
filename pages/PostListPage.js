import React, { useState, useEffect } from "react";
// import axios from "axios";
import styled from "styled-components";
import PostList from "../components/PostList";
import Loader from "../common/Loader";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions/postsActions";
const LoaderWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Pagination = styled.div`
  padding-left: 20px;
`;

const PostListPage = () => {
  //   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);
//   const postsPerPage = 10;
  const { posts, currentPage, totalPages, isLoading } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(currentPage));
  }, []);
  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //         setIsLoading(true);
  //       const response = await axios.get(
  //         `https://jsonplaceholder.typicode.com/posts?_start=${
  //           (page - 1) * postsPerPage
  //         }&_limit=${postsPerPage}`
  //       );
  //       setPosts(response.data);
  //       setIsLoading(false);
  //     };
  //     fetchPosts();
  //   }, [page]);

  //   const handleNextPage = () => {
  //     setPage((prevPage) => prevPage + 1);
  //   };

  //   const handlePreviousPage = () => {
  //     setPage((prevPage) => prevPage - 1);
  //   };

  return (
    <div>
      {isLoading ? (
        <LoaderWrapper>
          <Loader size={100} color="#007bff" />
        </LoaderWrapper>
      ) : (
        <>
          <PostList posts={posts} />
          <Pagination>
            <button disabled={currentPage === 1}
              onClick={() => {
                if (currentPage > 1) dispatch(fetchPosts(currentPage - 1));
              }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (currentPage < totalPages)
                  dispatch(fetchPosts(currentPage + 1));
              }}
            >
              Next
            </button>
          </Pagination>
        </>
      )}
    </div>
  );
};

export default PostListPage;
