
const numberCountState = {
    adultCnt: 0,
    kidCnt: 0,
    infantCnt : 0,
    isOpen : false, 
    priceModalIsOpen : false,
    numberModalIsOpen : false,
};

const numberCountReducer = (state, action)=>{
    switch (action.type) {
        case 'setKidCount':
            return setCount(state, "kidCnt", state.kidCnt +action.payload);
        case 'setAdultCount':
            return setCount (state, "adultCnt" , state.adultCnt + action.payload);
        case 'setInfantCount':
            return setCount(state,"infantCnt", state.infantCnt + action.payload);
        case 'toggleModal':
            return toggleModal(state ,action.payload);
        case 'clearValues':
            return clearValues(state);
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

const toggleModal = (state, modalId)=>{
    let obj ={ ...state };
    console.log(modalId+ " modal is opend ", state[modalId+"IsOpen"]);
    obj[modalId+"IsOpen"] = !state[modalId+"IsOpen"];
    return obj;
}

const clearValues = (state)=>{
    return {
        ...numberCountState,
        isOpen : state.isOpen
    };;
}

export {numberCountReducer, numberCountState};