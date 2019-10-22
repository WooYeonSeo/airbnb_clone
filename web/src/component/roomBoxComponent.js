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
   // const [state, dispatch] = useReducer(numberCountReducer, numberCountState);
    //const [data, dataSet] = useState(false);
    let roomsInfo  = useFetch('http://localhost:5000/api/room/search/rooms',null) ||[ ];

    useEffect( ()=>{
        console.log("data fetched");

    }, []);

    /* const fetchMyAPI = async ()=>{
        let response = await fetch('api/data')
        response = await response.json()
        dataSet(response)
    } */

    const rooms = roomsInfo.map((v, i) => (
        <RoomInfo key={i} room={v} />
    ));
    
    return (
        <>
            <MainContainer>
                <span>ROOMS</span>
                <div>
                    {rooms}
                </div>
            </MainContainer>
        </>
   )
}
export default RoomBox;