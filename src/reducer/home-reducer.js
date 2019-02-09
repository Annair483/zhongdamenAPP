let defaultState = {
    tid:1
}
let reducer = function(state=defaultState,action){
    switch(action.type){
        case 'CHANG_TID':
            return {
                ...state,
                tid:action.payload
            }

        default:
            return state;
    }
}

export default reducer;