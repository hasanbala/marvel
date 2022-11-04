import { useGetMarvels } from "@hooks/useGetMarvels";
import { useContext, useState } from "react";
import { createContext } from "react";
import { ISuperHeroes, MarvelState } from "../types";

export const AppContext = createContext<MarvelState | null>(null);
export const useAppContext = () => useContext(AppContext);

export const MarvelContext = ({ children }: Props) => {
  const [superheroes, setSuperHeroes] = useState<ISuperHeroes[]>([]);
  const endPoint = `?limit=30&offset=${superheroes.length}`;
  const { data, error } = useGetMarvels(endPoint);
  console.log(data);
  const getHeroes = () => setSuperHeroes((superheroes) => [...superheroes, ...data.data.results]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const contextValue: MarvelState = {
    superheroes,
    getHeroes,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

type Props = {
  children: React.ReactNode;
};
