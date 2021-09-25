import { useEffect, useState } from "react";

export default function Moves({ id }) {
  const [moves, setMoves] = useState({});
  useEffect(() => {
    fetchMoves();
  }, []);

  async function fetchMoves() {
    const response = await fetch(`https://pokeapi.co/api/v2/move/${id}/`);
    if (response.ok) {
      const result = await response.json();
      setMoves(result);
    }
  }

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
      <div className="flex flex-col w-full my-2">
        {console.log(moves, "move")}
        <div className="flex flex-row jusitfy-center">
          <div className="flex w-1/2 mb-1 ml-10">
            <h3>Name</h3>
          </div>
          <div className="flex justify-items-end">
            <p>{moves.name}</p>
          </div>
        </div>
        <div className="flex flex-row jusitfy-center">
          <div className="flex w-1/2 mb-1 ml-10">
            <h3>Power Points</h3>
          </div>
          <div className="flex justify-items-end">
            <p>{moves.pp}</p>
          </div>
        </div>
        <div className="flex flex-row jusitfy-center">
          <div className="flex w-1/2 mb-1 ml-10">
            <h3>Power</h3>
          </div>
          <div className="flex justify-items-end">
            <p>{moves.power}</p>
          </div>
        </div>
        <div className="flex flex-row jusitfy-center">
          <div className="flex w-1/2 mb-1 ml-10">
            <h3>Class Damage</h3>
          </div>
          <div className="flex justify-items-end">
            <p>{moves?.damage_class?.name}</p>
          </div>
        </div>
        <div className="flex flex-row jusitfy-center">
          <div className="flex w-1/2 mb-1 ml-10">
            <h3>Type</h3>
          </div>
          <div className="flex justify-items-end">
            <p>{moves?.type?.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
