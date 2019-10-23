import styled from 'styled-components';
const miniModal = { }

miniModal.ModalBox = styled.div`
    display: inline-block;
    overflow:hidden;
    width: 400px;
    display: ${props => props.isOpen? 'block': 'none'};
    border: 1px solid rgba(118, 118, 118, 0.28);
    border-radius: 0.5rem;
    padding: 0.5rem;
    z-index: 1;
    background-color: #fff;
    position: absolute;
    top:56px;
    left :900px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 37px !important;
}
`;

miniModal.WhiteBtn = styled.div`{
    cursor: pointer ;
    display: inline-block ;
    position: relative ;
    text-align: center ;
    width: auto ;
    font-size: 1rem ;
    line-height: 20px ;
    font-weight: 600 ;
    padding: 10px;
    color: rgb(34, 34, 34) ;
    margin: 0px ;
    text-decoration: underline ;
    float:left;
}`;

miniModal.ColorBtn = styled.div`{
  cursor: pointer ;
  display: inline-block ;
  position: relative ;
  text-align: center ;
  width: auto ;
  font-size: 1rem ;
  line-height: 20px ;
  font-weight: 600 ;
  padding: 10px;
  margin: 0px ;
  color: #306b30;
  float:right;
}`;


miniModal.CloseSpan = styled.div`{
  float : right;
}`;

export default miniModal