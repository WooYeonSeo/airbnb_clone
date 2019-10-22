import React, { useState, useEffect , useReducer} from "react";
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import styled from 'styled-components';
import 'react-dates/initialize';
import moment from 'moment';
import '../css/react_dates_overrides.css';
import Modal from './numberModalComponent';

import {numberCountReducer, numberCountState} from '../reducer/counterReducer.js'
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
  //user state closer
  //const [counter, setCounter] = useState(0);
  // life cycle 에 있는걸 마지막에 넣어줌 순서도 잘 지켜서 넣어라
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput,setFocusedInput] = useState(null);

  const [state, dispatch] = useReducer(numberCountReducer, numberCountState);



  return (
    <>
        <FilterBox>
            목적지 :  <input />
        </FilterBox>

        <FilterButton >
            인원  게스트 : {state.adultCnt} 
        </FilterButton> 
        
        <Modal numberDis={dispatch} numberCnt={state}/>
       
        <DateRangePicker
            startDate={startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => {
                setStartDate(startDate);
                setEndDate(endDate);
            } } // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
            onClose= {()=>{ console.log("onclick close"); setFocusedInput(null) }}
        />
        

        <FilterBox>
            <div name="count">
                <span value ="adult">Nothing</span>
            </div> 
        </FilterBox>
        <Button>
            검색
        </Button>

       
    </>
  );
};


export default Filter;