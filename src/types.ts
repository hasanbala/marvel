export interface ISuperHeroes {
  id: number | string;
  description: string;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
export interface IComics {
  id: number | string;
  description: string;
  name: string;
  title: string;
  pageCount?: number;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface MarvelState {
  superheroes: ISuperHeroes[];
  comics: IComics[];
  loading: boolean;
  setLoading: (value: boolean) => void;
  getHeroes: (value: number) => void;
  getComics: (id: number) => void;
}
