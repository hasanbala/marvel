import { useContext, useState } from "react";
import { createContext } from "react";
import { IComics, ISuperHeroes, MarvelState } from "../types";
import { fetchCharacters, fetchComicsList } from "api/fetchMarvelsApi";

export const AppContext = createContext<MarvelState | null>(null);

export const useAppContext = () => useContext(AppContext);

export const MarvelContext = ({ children }: Props) => {
  const [superheroes, setSuperHeroes] = useState<ISuperHeroes[]>([]);
  const [comics, setComics] = useState<IComics[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getHeroes = (characterOffet: number) => {
    setLoading(true);
    fetchCharacters(characterOffet)
      .then((res) => {
        setSuperHeroes((superheroes) => [...superheroes, ...res.data.results]);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const getComics = (id: number) => {
    setLoading(true);
    fetchComicsList(id)
      .then((res) => setComics(res.data.results))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const contextValue: MarvelState = {
    superheroes,
    comics,
    getHeroes,
    getComics,
    loading,
    setLoading,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

type Props = {
  children: React.ReactNode;
};
