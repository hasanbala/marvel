export const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_CHARACTERS":
      return {
        superheroes: [...action.payload],
      };
    case "LOAD_DETAILS":
      return {
        superheroes: [...action.payload],
      };
    default:
      return state;
  }
};
