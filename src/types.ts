export interface IHero {
  id: number | string;
  description: string;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export type MarvelState = {
  superheroes: IHero[];
  comics: IHero[];
};

export type Actions =
  | { type: "GET_CHARACTERS"; payload: any }
  | { type: "GET_COMICS"; payload: any }
  | { type: "LOAD_CHARACTERS"; payload: any };

export type MarvelContextType = {
  state: MarvelState;
  dispatch: React.Dispatch<any>;
  getHeroes: (characterLimits: number, characterOffet: number) => void;
  getComics: (id: number) => void;
  loading: boolean;
};

export enum ReducerActionType {
  GET_CHARACTERS,
  GET_COMICS,
  LOAD_CHARACTERS,
}

export type ReducerAction = {
  type: ReducerActionType;
  payload?: any;
};
