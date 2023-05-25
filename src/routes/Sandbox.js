import React from 'react';
import Warriors from "../components/Warriors";
import "./Sandbox.css";

function Sandbox() {
  return (
    <div className="sandbox">
        <div className='stuff'>
            <div className="title">My favorite warrior cats</div>
            <Warriors/>
        </div>
    </div>
  )
}

export default Sandbox