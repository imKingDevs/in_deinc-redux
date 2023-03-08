const initialState = 0;
const changeNum = (state = initialState, action) => {
    switch(action.type){
        case "Increment" : return state + action.payload;
        case "Decrement" : if(state > 0){
            return state - 1;
        }else {
            return state;
        };
        default : return state; 
    }
}

export default changeNum;