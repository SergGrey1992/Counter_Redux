import {ACTIONS_TYPE, ActionsReducerTypes} from "./actions";

type initialStateType = {
	startValue: number
	maxValue: number
	startValueDisplay: number
	maxValueDisplay: number
}

let InitialState: initialStateType = {
	startValue: 0,
	maxValue: 5,
	startValueDisplay: 0,
	maxValueDisplay: 0
}

const Reducer = (state: initialStateType = InitialState, action: ActionsReducerTypes): initialStateType => {
	switch (action.type) {
		case ACTIONS_TYPE.START_VALUE : {
			debugger
			return {
				...state,
				...action.payload
			}
		}
		case ACTIONS_TYPE.MAX_VALUE: {
			return {
				...state,
				...action.payload
			}
		}
		case ACTIONS_TYPE.SET_DISPLAY: {
			return {
				...state,
				startValueDisplay: state.startValue
			}
		}
		case ACTIONS_TYPE.INC_DISPLAY: {
			return {
				...state,
				startValueDisplay: state.startValueDisplay+1
			}
		}
		case ACTIONS_TYPE.RESET: {
			return {
				...state,
				startValueDisplay: state.startValue
			}
		}
		default:
			return state
	}
}

export default Reducer;