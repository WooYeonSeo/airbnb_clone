import React, { useState, useEffect, useContext  } from "react";
import {numberCountReducer, numberCountState} from '../reducer/counterReducer.js'
import context from '../context/context'

const Counter = props => {
 
  //const [state, dispatch] = useReducer(numberCountReducer, numberCountState);
  const { state,dispatch } = useContext(context.numberContext);
    useEffect(() => {
        console.log("state : ", state);
        //console.log(`myname ${counter} times`);
    });

  return (
    <div>
      <span> {props.category.groupName} : </span>
      <span
        onClick={e => {
            dispatch({"type" : props.category.type , payload: -1})
        }}
      >
        -
      </span>
      <span> {state[props.category.cnt]} </span>
      <span
        onClick={e => {
            dispatch({"type" : props.category.type , payload: +1})
        }}
       >
        +
      </span>
    </div>
  );
};
export default Counter;
