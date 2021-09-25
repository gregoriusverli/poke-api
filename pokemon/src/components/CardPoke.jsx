import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import background from "../assets/logo.png";
export default function CardPoke({ poke }) {
  const router = useHistory();
  const [image, setImage] = useState("");
  const [types, setTypes] = useState([]);
  const [color, setColor] = useState("");
  const [idPoke, setIdPoke] = useState("");

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
    }
  }

  return (
    <div
      className={
        color === "brown"
          ? `flex rounded-3xl mt-8 p-2 ml-7 bg-yellow-800 w-64 justify-center`
          : color === "white"
          ? `flex rounded-3xl mt-8 p-2 ml-7 bg-gray-300 w-64 justify-center`
          : `flex rounded-3xl mt-8 p-2 ml-7 bg-${color}-400 w-64 justify-center`
      }
    >
      <div className="flex flex-col justify-center my-10">
        <h2 className="font-bold text-gray-500">#00{idPoke}</h2>
        <button onClick={() => detailPoke(poke)} className="text-xl uppercase">
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
}
