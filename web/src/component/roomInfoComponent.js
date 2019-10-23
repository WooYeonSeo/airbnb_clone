import React, { useState, useEffect, useContext  } from "react";
import {numberCountReducer, numberCountState} from '../reducer/counterReducer.js'
import context from '../context/context'

import '../css/reset.css';
import cardview from '../css/cardStyle.js'

const RoomInfo = props => {
 
  //const [state, dispatch] = useReducer(numberCountReducer, numberCountState);
  //const { state,dispatch } = useContext(context.numberContext);
  useEffect(() => {
      console.log("lalala : ");
  });

  return (
    <>
      <cardview.CardBox>
        <cardview.CardLectBox>
          <cardview.MainImg src ={props.room.pic_id} /> 
        </cardview.CardLectBox>
        <cardview.CardRightBox>
          <cardview.CardTitle> {props.room.title}</cardview.CardTitle>
          <cardview.CardDetailBox> 
            <cardview.CardDetailSpan>
              {props.room.price}, 인원 {props.room.adult_num}
            </cardview.CardDetailSpan>
      
            <cardview.CardDetailFooterBox> 
              <span>
              평점 : {props.room.star}
              </span>
              <span>
                예약
              </span>
            </cardview.CardDetailFooterBox>
          </cardview.CardDetailBox>
        </cardview.CardRightBox>
      </cardview.CardBox>
    </>
  );
};
export default RoomInfo;
