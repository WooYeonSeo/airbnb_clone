import React, { useState, useEffect , useReducer} from "react";
import Modal from "./withModalComponent";
import rangeSlider from '../css/rangeSlider';

const Price = () => {
   const [minPrice, setMinPrice] = useState(12000);
   const [maxPrice, setMaxPrice] = useState(1000000);

    const minPriceHandle = (e) =>{
        let newMin = e.target.value
        if( newMin > maxPrice-1 ){
            newMin = maxPrice;
        }
        setMinPrice(newMin);
    }

    const maxPriceHandle = (e) =>{
        let newMax = e.target.value
        if( newMax < minPrice+1 ){
            newMax = minPrice;
        }
        setMaxPrice(newMax);
    }
    return ( 
         <> 
           <rangeSlider.RangesliderBox >
                <rangeSlider.RangesliderInput type="range" min="12000" max="1000000" value={minPrice} onChange={minPriceHandle} className="slider" id="myRange" />
                <rangeSlider.RangesliderInput type="range" min="12000" max="1000000" value={maxPrice} onChange={maxPriceHandle} className="slider" id="myRange" />
           </rangeSlider.RangesliderBox>
           <div>
                <span> 최저 :<input value={minPrice} type="number" onChange={minPriceHandle}></input></span>
                <span> 최대 : <input value={maxPrice} type="number" onChange={maxPriceHandle}></input></span>
           </div>
          
         </>
    );
}

const PriceModal = Modal(Price);
export default PriceModal;
