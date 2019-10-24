import React, { useState, useEffect , useReducer} from "react";
import Modal from "./withModalComponent";
import Counter from "./numberCounterComponent";

const RangeSlider = () => {

 
    return ( 
         <> 
           <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
         </>
    );
}


export default RangeSlider;
