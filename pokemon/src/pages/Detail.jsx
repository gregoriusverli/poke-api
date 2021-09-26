import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import About from "../components/About";
import Evolution from "../components/Evolution";
import { Loading } from "../components/Loading";
import Moves from "../components/Moves";
import Stats from "../components/Stats";
import { fetchDetailPokemon, setLoading } from "../store/action";

export default function PokemonDetail() {
  const router = useHistory();
  const dispatch = useDispatch();
  const { detailPokemon, loading } = useSelector((state) => state.pokeReducer);
  const [color, setColor] = useState("");
  const [barActive, setBarActive] = useState("about");
  const [evoUrl, setEvoUrl] = useState("");

  useEffect(() => {
    dispatch(fetchDetailPokemon(router.location.state.url));
  }, []);

  useEffect(() => {
    fetchColor();
  }, [detailPokemon]);

  async function fetchColor() {
    try {
      dispatch(setLoading(true));
      const responseColor = await fetch(`${detailPokemon?.species?.url}`);
      if (responseColor.ok) {
        const result = await responseColor.json();
        setEvoUrl(result.evolution_chain.url);
        setColor(result.color.name);
      } else {
        throw Error;
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  }

  function barHandler(bar) {
    setBarActive(bar);
  }

  if (color) {
    return (
      <div className="h-1/2 w-screen bg-gray-50 flex justify-center items-center">
        <div
          className={
            color === "brown"
              ? `mx-auto
            bg-yellow-800
            rounded-xl shadow-md
            md:w-1/2 md:mx-auto md:h-1/2
            sm:w-80 sm:mx-0`
              : color === "white"
              ? `mx-auto
            bg-gray-300
            rounded-xl shadow-md
            md:w-1/2 md:mx-auto md:h-1/2
            sm:w-80 sm:mx-0`
              : color === "green"
              ? `mx-auto
            bg-green-400
            rounded-xl shadow-md
            md:w-1/2 md:mx-auto md:h-1/2
            sm:w-80 sm:mx-0`
              : color === "yelow"
              ? `mx-auto
            bg-yellow-400
            rounded-xl shadow-md
            md:w-1/2 md:mx-auto md:h-1/2
            sm:w-80 sm:mx-0`
              : color === "purple"
              ? `mx-auto
          bg-purple-400
          rounded-xl shadow-md
          md:w-1/2 md:mx-auto md:h-1/2
          sm:w-80 sm:mx-0`
              : color === "pink"
              ? `mx-auto
        bg-pink-400
        rounded-xl shadow-md
        md:w-1/2 md:mx-auto md:h-1/2
        sm:w-80 sm:mx-0`
              : color === "red"
              ? `mx-auto
      bg-red-400
      rounded-xl shadow-md
      md:w-1/2 md:mx-auto md:h-1/2
      sm:w-80 sm:mx-0`
              : color === "gray"
              ? `mx-auto
    bg-gray-400
    rounded-xl shadow-md
    md:w-1/2 md:mx-auto md:h-1/2
    sm:w-80 sm:mx-0`
              : color === "blue"
              ? `mx-auto
bg-blue-400
rounded-xl shadow-md
md:w-1/2 md:mx-auto md:h-1/2
sm:w-80 sm:mx-0`
              : `mx-auto
            bg-${color}-400
            rounded-xl shadow-md
            md:w-1/2 md:mx-auto md:h-1/2
            sm:w-80 sm:mx-0`
          }
        >
          <div>
            <Link to="/">Back</Link>
          </div>
          <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
            <div>
              <h1 className="text-white font-bold">
                {detailPokemon?.name?.charAt(0).toUpperCase() +
                  detailPokemon?.name?.slice(1)}
              </h1>
              <div className="flex">
                {detailPokemon?.types?.map((type) => {
                  return (
                    <button
                      className={
                        color === "brown"
                          ? `border-2 bg-yellow-900 border-yellow-900 rounded-full font-bold text-gray-500 px-4 transition duration-300 ease-in-out hover:bg-yellow-700 hover:text-white my-1 mx-1`
                          : color === "white"
                          ? `border-2 bg-gray-700 border-gray-700 rounded-full font-bold text-gray-500 px-4 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white my-1 mx-1`
                          : `border-2 bg-${color}-200 border-${color}-200 rounded-full font-bold text-${color}-500 px-4 transition duration-300 ease-in-out hover:bg-${color}-400 hover:text-${color} my-1 mx-1`
                      }
                    >
                      {type.type.name}
                    </button>
                  );
                })}
              </div>
            </div>
            <h2 className="font-bold text-white">#00{detailPokemon.id}</h2>
          </div>
          <div className="h-1/3 w-full flex justify-center items-center">
            <img
              className="absolute object-cover hover:scale-125 transition-all transform duration-500"
              src={detailPokemon?.sprites?.front_default}
              alt={detailPokemon?.name}
            />
          </div>
          <div
            className="
                bg-white
                h-1/2
                w-full
                rounded-t-3xl
                flex flex-col
                justify-around
                items-center
               
              "
          >
            <div className="w-full h-1/2 flex  pt-10 flex-row justify-center items-cente z-50">
              <div className="mx-2 h-1/2">
                <button
                  onClick={() => barHandler("about")}
                  className="text-gray-700 font-bold"
                >
                  About
                </button>
              </div>
              <div className="mx-2">
                <button
                  onClick={() => barHandler("stats")}
                  className="text-gray-700 font-bold"
                >
                  Base Stats
                </button>
              </div>
              <div className="mx-2">
                <button
                  onClick={() => barHandler("evo")}
                  className="text-gray-700 font-bold"
                >
                  Evolution
                </button>
              </div>
              <div className="mx-2">
                <button
                  onClick={() => barHandler("moves")}
                  className="text-gray-700 font-bold"
                >
                  Moves
                </button>
              </div>
            </div>
          </div>
          {barActive === "about" && <About detailPokemon={detailPokemon} />}
          {barActive === "stats" && <Stats detailPokemon={detailPokemon} />}
          {barActive === "evo" && <Evolution evoUrl={evoUrl} />}
          {barActive === "moves" && <Moves id={detailPokemon.id} />}
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}
