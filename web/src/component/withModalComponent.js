import React, { useState, useEffect, useRef } from "react";
import miniModal from '../css/miniModal';

const Modal =  url => WrappedComponent => function Comp(props) {
  
  const [data, setData] = useState("a");

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
  }, []);

  return (
    <>
      <miniModal.ModalBox isOpen={props.state.isOpen} ref={closeid} >
        <miniModal.CloseSpan onClick={props.toggleHandler}>x</miniModal.CloseSpan>
        <WrappedComponent {...props} data={data} />
        <div> <miniModal.WhiteBtn>삭제</miniModal.WhiteBtn> <miniModal.ColorBtn>저장</miniModal.ColorBtn></div>
      </miniModal.ModalBox>
    </>
  );
  };


export default Modal;
