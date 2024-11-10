import Axios from "axios";

export const setPosts = () => (dispatch) => {
  Axios.get("http://localhost:4000/v1/posts")
    .then((res) => dispatch({ type: "FETCH_POSTS", payload: res.data.data }))
    .catch((err) => console.log("error", err));
};
