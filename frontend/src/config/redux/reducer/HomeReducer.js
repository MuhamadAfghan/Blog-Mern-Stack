const initialStateHome = {
  allPosts: [],
};

const homeReducer = (state = initialStateHome, action) => {
  if (action.type === "FETCH_POSTS") {
    return {
      // copy state
      ...state,
      allPosts: action.payload,
    };
  }

  return state;
};

export default homeReducer;
