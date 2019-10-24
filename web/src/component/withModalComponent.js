import React, { useState, useEffect, useRef } from "react";
import miniModal from '../css/miniModal';

const Modal =  WrappedComponent => function Comp(props) {

  const closeid = useRef();

  const initialize = () => {
    try {
      // const response = await axios.get(url);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    initialize();
  });

  return (
    <>
      <miniModal.ModalBox isOpen={props.state} ref={closeid} left={props.pos} >
        <miniModal.CloseSpan onClick={props.toggleHandler}>x</miniModal.CloseSpan>
        <WrappedComponent {...props}   />
        <div> <miniModal.WhiteBtn onClick={props.clearValueHandler}>삭제</miniModal.WhiteBtn> <miniModal.ColorBtn>저장</miniModal.ColorBtn></div>
      </miniModal.ModalBox>
    </>
  );
  };


export default Modal;
