export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonDetails {
  height: number;
  id: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: {
    type: {
      name: string;
    };
  }[];
  weight: number;
}
