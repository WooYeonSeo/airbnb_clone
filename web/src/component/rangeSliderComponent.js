import React, { useState, useEffect , useReducer} from "react";
import rangeSlider from '../css/rangeSlider';
const RangeSlider = (props) => {

 
    return ( 
         <> 
          <rangeSlider.RangesliderBox >
                <rangeSlider.RangesliderInput type="range" min="12000" max="1000000" value={props.minPrice} onChange={props.minPriceHandle} className="slider" id="myRange" />
                <rangeSlider.RangesliderInput type="range" min="12000" max="1000000" value={props.maxPrice} onChange={props.maxPriceHandle} className="slider" id="myRange" />
           </rangeSlider.RangesliderBox>
           <span> 최저 :<input value={props.minPrice} type="number" onChange={props.minPriceHandle}></input></span>
          <span> 최대 : <input value={props.maxPrice} type="number" onChange={props.maxPriceHandle}></input></span>
         </>
    );
}


export default RangeSlider;
