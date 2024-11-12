const initialStateHome = {
  allPosts: [],
  page: {
    currentPage: 1,
    totalPage: 1,
  },
};

const homeReducer = (state = initialStateHome, action) => {
  if (action.type === "FETCH_POSTS") {
    return {
      // copy state
      ...state,
      allPosts: action.payload,
    };
  }

  if (action.type === "UPDATE_PAGE") {
    return {
      // copy state
      ...state,
      page: action.payload,
    };
  }

  return state;
};

export default homeReducer;
