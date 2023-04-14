

import React from 'react'

export const Gameover = (props) => {
  return (
    <div className='gameover-cont'>
      <div className={`gameover-inner-cont ${props.winner.color}`}>
        <p className='cong'>Congrats!!</p>
        <p className='winner-player'>Player: {props.winner.id}</p>
        <p className='winner-pok'>{props.winner.name} Wins</p>
        <div className='winner-pok-cont'>
          <img src={props.winner.img} alt='' className='winner-pok-img'/>

        </div>
      <button className='again-btn' onClick={() => window.location.reload(true)}>Play Again</button>
      </div>
    </div>
  )
}

export default Gameover