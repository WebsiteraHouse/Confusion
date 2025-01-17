import { DISHES } from "../../shared/dishes";
import * as ActionTypes from '../ActionTypes';

export const Dishes = (state={
    isLoading:true, 
    errMess:null, 
    dishes:[]
}, action)=>{
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {
                ...state,
                isLoading:false,
                errMess:null,
                dishes:action.payload
            }
        case ActionTypes.DISHES_LOADING:
            return {
                ...state,
                isLoading:action.payload,
                errMess:null
            }
        case ActionTypes.DISHES_FAILED:
            return{
                ...state,
                isLoading:false,
                errMess:action.payload
            }
        default:
            return state
    }
};