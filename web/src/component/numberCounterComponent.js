import React, { useState, useEffect, useReducer } from "react";
import {numberCountReducer, numberCountState} from '../reducer/counterReducer.js'

const Counter = props => {
 
  //const [state, dispatch] = useReducer(numberCountReducer, numberCountState);
  useEffect(() => {
    //console.log(`myname ${counter} times`);
  });

  return (
    <div>
      <span> {props.category.groupName} : </span>
      <span
        onClick={e => {
            props.numberDis({"type" : props.category.type , payload: -1})
        }}
      >
        -
      </span>
      {console.log(props.numberCnt)}
      <span> {props.category.cnt} : {props.numberCnt[props.category.cnt]} </span>
      <span
        onClick={e => {
            props.numberDis({"type" : props.category.type , payload: +1})
        }}
       >
        +
      </span>
    </div>
  );
};
export default Counter;
