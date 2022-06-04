import { useContext, useEffect, useReducer, useState } from "react";
import { createContext } from "react";
import { getCharacters, getComicsList } from "../api";
import { reducer } from "../reducers";

const Marvel = createContext(null);
export const useAppContext = () => useContext(Marvel);

const initialState = { superheroes: [], comics: [], characterLimits: 30 };

export const MarvelContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getHeroes = (characterLimits) => {
    getCharacters(characterLimits)
      .then((res) =>
        dispatch({ type: "GET_CHARACTERS", payload: res.data.results })
      )
      .catch((err) => console.error(err));
  };

  const getComics = (id) => {
    getComicsList(id)
      .then((res) =>
        dispatch({ type: "GET_COMICS", payload: res.data.results })
      )
      .catch((err) => console.error(err));
  };

  const contextValue = { state, getHeroes, getComics };

  return <Marvel.Provider value={contextValue}>{children}</Marvel.Provider>;
};
