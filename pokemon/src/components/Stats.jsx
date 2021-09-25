export default function Stats({ detailPokemon }) {
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
        {detailPokemon.stats.map((stat, i) => {
          return (
            <div key={i} className="flex flex-row jusitfy-center">
              <div className="flex w-1/2 mb-1 ml-10">
                <h3>{stat.stat.name}</h3>
              </div>
              <div className="flex justify-center items-center">
                <div
                  style={{ width: "30%" }}
                  className="flex justify-items-end"
                >
                  <h3>{stat.base_stat}</h3>
                </div>
                <div
                  style={{ width: 100, height: 5 }}
                  className="bg-gray-200 justify-center"
                >
                  <div
                    style={{ width: stat.base_stat }}
                    className={
                      stat.base_stat > 50
                        ? "border-green-500 border-2  w-100"
                        : "border-red-500 border-2   w-100"
                    }
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
