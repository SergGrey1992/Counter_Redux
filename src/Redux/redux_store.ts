import { createStore, combineReducers} from "redux";
import Reducer from "./reducer";


let reducers = combineReducers({
	reducer: Reducer
})

export type RootStoreType = ReturnType<typeof reducers>

export let store = createStore(reducers)