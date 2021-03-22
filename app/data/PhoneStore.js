import Immutable from "immutable";
import {update} from 'immutable'
import {ReduceStore} from "flux/utils";
import Actions from "./Actions.js";
import ActionTypes from "./ActionTypes.js";
import PhonesDispatcher from "./PhonesDispatcher.js";
 
class PhonesStore extends ReduceStore{
    constructor()
    {
        super(PhonesDispatcher);
    }
    getInitialState() {
        return Immutable.List.of("Тяночку б", "Google Pixel 5");
    }
 
    reduce(state, action) {
        console.log(action)
        switch (action.type) {
            case ActionTypes.ADD_ITEM:
                if (action.text) {
                  return state.push(action.text);
                }
                return state;
            case ActionTypes.REMOVE_ITEM:
                let index = state.indexOf(action.text);
                if (index > -1) {
                    return state.delete(index);
                }
                return state;
            case ActionTypes.CHANGE_ITEM:
                let updateIndex = state.indexOf(action.changedText);
                if(updateIndex > -1){
                    return state.set(updateIndex, action.text)
                }
                return state;
            default:
                return state;
        }
    }
}
export default new PhonesStore();