import React from "react";
import {ButtonFC} from "./Button";

type PropsType = {
	startValueDisplay: number
	maxValueDisplay:number
	startValue: number
	disabledButtonReset: boolean
	disabledButtonInc: boolean
	inc: () => void
	reset: () => void
}

export const Display: React.FunctionComponent<PropsType> = (
	{
		startValueDisplay,
		disabledButtonReset,
		disabledButtonInc,
		inc,
		reset
																														 } ) => {
	return (
		<div>
			{startValueDisplay}
			<ButtonFC title={'INC'} func={inc} disabled={disabledButtonInc} />
			<ButtonFC title={'RESET'}	func={reset} disabled={disabledButtonReset}/>
		</div>
	)
}