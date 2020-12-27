import React from "react";
import {ButtonFC} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {selectAll} from "../Redux/selectors";
import {Display} from "./Display";
import {incValue, resetValue} from "../Redux/actions";


export const DisplayContainer = () => {
	const {
		startValueDisplay,
		maxValueDisplay,
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
			<Display startValueDisplay={startValueDisplay} inc={inc} reset={reset}/>
		</div>
	)
}