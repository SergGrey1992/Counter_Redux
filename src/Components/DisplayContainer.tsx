import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAll} from "../Redux/selectors";
import {Display} from "./Display";
import {incValue, resetValue} from "../Redux/actions";

export const DisplayContainer = () => {
	const {
		startValueDisplay,
		maxValueDisplay,
		startValue,
		disabledButtonReset,
		disabledButtonInc
	} = useSelector(selectAll);

	let dispatch = useDispatch();

	const inc = () => {
		dispatch(incValue())
	}
	const reset = () => {
		dispatch(resetValue())

	}

	return (
		<div>
			<Display startValueDisplay={startValueDisplay}
							 startValue={startValue}
							 inc={inc}
							 reset={reset}
							 maxValueDisplay={maxValueDisplay}
							 disabledButtonInc={disabledButtonInc}
							 disabledButtonReset={disabledButtonReset}
			/>
		</div>
	)
}