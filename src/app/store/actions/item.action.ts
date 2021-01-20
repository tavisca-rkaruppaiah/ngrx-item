import { Action } from "@ngrx/store";
import { Item } from "../models/item.model";

export enum ActionType {
    ADD_ITEM = '[Item] Add'
}

export class AddItemAction implements Action{
    readonly type = ActionType.ADD_ITEM;

    constructor(public payload: Item){}
}

export type ActionItem = AddItemAction;