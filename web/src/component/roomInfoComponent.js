import React, { useState, useEffect, useContext  } from "react";
import {numberCountReducer, numberCountState} from '../reducer/counterReducer.js'
import context from '../context/context'

const RoomInfo = props => {
 
  //const [state, dispatch] = useReducer(numberCountReducer, numberCountState);
  //const { state,dispatch } = useContext(context.numberContext);
  useEffect(() => {
      console.log("lalala : ");
  });

  return (
    <div>
      <span> MY ROOM 1</span>
    </div>
  );
};
export default RoomInfo;
