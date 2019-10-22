import React, { useState, useEffect, useReducer } from "react";
import styled from 'styled-components';
import Counter from "./numberCounterComponent";
import {numberCountReducer, numberCountState} from '../reducer/counterReducer.js'
// import './Modal.scss';

const ModalBox = styled.div`
    display: inline-block;
    width: 400px;
    border: 1px solid gray;
    border-radius: 2px;
    padding: 0.5rem;
    z-index: 1;
    background-color: #fff;
    position: absolute;
    top:56px;
    left :900px;
}
`;

const Modal = (props) => {
   // const [state, dispatch] = useReducer(numberCountReducer, numberCountState);
    
    const categories = [ 
        {"groupName" :"성인" , "type" : "setAdultCount", "cnt" : "adultCnt"}, 
        {"groupName" :"아이" , "type" : "setKidCount", "cnt" : "kidCnt"}, 
        {"groupName" :"유아" , "type" : "setInfantCount", "cnt" : "infantCnt"},
    ];

    const lists = categories.map((v, i) => (
        <Counter key={i} category={v}  />
    ));
    
    return (
        <>
            <ModalBox>
                {lists}
                <div>
                    <button> 삭제 </button>
                    <button> 저장 </button>
                </div>
            </ModalBox>
        </>
   )
}
export default Modal;