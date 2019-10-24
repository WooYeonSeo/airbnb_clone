import React, { useState, useEffect , useReducer} from "react";
import Modal from "./withModalComponent";
import RangeSlider from './rangeSliderComponent';

const Price = (props) => {

    const minPriceHandle = (e) =>{
        let newMin = e.target.value
        if( newMin > props.state.maxPrice-1 ){
            newMin = props.state.maxPrice;
        }
        props.dispatch({type:'setMinPrice', payload : newMin});
       
    }

    const maxPriceHandle = (e) =>{
        let newMax = e.target.value
        if( newMax < props.state.minPrice+1 ){
            newMax = props.state.minPrice;
        }
        props.dispatch({type:'setMaxPrice', payload : newMax});
    }
    return ( 
         <> 
           <RangeSlider
              minPrice={props.state.minPrice}
              minPriceHandle={minPriceHandle}
              maxPrice={props.state.maxPrice}
              maxPriceHandle={maxPriceHandle}
           ></RangeSlider>
         </>
    );
}

const PriceModal = Modal(Price);
export default PriceModal;
