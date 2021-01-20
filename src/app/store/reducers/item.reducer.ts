import { ActionItem, ActionType } from "../actions/item.action";
import { Item } from "../models/item.model";

const initialState : Array<Item> = [
    {
        name : 'Ragu'
    }
];

export function ItemReducer(state : Array<Item> = initialState, action : ActionItem){
    switch(action.type){
        case ActionType.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
}