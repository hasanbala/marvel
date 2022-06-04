import { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { GetCharacters } from "../api/fetchMarvelsApi";
import { reducer } from "../reducers";

const Marvel = createContext(null);
export const AppUseContext = () => useContext(Marvel);

const initialState = { superheroes: [] };
const characterLimits = 30;

export const MarvelContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    GetCharacters(characterLimits)
      .then((response) =>
        dispatch({ type: "LOAD_CHARACTERS", payload: response.data.results })
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const contextValue = { state, dispatch, loading, setLoading };

  return <Marvel.Provider value={contextValue}>{children}</Marvel.Provider>;
};
