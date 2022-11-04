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
  getHeroes: () => void;
}
