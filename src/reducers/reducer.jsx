export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CHARACTERS": {
      const newState = {
        ...state,
        superheroes: [...action.payload],
      };
      return newState;
    }
    case "GET_COMICS": {
      const newState = {
        ...state,
        comics: [...action.payload],
      };
      return newState;
    }
    default:
      return state;
  }
};
