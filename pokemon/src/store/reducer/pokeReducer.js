import { DETAIL_POKEMON, LIST_POKEMON } from "../actionType";

const initialState = {
  listPoke: [],
  loading: false,
  detailPokemon: {},
};

export default function pokeReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_POKEMON:
      const dataPoke = {
        ...state,
        listPoke: action.payload,
      };
      return dataPoke;

    case DETAIL_POKEMON:
      const detailPoke = {
        ...state,
        detailPokemon: action.payload,
      };
      return detailPoke;

    default:
      return state;
  }
}
