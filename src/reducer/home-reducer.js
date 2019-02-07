let defaultState = {
    tid:1
}
let reducer = function(state=defaultState,action){
    switch(action.type){
        case 'CHANG_TID':
            return {
                ...state,
                price:action.payload.tid
            }

        default:
            return state;
    }
}

export default reducer;