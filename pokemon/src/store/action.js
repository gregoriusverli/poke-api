import { LIST_POKEMON } from "./actionType";
const baseUrl = `https://pokeapi.co/api/v2`;

export function SetListPokemon(data) {
  const listPoke = {
    type: LIST_POKEMON,
    payload: data,
  };
  return listPoke;
}

export function fetchDataPoke() {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(`${baseUrl}/pokemon?&limit=100`);
      if (response.ok) {
        const { results } = await response.json();
        dispatch(SetListPokemon(results));
      } else {
        throw Error;
      }
    } catch (err) {
      console.log(err);
    }
  };
}
