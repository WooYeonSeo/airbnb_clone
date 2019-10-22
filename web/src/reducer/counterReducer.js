const numberCountState = {
    adultCnt: 0,
    kidCnt: 0,
    infantCnt : 0

};

const numberCountReducer = (state, action)=>{
    switch (action.type) {
        case 'setKidCount':
            return setCount(state, "kidCnt", state.kidCnt +action.payload);
        case 'setAdultCount':
            return setCount (state, "adultCnt" , state.adultCnt + action.payload );
        case 'setInfantCount':
            return setCount(state,"infantCnt", state.infantCnt + action.payload);
        default:
            throw new Error();
    }
}

const setCount = (state, stateKey, cnt)=>{

    let obj ={ ...state };
    if(Number(cnt) < 0){
        obj[stateKey] = 0;
        return obj;
    }
    obj[stateKey] = cnt;
    return obj;
}
  

export {numberCountReducer, numberCountState};