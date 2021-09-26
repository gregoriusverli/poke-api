import { DETAIL_POKEMON, LIST_POKEMON, SET_LOADING } from "./actionType";
const baseUrl = `https://pokeapi.co/api/v2`;

export function setLoading(load) {
  const setLoad = {
    type: SET_LOADING,
    payload: load,
  };
  return setLoad;
}

export function setListPokemon(data) {
  const listPoke = {
    type: LIST_POKEMON,
    payload: data,
  };
  return listPoke;
}

export function fetchDataPoke() {
  return async function (dispatch, getState) {
    dispatch(setLoading(true));
    try {
      const response = await fetch(`${baseUrl}/pokemon?&limit=100`);
      if (response.ok) {
        const { results } = await response.json();

        dispatch(setListPokemon(results));
      } else {
        throw Error;
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function setDetailPokemon(data) {
  const detailPoke = {
    type: DETAIL_POKEMON,
    payload: data,
  };
  return detailPoke;
}

export function fetchDetailPokemon(url) {
  return async function (dispatch, getState) {
    dispatch(setLoading(true));
    try {
      const response = await fetch(url);
      if (response.ok) {
        const results = await response.json();

        dispatch(setDetailPokemon(results));
      } else {
        throw Error;
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };
}
