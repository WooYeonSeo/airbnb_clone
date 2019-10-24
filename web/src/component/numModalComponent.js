import React, { useState, useEffect , useReducer} from "react";
import Modal from "./withModalComponent";
import Counter from "./numberCounterComponent";

const Number = () => {
    const categories = [ 
        {"groupName" :"성인" , "type" : "setAdultCount", "cnt" : "adultCnt"}, 
        {"groupName" :"아이" , "type" : "setKidCount", "cnt" : "kidCnt"}, 
        {"groupName" :"유아" , "type" : "setInfantCount", "cnt" : "infantCnt"},
    ];

    const lists = categories.map((v, i) => (
        <Counter key={i} category={v}  />
    ));
 
    return ( 
         <div> 
            {lists}
         </div>
    );
}

const NumberModal = Modal(Number);
export default NumberModal;
