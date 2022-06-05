import { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import { MarvelContextType, MarvelState, ReducerActionType } from "../types";
import { fetchCharacters, fetchComicsList } from "api/fetchMarvelsApi";
import { marvelReducer } from "reducers/marvelReducer";

const initialState: MarvelContextType | any = {};
const AppContext = createContext(initialState as MarvelContextType);

export const useAppContext = () => useContext(AppContext);

export const MarvelContext = ({ children }: Props) => {
  const [state, dispatch] = useReducer(marvelReducer, initialState);
  const [loading, setLoading] = useState<boolean>(false);

  const getHeroes = (characterLimits: number) => {
    setLoading(true);
    fetchCharacters(characterLimits)
      .then((res) =>
        dispatch({ type: ReducerActionType.GET_CHARACTERS, payload: res.data.results }),
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const getComics = (id: number) => {
    setLoading(true);
    fetchComicsList(id)
      .then((res) => dispatch({ type: ReducerActionType.GET_COMICS, payload: res.data.results }))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const contextValue = {
    state,
    getHeroes,
    getComics,
    loading,
    dispatch: function (): void {
      throw new Error("Function not implemented.");
    },
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

type Props = {
  children: React.ReactNode;
};
