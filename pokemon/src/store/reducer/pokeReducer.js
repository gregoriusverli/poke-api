import { LIST_POKEMON } from "../actionType";

const initialState = {
  listPoke: [],
  loading: false,
};

export default function pokeReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_POKEMON:
      const dataPoke = {
        ...state,
        listPoke: action.payload,
      };
      return dataPoke;

    default:
      return state;
  }
}
