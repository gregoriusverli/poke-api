import { useEffect, useState } from "react";

export default function CardPoke({ poke }) {
  const [image, setImage] = useState("");
  const [types, setTypes] = useState([]);
  const [color, setColor] = useState("");

  useEffect(() => {
    fetchPoke();
  }, []);

  function detailPoke(pokemon) {
    console.log(pokemon);
  }

  async function fetchPoke() {
    try {
      const response = await fetch(`${poke.url}`);
      if (response.ok) {
        const { sprites, species, types } = await response.json();
        setImage(sprites.front_default);
        setTypes(types);

        const responseColor = await fetch(`${species.url}`);
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
        <button
          onClick={() => detailPoke(poke.url)}
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
                    : `border-2 bg-${color}-200 border-${color}-200 rounded-full font-bold text-${color}-500 px-4 transition duration-300 ease-in-out hover:bg-${color}-400 hover:text-${color} my-1`
                }
              >
                {type.type.name}
              </button>
            </div>
          );
        })}
      </div>
      <div
        style={{
          backgroundImage: `url(https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536847_960_720.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="flex mt-auto"
      >
        <img className="w-full h-full object-cover" src={image} alt="pokemon" />
      </div>
    </div>
  );
}
