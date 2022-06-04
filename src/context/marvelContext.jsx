import { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import { reducer } from "../reducers";

const Marvel = createContext(null);
export const AppUseContext = () => useContext(Marvel);

const initialState = { superheroes: [] };

export const MarvelContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);

  const contextValue = { state, dispatch, loading, setLoading };

  return <Marvel.Provider value={contextValue}>{children}</Marvel.Provider>;
};
