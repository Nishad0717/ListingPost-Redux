// const initialState = {
//     posts: [],
//     currentPage: 1,
//     totalPages: 1,
//   };
  
//   const postsReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'FETCH_POSTS_SUCCESS':
//         return {
//           ...state,
//           posts: action.payload.posts,
//           currentPage: action.payload.currentPage,
//           totalPages: action.payload.totalPages,
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default postsReducer;
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts: [],
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        isLoading: false,
        error: null,
      };
    case actionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default postsReducer;
