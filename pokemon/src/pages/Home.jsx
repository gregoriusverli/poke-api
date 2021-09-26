import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPoke from "../components/CardPoke";
import { Loading } from "../components/Loading";
import { fetchDataPoke } from "../store/action";

export default function Home() {
  const dispatch = useDispatch();

  const { listPoke, loading } = useSelector((state) => state.pokeReducer);

  useEffect(() => {
    dispatch(fetchDataPoke());
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <h1 className="text-center text-5xl font-bold">Pokedex</h1>
        <div className="flex flex-row flex-wrap justify-center items-center w-full">
          {listPoke.map((pokemon, i) => {
            return <CardPoke key={i} poke={pokemon} />;
          })}
        </div>
      </div>
    );
  }
}
