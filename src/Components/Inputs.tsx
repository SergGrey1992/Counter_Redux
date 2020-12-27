import React from "react";
import {ButtonFC} from "./Button";

type PropsType = {
	startValue: number
	maxValue: number
	changeStartValue: (e: React.ChangeEvent<HTMLInputElement>) => void
	changeMaxValue: (e: React.ChangeEvent<HTMLInputElement>) => void
	func: () => void
}

export const Inputs: React.FunctionComponent<PropsType> = (
	{startValue,
		maxValue,
		changeStartValue,
		changeMaxValue,
		func
	}) => {
return (
		<div>
			<label>
StartValue:
				<input type="number"  value={startValue} onChange={changeStartValue}/>
			</label>
			<label>
MaxValue:
				<input type="number"  value={maxValue} onChange={changeMaxValue} />
			</label>

			<ButtonFC title={'SET'}
								func={func}
			/>
		</div>
	)
}