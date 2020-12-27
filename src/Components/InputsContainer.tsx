import React from "react";
import {Inputs} from "./Inputs";
import {selectAll} from "../Redux/selectors";
import {useDispatch, useSelector} from "react-redux";
import {ChangeMaxValue, ChangeStartValue, SetValue} from "../Redux/actions";




export const InputsContainer = () => {
	const { startValue, maxValue } = useSelector(selectAll);
	let dispatch = useDispatch();

	const changeStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.currentTarget.value
		if (!isFinite(+value)) return;
		dispatch(ChangeStartValue((Number(value))))
	}

	const changeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.currentTarget.value
		if (!isFinite(+value)) return;
		dispatch(ChangeMaxValue((Number(value))))
	}

	const setValueHandler = () => {
		dispatch(SetValue())
	}


	return (
		<div>
			<Inputs
				startValue={startValue}
				maxValue={maxValue}
				changeStartValue={changeStartValue}
				changeMaxValue={changeMaxValue}
				func={setValueHandler}

			/>
		</div>
	)
}
