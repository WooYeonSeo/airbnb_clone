import React, { useState, useEffect, useReducer } from "react";
import styled from 'styled-components';
import RoomInfo from "./roomInfoComponent";
import {numberCountReducer, numberCountState} from '../reducer/counterReducer.js'
// import './Modal.scss';

const MainContainer = styled.div`
    display: inline-block;
    width: 80%;
    border: 1px solid gray;
    border-radius: 2px;
    padding: 0.5rem;
    background-color: #fff;
}
`;


const RoomBox = (props) => {
    const [roomsInfo, setRoomsInfo] = React.useState([]);

    //usememory
    useEffect(()=>{
        let filterString = setFilterString(props.filter) ||"";
        //console.log("filter String" , filterString);
        fetchMyAPI(filterString);
        console.log("---data fetched2 ",props.filter);
    },[props.filter]); 

    const fetchMyAPI = async(filterString)=>{
        let response = await fetch('http://localhost:5000/api/room/search/rooms?'+filterString);
        response = await response.json();
        setRoomsInfo(response);
    }

    const setFilterString = (filterObj)=>{
        let filterString ="";
        let obj = {
            "adult_num" : filterObj["adultCnt"] || "",
        }
        for (let filter in obj) {
            filterString += filter +"="+ obj[filter]
        }
        return filterString;
    }

    const rooms = roomsInfo.map((v, i) => (
        <RoomInfo key={i} room={v} />
    ));
    
    return (
        <>
            <MainContainer>
                <span>ROOMS : {roomsInfo.length}개</span>
                <div>
                    {rooms}
                </div>
            </MainContainer>
        </>
   )
}
export default RoomBox;