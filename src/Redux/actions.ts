export enum ACTIONS_TYPE {
	START_VALUE = "START_VALUE",
	MAX_VALUE = "MAX_VALUE",
	SET_DISPLAY = "SET_DISPLAY",
	INC_DISPLAY = "INC_DISPLAY",
	RESET = "RESET",
	SET_ERROR = "SET_ERROR"
}

export type ChangeStartValueType = {
	type: ACTIONS_TYPE.START_VALUE,
	payload: {
		startValue: number
	}
}
export type ChangeMaxValueType = {
	type: ACTIONS_TYPE.MAX_VALUE,
	payload: {
		maxValue: number
	}
}
export type SetValueType = {
	type: ACTIONS_TYPE.SET_DISPLAY
}
export type incValueType = {
	type: ACTIONS_TYPE.INC_DISPLAY
}
export type resetValueType = {
	type: ACTIONS_TYPE.RESET
}
export type setErrorType = ReturnType<typeof setError>


export const ChangeStartValue = ( startValue: number ): ChangeStartValueType => {
	return { type:ACTIONS_TYPE.START_VALUE, payload: { startValue } }
}
export const ChangeMaxValue = ( maxValue: number ): ChangeMaxValueType => {
	return { type:ACTIONS_TYPE.MAX_VALUE, payload: { maxValue } }
}

export const SetValue = (): SetValueType => {
	return { type:ACTIONS_TYPE.SET_DISPLAY }
}
export const incValue = (): incValueType => {
	return { type:ACTIONS_TYPE.INC_DISPLAY }
}
export const resetValue = (): resetValueType => {
	return { type:ACTIONS_TYPE.RESET }
}

export const setError = (payload: string) => ({
	type:ACTIONS_TYPE.SET_ERROR, payload
}as const)

export type ActionsReducerTypes = ChangeStartValueType | ChangeMaxValueType | SetValueType | incValueType | resetValueType | setErrorType