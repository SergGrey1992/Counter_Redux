import {ACTIONS_TYPE, ActionsReducerTypes} from "./actions";

type initialStateType = {
	startValue: number
	maxValue: number
	startValueDisplay: number
	maxValueDisplay: number
	disabledButtonSet: boolean
	disabledButtonInc: boolean
	disabledButtonReset: boolean
	error: string
}
let InitialState: initialStateType = {
	startValue: 0,
	maxValue: 5,
	startValueDisplay: 0,
	maxValueDisplay: 0,
	disabledButtonSet: false,
	disabledButtonInc: false,
	disabledButtonReset: false,
	error: ""
}

const Reducer = (state: initialStateType = InitialState, action: ActionsReducerTypes): initialStateType => {
	switch (action.type) {
		case ACTIONS_TYPE.START_VALUE : {
			return {
				...state,
				...action.payload,
				disabledButtonSet: false,
				disabledButtonInc: true,
				disabledButtonReset: true,
				error: ''
			}
		}
		case ACTIONS_TYPE.MAX_VALUE: {
			return {
				...state,
				...action.payload,
				disabledButtonSet: false,
				disabledButtonInc: true,
				disabledButtonReset: true,
				error: ''
			}
		}
		case ACTIONS_TYPE.SET_DISPLAY: {
			if (state.error !== "") {
				return {
					...state,
					disabledButtonSet: true,
					disabledButtonReset: true,
					disabledButtonInc: true,

				}
			} else {
				return {
					...state,
					startValueDisplay: state.startValue,
					disabledButtonSet: true,
					disabledButtonReset: true,
					disabledButtonInc: false,

				}
			}
		}
		case ACTIONS_TYPE.INC_DISPLAY: {
			if (state.startValueDisplay === state.maxValue) {
				return {
					...state,
					disabledButtonInc: true
				}
			}
			return {
				...state,
				startValueDisplay: state.startValueDisplay + 1,
				maxValueDisplay: state.maxValue,
				disabledButtonReset: false
			}
		}
		case ACTIONS_TYPE.RESET: {
			if (state.error !== "" && state.startValue !== state.maxValue) {
				return {
					...state,
					disabledButtonReset: false
				}
			} else {
				return {
					...state,
					startValueDisplay: state.startValue,
					disabledButtonReset: true,
					disabledButtonInc: false
				}
			}
		}
		case ACTIONS_TYPE.SET_ERROR: {
			return {
				...state,
				error: action.payload
			}
		}
		default:
			return state
	}
}
export default Reducer;