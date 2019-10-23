import React, { useState, useEffect , useReducer, useRef} from "react";
import styled from 'styled-components';
import Modal from './numberModalComponent';
import NumberModal from './numModalComponent';
import DatePicker from './datePickerComponent';

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
    padding: 0.75rem;
    background: white;
    margin: 0.25rem;
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
    background : white;
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
    const toggleModal = ()=>{
        dispatch({"type" : 'toggleModal', payload: 'test'})
    }
    const clearValueHandler = ()=>{
        dispatch({"type" : 'clearValues', payload: 'test'})
    }

    const searchRoomsHandler = ()=>{

    }

    useEffect(() => {
        setPosition(numberBtn.current.offsetLeft)
    },[]);
    return (
        <>
            <FilterBox>
                목적지 :  <input />
            </FilterBox>
            <context.numberContext.Provider value={{ state, dispatch }}>
                <FilterButton ref={numberBtn} onClick={toggleModal} >
                    인원  {state.adultCnt? "어른 "+state.adultCnt:""} {state.kidCnt? "아이 "+state.kidCnt:""}  {state.infantCnt? "유아 "+state.infantCnt:""} 
                </FilterButton>
                <NumberModal state={state} pos={position} toggleHandler={toggleModal} clearValueHandler={clearValueHandler} />
            </context.numberContext.Provider>
            <DatePicker/>
            <FilterBox>
                가격
            </FilterBox>
            <Button onClick={searchRoomsHandler}>
                검색
            </Button>

            <RoomBox />
        </>
    );
};


export default Filter;