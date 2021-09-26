import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import background from "../assets/logo.png";
import { setLoading } from "../store/action";
import { Loading } from "./Loading";
export default function CardPoke({ poke }) {
  const router = useHistory();
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [types, setTypes] = useState([]);
  const [color, setColor] = useState("");
  const [idPoke, setIdPoke] = useState("");
  const { loading } = useSelector((state) => state.pokeReducer);
  useEffect(() => {
    fetchPoke();
  }, []);

  function detailPoke(pokemon) {
    router.push({
      pathname: `detail/${pokemon.name}`,
      state: { url: pokemon.url },
    });
  }

  async function fetchPoke() {
    try {
      dispatch(setLoading(true));
      const response = await fetch(`${poke.url}`);
      if (response.ok) {
        const result = await response.json();

        console.log(result, "ress");
        setImage(result.sprites.front_default);
        setTypes(result.types);
        setIdPoke(result.id);
        const responseColor = await fetch(`${result.species.url}`);
        if (responseColor.ok) {
          const { color } = await responseColor.json();
          setColor(color.name);
        } else {
          throw Error;
        }
      } else {
        throw Error;
      }
    } catch (error) {
      console.log(error, "error card");
    } finally {
      dispatch(setLoading(false));
    }
  }
  if (color) {
    return (
      <div
        className={
          color === "brown"
            ? `flex rounded-3xl mt-8 p-2 ml-7 bg-yellow-800 w-64 justify-center`
            : color === "white"
            ? `flex rounded-3xl mt-8 p-2 ml-7 bg-gray-300 w-64 justify-center`
            : color === "green"
            ? `flex rounded-3xl mt-8 p-2 ml-7 bg-green-400 w-64 justify-center`
            : color === "yellow"
            ? `flex rounded-3xl mt-8 p-2 ml-7 bg-yellow-400 w-64 justify-center`
            : color === "purple"
            ? `flex rounded-3xl mt-8 p-2 ml-7 bg-purple-400 w-64 justify-center`
            : color === "pink"
            ? `flex rounded-3xl mt-8 p-2 ml-7 bg-pink-400 w-64 justify-center`
            : color === "red"
            ? `flex rounded-3xl mt-8 p-2 ml-7 bg-red-400 w-64 justify-center`
            : color === "gray"
            ? `flex rounded-3xl mt-8 p-2 ml-7 bg-gray-400 w-64 justify-center`
            : color === "blue"
            ? `flex rounded-3xl mt-8 p-2 ml-7 bg-blue-400 w-64 justify-center`
            : `flex rounded-3xl mt-8 p-2 ml-7 bg-${color}-400 w-64 justify-center`
        }
      >
        {console.log(color, "color")}
        <div className="flex flex-col justify-center my-10">
          <h2 className="font-bold text-gray-500">#00{idPoke}</h2>
          <button
            onClick={() => detailPoke(poke)}
            className="text-xl uppercase"
          >
            {poke.name}
          </button>

          {types.map((type, i) => {
            return (
              <div className="flex" key={i}>
                <button
                  className={
                    color === "brown"
                      ? `border-2 bg-yellow-900 border-yellow-900 rounded-full font-bold text-gray-500 px-4 transition duration-300 ease-in-out hover:bg-yellow-700 hover:text-white my-1`
                      : color === "white"
                      ? `border-2 bg-gray-700 border-gray-700 rounded-full font-bold text-gray-500 px-4 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white my-1`
                      : color === "green"
                      ? `border-2 bg-green-700 border-green-700 rounded-full font-bold text-green-500 px-4 transition duration-300 ease-in-out hover:bg-green-900 hover:text-white my-1`
                      : color === "yellow"
                      ? `border-2 bg-yellow-700 border-yellow-700 rounded-full font-bold text-yellow-500 px-4 transition duration-300 ease-in-out hover:bg-yellow-900 hover:text-white my-1`
                      : color === "purple"
                      ? `border-2 bg-purple-700 border-purple-700 rounded-full font-bold text-purple-500 px-4 transition duration-300 ease-in-out hover:bg-purple-900 hover:text-white my-1`
                      : color === "pink"
                      ? `border-2 bg-pink-700 border-pink-700 rounded-full font-bold text-pink-500 px-4 transition duration-300 ease-in-out hover:bg-pink-900 hover:text-white my-1`
                      : color === "red"
                      ? `border-2 bg-red-700 border-red-700 rounded-full font-bold text-red-500 px-4 transition duration-300 ease-in-out hover:bg-red-900 hover:text-white my-1`
                      : color === "gray"
                      ? `border-2 bg-gray-700 border-gray-700 rounded-full font-bold text-gray-500 px-4 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white my-1`
                      : color === "blue"
                      ? `border-2 bg-blue-700 border-blue-700 rounded-full font-bold text-blue-500 px-4 transition duration-300 ease-in-out hover:bg-blue-900 hover:text-white my-1`
                      : `border-2 bg-${color}-200 border-${color}-200 rounded-full font-bold text-${color}-500 px-4 transition duration-300 ease-in-out hover:bg-${color}-400 hover:text-${color} my-1`
                  }
                >
                  {type.type.name}
                </button>
              </div>
            );
          })}
        </div>
        <div className="w-full h-full items-end mt-auto">
          <div className="absolute z-50">
            <img
              className="w-full h-full object-contain hover:scale-125 transition-all transform duration-500"
              src={image}
              alt="pokemon"
            />
          </div>
          <div
            style={{
              opacity: 0.4,
            }}
          >
            <img style={{ width: 100 }} src={background} alt="background" />
          </div>
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}
