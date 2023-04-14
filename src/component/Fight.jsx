import vsimg from "../image/vsimg.jpg"

// import React, { useState } from 'react'

export const Fight = (props) => {

  return (
    <div className="vs">
        {!props.start ? <div className="amk"><img src={vsimg} alt='' className="vs-img"/>
        <button className="start-fight-btn" onClick={props.setStart}>Start Fight</button></div>: ""}
    </div>
  )
}
export default Fight;