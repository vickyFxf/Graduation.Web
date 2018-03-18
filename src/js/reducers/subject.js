/**
 * Created by VickyFan on 2018/3/18.
 */
var _ = require('lodash');

var initialState = {   
    lists:{}
}

function subReducer(state=initialState,action){
    switch(action.type){
        case "GETLISTS":
            return Object.assign({},state,{lists: action.data});
        default:
            return state;
    }
}
export default subReducer;