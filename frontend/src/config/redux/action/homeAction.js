import Axios from "axios";

export const setPosts = (page) => (dispatch) => {
  Axios.get(`http://localhost:4000/v1/posts?page=${page}`)
    .then((res) => {
      dispatch({ type: "FETCH_POSTS", payload: res.data.data });
      dispatch({
        type: "UPDATE_PAGE",
        payload: {
          currentPage: res.data.current_page,
          totalPage: res.data.total_page,
        },
      });
    })
    .catch((err) => console.log("error", err));
};
