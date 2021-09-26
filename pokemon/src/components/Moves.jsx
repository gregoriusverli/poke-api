import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../store/action";
import { Loading } from "./Loading";

export default function Moves({ id }) {
  const dispatch = useDispatch();
  const [moves, setMoves] = useState({});
  const { loading } = useSelector((state) => state.pokeReducer);
  useEffect(() => {
    fetchMoves();
  }, []);

  async function fetchMoves() {
    dispatch(setLoading(true));
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/move/${id}/`);
      if (response.ok) {
        const result = await response.json();
        setMoves(result);
      } else {
        throw Error;
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div
        className="
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
}
