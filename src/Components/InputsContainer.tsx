import React from "react";
import {Inputs} from "./Inputs";
import {selectAll} from "../Redux/selectors";
import {useDispatch, useSelector} from "react-redux";
import {ChangeMaxValue, ChangeStartValue, setError, SetValue} from "../Redux/actions";

export const InputsContainer = () => {
	const { startValue, maxValue, disabledButtonSet, error } = useSelector(selectAll);
	let dispatch = useDispatch();

	const changeStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.currentTarget.value
		dispatch(ChangeStartValue((Number(value))))
	}

	const changeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {

		let value = e.currentTarget.value
		dispatch(ChangeMaxValue((Number(value))))

	}

	const setValueHandler = () => {
		if(startValue < 0 ) { dispatch(setError("<0")) }
		if(startValue === maxValue ) {dispatch(setError("===")) }
		if(startValue > maxValue ) { dispatch(setError("MaxValue")) }
		if (startValue < maxValue && startValue >= 0  ) {
			dispatch(SetValue())
		}
		dispatch(SetValue())
		localStorage.setItem("startValue", startValue.toString())
		localStorage.setItem("maxValue", maxValue.toString())
	}

	return (
		<div>
			<Inputs
				startValue={startValue}
				maxValue={maxValue}
				disabledButtonSet={disabledButtonSet}
				changeStartValue={changeStartValue}
				changeMaxValue={changeMaxValue}
				func={setValueHandler}
			/>
			{error}
		</div>
	)
}
