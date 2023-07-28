// import axios from 'axios';

// const API_URL = 'https://jsonplaceholder.typicode.com/posts';
// const POSTS_PER_PAGE = 10;

// export const fetchPosts = (page) => async (dispatch) => {
//   try {
//     const response = await axios.get(`${API_URL}?_start=${(page - 1) * POSTS_PER_PAGE}&_limit=${POSTS_PER_PAGE}`);
//     const totalPosts = await axios.get(API_URL);

//     dispatch({
//       type: 'FETCH_POSTS_SUCCESS',
//       payload: {
//         posts: response.data,
//         currentPage: page,
//         totalPages: Math.ceil(totalPosts.data.length / POSTS_PER_PAGE),
//       },
//     });
//   } catch (error) {
//     // Handle errors
//   }
// };
import axios from 'axios';
import * as actionTypes from './actionTypes';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const POSTS_PER_PAGE = 10;

const fetchPostsRequest = () => {
  return {
    type: actionTypes.FETCH_POSTS_REQUEST,
  };
};

const fetchPostsSuccess = (posts, currentPage, totalPages) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    payload: {
      posts,
      currentPage,
      totalPages,
    },
  };
};

const fetchPostsFailure = (error) => {
  return {
    type: actionTypes.FETCH_POSTS_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchPosts = (page) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPostsRequest());
      const response = await axios.get(`${API_URL}?_start=${(page - 1) * POSTS_PER_PAGE}&_limit=${POSTS_PER_PAGE}`);
      const totalPosts = await axios.get(API_URL);
      const totalPages = Math.ceil(totalPosts.data.length / POSTS_PER_PAGE);

      dispatch(fetchPostsSuccess(response.data, page, totalPages));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};

