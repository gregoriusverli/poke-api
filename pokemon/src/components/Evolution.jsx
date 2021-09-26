import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLoading } from "../store/action";
import { Loading } from "./Loading";

export default function Evolution({ evoUrl }) {
  const dispatch = useDispatch();
  const [evolves, setEvolves] = useState([]);
  const { loading } = useSelector((state) => state.pokeReducer);
  useEffect(() => {
    fetchEvo();
  }, [evoUrl]);

  async function fetchEvo() {
    try {
      const response = await fetch(`${evoUrl}`);

      if (response.ok) {
        const result = await response.json();

        console.log(result, "result");
        //   const lengthEvo = result.chain.evolves_to.length;
        setEvolves(result.chain);
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
        className="bg-gray-300
      h-full
      w-full
      rounded-b-xl
      justify-center"
      >
        <div className="flex justify-stretch">
          <div className="mx-10">
            <h1>Name</h1>
          </div>
          <div>
            <p>{evolves?.species?.name}</p>
          </div>
        </div>
        {evolves?.evolves_to?.length > 0 && (
          <>
            <div className="flex justify-stretch">
              <div className="mx-10">
                <h1>Evo 1</h1>
              </div>
              <div className="mr-5">
                <h1>{evolves?.evolves_to[0].species.name}</h1>
              </div>
              <div>
                <p>
                  (level {evolves?.evolves_to[0].evolution_details[0].min_level}
                  )
                </p>
              </div>
            </div>
            {evolves?.evolves_to[0].evolves_to.length > 0 && (
              <>
                <div className="flex justify-stretch">
                  <div className="mx-10">
                    <h1>Evo2</h1>
                  </div>
                  <div className="mr-5">
                    <p>{evolves?.evolves_to[0].evolves_to[0].species.name}</p>
                  </div>
                  <div>
                    <p>
                      (level{" "}
                      {
                        evolves?.evolves_to[0].evolves_to[0]
                          .evolution_details[0].min_level
                      }
                      )
                    </p>
                  </div>
                </div>
                {evolves?.evolves_to[0].evolves_to[0].length > 0 && (
                  <>
                    <div>
                      <h1>Evo3</h1>
                    </div>
                    <div>
                      <p>
                        {
                          evolves?.evolves_to[0].evolves_to[0].evolves_to[0]
                            .species.name
                        }
                      </p>
                      <p>
                        {
                          evolves?.evolves_to[0].evolves_to[0]
                            .evolution_details[0].min_level
                        }
                      </p>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    );
  }
}
