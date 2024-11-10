const initialState = {
  name: "Ci Agan",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      // copy state
      ...state,
      name: "Muhamad",
    };
  }
  return state;
};

export default globalReducer;
