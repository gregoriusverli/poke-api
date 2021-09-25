import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPoke from "../components/CardPoke";
import { fetchDataPoke } from "../store/action";

export default function Home() {
  const dispatch = useDispatch();

  const { listPoke, loading } = useSelector((state) => state.pokeReducer);

  useEffect(() => {
    dispatch(fetchDataPoke());
  }, []);

  //   if (loading) {
  //     return (
  //       <div>
  //         <h1>loading...</h1>
  //       </div>
  //     );
  //   } else {
  return (
    // <div className="flex flex-row flex-wrap justify-center">
    <div class="flex flex-row flex-wrap justify-center items-center w-full">
      {listPoke.map((pokemon, i) => {
        return <CardPoke key={i} poke={pokemon} />;
      })}
    </div>
  );
  //   }
}
