import { combineReducers } from "redux";

// 引入reducer
import homeReducer from './home-reducer';

// 把多个reducer组合成一个reducer

const rootReducer = combineReducers({
    home:homeReducer,
});

export default rootReducer;