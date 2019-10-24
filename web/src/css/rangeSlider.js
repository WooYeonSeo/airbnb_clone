import styled from 'styled-components';
const rangeSlider = { }

rangeSlider.RangesliderBox = styled.div`
    position: relative;
    display: inline-block;
    width:100%;
    padding:0.75rem 0;
`;

rangeSlider.RangesliderInput = styled.input`
    position: absolute;
    width: 80%;
    left: 10%;
    &::-webkit-slider-thumb {
        position: relative;
        height: 15px;
        width: 15px;
        margin-top: -7px;
        background: #fff;
        border: 1px solid #003D7C;
        border-radius: 25px;
        z-index: 1;
     }

    &::-webkit-slider-runnable-track {
        width: 200px;
        height: 1px;
        background: #003D7C;
    }    
`;

export default rangeSlider