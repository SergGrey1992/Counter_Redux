import React from "react";
import {ButtonFC} from "./Button";

type PropsType = {
	startValueDisplay: number
	inc: () => void
	reset: () => void
}

export const Display: React.FunctionComponent<PropsType> = (
	{
		startValueDisplay,
		inc,
		reset
																														 } ) => {
	return (
		<div>
			{startValueDisplay}
			<ButtonFC title={'INC'} func={inc}/>
			<ButtonFC title={'RESET'}	func={reset} />
		</div>
	)
}