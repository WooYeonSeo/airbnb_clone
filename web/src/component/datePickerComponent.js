import React, { useState, useEffect, useReducer } from "react";
import styled from 'styled-components';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import '../css/react_dates_overrides.css';
import 'react-dates/lib/css/_datepicker.css';

const DatePicker = (props) => {
   // const [state, dispatch] = useReducer(numberCountReducer, numberCountState);
   const [startDate, setStartDate] = useState(null);
   const [endDate, setEndDate] = useState(null);
   const [focusedInput,setFocusedInput] = useState(null);

    return (
        <>
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
        </>
   )
}
export default DatePicker;