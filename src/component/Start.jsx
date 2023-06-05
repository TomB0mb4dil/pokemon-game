import React, { useState } from "react";
import { Gameover } from "./Gameover";

export const Start = (props) => {
  let [pok1Score, setPok1Score] = useState(props.pok1.hp);
  let [pok2Score, setPok2Score] = useState(props.pok2.hp);
  const [damaged, setDamage] = useState(0);
  const [attackerPok, setAttackerPok] = useState("");
  const [attacked, setAttacked] = useState(true);
  const [winner, setWinner] = useState([]);

  const attack1 = () => {
    const damage = Math.floor(Math.random() * 10) + 1;
    setDamage(damage);
    setAttackerPok(props.pok1.name);
    setAttacked(true);
    gameover();
    return setPok2Score(pok2Score - damage);
  };

  const attack11 = () => {
    if (Math.random() > 0.5) {
      const damage = 1;
      setDamage(damage);
      setAttackerPok(props.pok1.name);
      setAttacked(true);
      gameover();
      return setPok2Score(pok2Score - damage);
    } else {
      const damage = 10;
      setDamage(damage);
      setAttackerPok(props.pok1.name);
      setAttacked(true);
      gameover();
      return setPok2Score(pok2Score - damage);
    }
  };
  const attack111 = () => {
    if (Math.random() > 0.5) {
      const damage = 20;
      setDamage(damage);
      setAttackerPok(props.pok1.name);
      setAttacked(true);
      gameover();
      return setPok2Score(pok2Score - damage);
    } else {
      const damage = 20;
      setDamage(damage);
      setAttackerPok(props.pok1.name);
      setAttacked(true);
      gameover();
      return setPok1Score(pok1Score - damage);
    }
  };
  const attack2 = () => {
    const damage = Math.floor(Math.random() * 10) + 1;
    setDamage(damage);
    setAttackerPok(props.pok2.name);
    setAttacked(false);
    gameover();

    return setPok1Score(pok1Score - damage);
  };

  const attack22 = () => {
    if (Math.random() > 0.5) {
      const damage = 1;
      setDamage(damage);
      setAttackerPok(props.pok2.name);
      setAttacked(false);
      gameover();

      return setPok1Score(pok1Score - damage);
    } else {
      const damage = 10;
      setDamage(damage);
      setAttackerPok(props.pok2.name);
      setAttacked(false);
      gameover();
      return setPok1Score(pok1Score - damage);
    }
  };
  
  const attack222 = () => {
    if (Math.random() > 0.5) {
      const damage = 20;
      setDamage(damage);
      setAttackerPok(props.pok2.name);
      setAttacked(false);
      gameover();
      return setPok1Score(pok1Score - damage);
    } else {
      const damage = 20;
      setDamage(damage);
      setAttackerPok(props.pok2.name);
      setAttacked(false);
      gameover();
      return setPok2Score(pok2Score - damage);
    }
  };

  const gameover = () => {
    if (pok1Score <= 0) {
      setWinner(props.pok2);
    } else if (pok2Score <= 0) {
      setWinner(props.pok1);
    }
  };


  return (
    <div className="fight-view">
      {/* <h1>Winner is {}</h1> */}
      <div className={`skill-div opacity`}>
        <div
          className={
            attacked
              ? `inside-div-pokemon-${props.pok2.id} ${props.pok1.color}`
              : `inside-div-pokemon-${props.pok1.id} ${props.pok2.color}`
          }
        ></div>
      </div>
      {!winner.saved ? (
        <div className="anan">
          <div className={`pok-1-infos ${props.pok2.color}`}>
            {/* <div className='hpdiv'><p className='damage-'>-10</p></div> */}
            <h3 className="player-id-fight">Player: {props.pok2.id}</h3>
            <div className="pok-1-hp-falan">
              <p className="pok-1-health">HP:{pok2Score}</p>
              <p className="pok-1-name-1">{props.pok2.name}</p>
            </div>
            <div className="pok-1-div">
              <img className="fighter-pok-img" src={props.pok2.img} alt="" />
            </div>
            {attacked && (
              <div className="moves-container">
                <button
                  className={`pok1moves ${props.pok2.color}`}
                  onClick={attack2}
                >
                  {props.pok2.moves[0].move.name}
                </button>
                <button
                  className={`pok1moves ${props.pok2.color}`}
                  onClick={attack22}
                >
                  {props.pok2.moves[1].move.name}
                </button>
                <button
                  className={`pok1moves ${props.pok2.color}`}
                  onClick={attack222}
                >
                  {props.pok2.moves[2].move.name}
                </button>
              </div>
            )}
          </div>
          <div className="attack-div">
            <p className="attack-p">
              {attackerPok} damaged ({-damaged})
            </p>
            <button className="finish-game-btn" onClick={gameover}>
              Finish the Game
            </button>
          </div>
          <div className={`pok-1-infos ${props.pok1.color}`}>
            <h3 className="player-id-fight">Player: {props.pok1.id}</h3>
            <div className="pok-1-hp-falan">
              <p className="pok-1-health">HP:{pok1Score}</p>
              <p className="pok-1-name-1">{props.pok1.name}</p>
            </div>
            <div className="pok-1-div">
              <img className="fighter-pok-img" src={props.pok1.img} alt="" />
            </div>
            {!attacked && (
              <div className="moves-container">
                <button
                  className={`pok1moves ${props.pok1.color}`}
                  onClick={attack1}
                >
                  {props.pok1.moves[0].move.name}
                </button>
                <button
                  className={`pok1moves ${props.pok1.color}`}
                  onClick={attack11}
                >
                  {props.pok1.moves[1].move.name}
                </button>
                <button
                  className={`pok1moves ${props.pok1.color}`}
                  onClick={attack111}
                >
                  {props.pok1.moves[2].move.name}
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Gameover winner={winner} />
      )}
    </div>
  );
};

export default Start;
