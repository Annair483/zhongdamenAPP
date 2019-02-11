let defaultState = {
    tid:1,
    navstate:true
}
let reducer = function(state=defaultState,action){
    switch(action.type){
        case 'CHANG_TID':
            return {
                ...state,
                tid:action.payload
            }
        case 'CHANGE_NAV':
            return {
                ...state,
                navstate:action.payload
            }

        default:
            return state;
    }
}

export default reducer;