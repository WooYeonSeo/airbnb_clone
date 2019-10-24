import React, { useState, useEffect , useReducer, useRef} from "react";
import styled from 'styled-components';
import NumberModal from './numModalComponent';
import DatePicker from './datePickerComponent';
import PriceModal from './priceModalComponent';

import context from '../context/context'
import {numberCountReducer, numberCountState} from '../reducer/counterReducer.js';
import RoomBox from './roomBoxComponent'

const FilterBox = styled.div`
    border: 1px solid #cecece;
    display: inline-block;
    color: black;
    font-weight: 600;
    border-radius: 2px;
    background-color: beige;
    padding: 0.9rem;
    background: ${props=>props.color?'#00a699':'white'};
    margin: 0 0.25rem 0.25rem 0;
`;

const Button = styled.div`
    display:inline-block;
    background : rgb(255, 90, 95);
    color:white;
    font-weight:bold;
    padding: 0.5rem 1rem;
    border-radius: 2px;
   
`;

const FilterButton = styled.div`
    display:inline-block;
    background : ${props=>props.color?'#00a699':'white'};
    color:black;
    font-weight:bold;
    margin: 0.25rem;
    padding: 0.5rem 1rem;
    border-radius: 2px;
    border: 1px solid #dbdbdb;
`;

const Filter = () => {
    const [state, dispatch] = useReducer(numberCountReducer, numberCountState);

    const [position, setPosition] = useState(0);

    const numberBtn = useRef();
    const priceBtn = useRef();

    // 방법1
    const toggleModal = ()=>{
        //console.log("id ",id);
        setPosition(numberBtn.current.offsetLeft);
        dispatch({"type" : 'toggleModal', payload :'numberModal'})
    }

    // 방법2
    const clearValueHandler = (modalId)=>{
        dispatch({"type" : 'clearValues', payload:modalId})
    }

    // 클린코드 읽자.. ㅎ..

    const togglePriceModal = ()=>{
        setPosition(priceBtn.current.offsetLeft);
        dispatch({"type" : 'toggleModal', payload :'priceModal'})
    }
    
    useEffect(() => {
        //setPosition(numberBtn.current.offsetLeft)
    },[]);
    
    return (
        <>
        <context.numberContext.Provider value={{ state, dispatch }}>

            <FilterBox color={state.numberModalIsOpen} ref={numberBtn} onClick={toggleModal} >
                인원  {state.adultCnt? "어른 "+state.adultCnt:""} {state.kidCnt? "아이 "+state.kidCnt:""}  {state.infantCnt? "유아 "+state.infantCnt:""} 
            </FilterBox>
            <NumberModal 
                isOpen={state.numberModalIsOpen} 
                pos={position} 
                toggleHandler={toggleModal} 
                clearValueHandler={()=>{clearValueHandler('numberModal')}} 
            />

            <DatePicker/>

            <FilterBox color={state.priceModalIsOpen} onClick={togglePriceModal}  ref={priceBtn} >
                가격
            </FilterBox>

            <PriceModal 
                isOpen={state.priceModalIsOpen} 
                pos={position} 
                toggleHandler={togglePriceModal} 
                clearValueHandler={()=>{clearValueHandler('priceModal')}}
                dispatch={dispatch}
                state={state}>
            </PriceModal>

            <Button>
                검색
            </Button>

            <RoomBox filter={state}/>
        </context.numberContext.Provider>
        </>
    );
};


export default Filter;