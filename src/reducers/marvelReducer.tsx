import { Reducer } from "react";
import { MarvelState, ReducerAction, ReducerActionType } from "../types";

export const marvelReducer: Reducer<MarvelState, ReducerAction> = (state, action) => {
  switch (action.type) {
    case ReducerActionType.GET_CHARACTERS: {
      const newState = {
        ...state,
        superheroes: [...action.payload],
      };
      return newState;
    }
    case ReducerActionType.GET_COMICS: {
      const newState = {
        ...state,
        comics: [...action.payload],
      };
      return newState;
    }
    case ReducerActionType.LOAD_CHARACTERS: {
      const newState = {
        ...state,
        superheroes: [...state.superheroes, action.payload],
      };
      return newState;
    }
    default:
      return state;
  }
};
