import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fight } from "./Fight.jsx";
import { Start } from "./Start.jsx";

export const Pokemon = () => {
  const [pokeNames, setPokeNames] = useState([]);
  const [pok, setPok] = useState("bulbasaur");
  const [singlePok, setSinglePok] = useState([]);
  const [pokColor, setPokColor] = useState([]);
  const [pok1, setPok1] = useState([]);
  const [pok2, setPok2] = useState([]);
  const [start, setStart] = useState(false);

  const addPokemon1 = () => {
    const pokemon1 = {
      id: 1,
      name: pok,
      hp: singlePok.stats?.map((hp) => hp.base_stat)[0],
      img: singlePok.sprites.front_default,
      saved: false,
      moves: singlePok.moves,
      color: singlePok.types[0].type.name,
    };
    setPok1(pokemon1);
  };

  const addPokemon2 = () => {
    const pokemon2 = {
      id: 2,
      name: pok,
      hp: singlePok.stats?.map((hp) => hp.base_stat)[0],
      img: singlePok.sprites.front_default,
      saved: false,
      moves: singlePok.moves,
      color: singlePok.types[0].type.name,
    };
    setPok2(pokemon2);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?offset=&limit=1200"
        );
        setPokeNames(res.data.results);
        const res2 = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pok}`
        );
        setSinglePok(res2.data);
        setPokColor(res2.data.types?.map((name) => name.type.name));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [pok]);

  const handleSelect = (e) => {
    e.preventDefault();

    setPok(e.target.value);
  };

  const savePok1 = () => {
    if (!pok1.name) {
      alert("You have to pick a pokemon!");
    } else {
      setPok1({ ...pok1, saved: true });
    }
  };
  const savePok2 = () => {
    if (!pok2.name) {
      alert("You have to pick a pokemon!");
    } else {
      setPok2({ ...pok2, saved: true });
    }
  };

  return (
    <div className="yeter-lütfen">
      <h1 className="header">
        {!pok1.saved || !pok2.saved ? `Pick Your Pokemon To Fight` : ``}
      </h1>
      <div className="pokedex">
        {!start ? (
          <div className="deneme">
            <div className="fighter-pokemon">
              <p className="player-id" id={pok2.id}>
                Player: 2
              </p>
              <p className="pok-hp">HP:{pok2?.hp}</p>
              <p className="fighter-pok-name">{pok2.name}</p>
              <img src={pok2?.img} alt="" className="pok-vs-img" />
              {!pok2.saved ? (
                <button className="save-pok" onClick={savePok2}>
                  Save
                </button>
              ) : (
                ""
              )}
            </div>
            {!pok1.saved || !pok2.saved ? (
              <div
                className={`pokedex-2 ${pokColor[0]}`}
                style={{
                  color:
                    pokColor[0] === "dark" || pokColor[0] === "fire"
                      ? "white"
                      : "#000",
                }}
              >
                <select
                  name="pokemons"
                  id="pokemons"
                  onClick={handleSelect}
                  className="pok-select"
                >
                  {pokeNames.map((name, idx) => {
                    return (
                      <option
                        className="pok-option"
                        key={idx}
                        value={name.name}
                        id={name.name}
                      >
                        {idx + 1}.{name.name}
                      </option>
                    );
                  })}
                </select>
                <div className="container-pokemon">
                  <div className="img-div">
                    <img
                      src={singlePok.sprites?.front_default}
                      alt=""
                      className="pok-img"
                    />
                  </div>
                  <div className="id-div">
                    <p className="id-p">ID:</p>
                    <p className="pok-id">{singlePok.id}</p>
                  </div>
                  <div className="name-div">
                    <p className="">Name:</p>
                    <p className="pok-name">{singlePok.name}</p>
                  </div>
                  <div className="ability-div">
                    <p className="pab">Abilities:</p>
                    <div className="amk">
                      <p className="pok-abilities">
                        {singlePok.abilities?.map((ab, idx) => {
                          return (
                            <p>
                              {idx + 1}. {ab.ability.name}
                            </p>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="type-div">
                    <p className="typ">Type:</p>
                    <div className="yeter">
                      <p className="pok-type">
                        {singlePok.types?.map((asd, idx) => {
                          return <p>{asd.type.name}</p>;
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={!pok1.saved ? "ok" : "ok-l"}>&rarr;</div>
                {/* <div className='ok-l'> &larr;</div> */}

                <button
                  className="btn-pick"
                  onClick={!pok1.saved ? addPokemon1 : addPokemon2}
                >{`I Choose You ${pok}!`}</button>
              </div>
            ) : (
              <Fight start={start} setStart={setStart} />
            )}
            {true && (
              <div className="fighter-pokemon">
                <p className="player-id" id={pok1.id}>
                  Player: 1
                </p>
                <p className="pok-hp">HP:{pok1?.hp}</p>
                <p className="fighter-pok-name">{pok1.name}</p>
                <img src={pok1?.img} alt="" className="pok-vs-img" />
                {!pok1.saved ? (
                  <button className="save-pok" onClick={savePok1}>
                    Save
                  </button>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        ) : (
          <Start pok1={pok1} pok2={pok2} />
        )}
      </div>
    </div>
  );
};
export default Pokemon;
