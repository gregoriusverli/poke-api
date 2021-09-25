import abilities from "../helpers/abilities";
import pokeHeight from "../helpers/height";
import weightPoke from "../helpers/weight";

export default function About({ detailPokemon }) {
  return (
    <div
      class="
      bg-gray-300
       h-full
      w-full
      rounded-b-xl
      flex
      "
    >
      <table className="w-full mx-10 items-center justify-center">
        <tr className="h-10 mx-10">
          <td className="w-1/3">Species</td>
          <td className="w-1/3">Species value</td>
        </tr>
        <tr className="h-10">
          <td className="w-1/3">Height</td>
          <td className="w-1/3">{pokeHeight(detailPokemon?.height)}</td>
        </tr>
        <tr className="h-10">
          <td className="w-1/3">Weight</td>
          <td className="w-1/3">{weightPoke(detailPokemon?.weight)}</td>
        </tr>
        <tr className="h-10">
          <td className="w-1/3">Abilities</td>
          {detailPokemon?.abilities && (
            <td>{abilities(detailPokemon?.abilities)}</td>
          )}
        </tr>
      </table>
    </div>
  );
}
