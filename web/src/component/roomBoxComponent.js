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

const useFetch = (url, options) => {
    const [response, setResponse] = React.useState(null);
    useEffect( async () => {
        const res =  await fetch(url, options);
        //console.log("res ", res);
        const json = await res.json();
        setResponse(json);
    },[]);
    return response;
};

const RoomBox = (props) => {
    let roomsInfo  = useFetch('http://localhost:5000/api/room/search/rooms',null) ||[ ];

    useEffect(()=>{
        console.log("data fetched");
    }, []);

    const rooms = roomsInfo.map((v, i) => (
        <RoomInfo key={i} room={v} />
    ));
    
    return (
        <>
            <MainContainer>
                <span>ROOMS : N개</span>
                <div>
                    {rooms}
                </div>
            </MainContainer>
        </>
   )
}
export default RoomBox;