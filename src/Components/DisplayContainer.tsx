import React from "react";
import {ButtonFC} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {selectAll} from "../Redux/selectors";
import {Display} from "./Display";
import {incValue} from "../Redux/actions";


export const DisplayContainer = () => {
	const {
		startValueDisplay,
		maxValueDisplay,
	} = useSelector(selectAll);

	let dispatch = useDispatch();

	const inc = () => {
		dispatch(incValue())
		alert("inc")
	}
	const reset = () => {
		alert("reset")
	}

	return (
		<div>
			<Display startValueDisplay={startValueDisplay} inc={inc} reset={reset}/>
		</div>
	)
}