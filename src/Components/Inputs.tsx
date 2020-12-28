import React from "react";

type PropsType = {
	label: string
	value: number
	changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const InputComponent: React.FunctionComponent<PropsType> = (
	{
		value,
		label,
		changeValue,
	}) => {
	return (
		<div>
			<label>
				{label}:
				<input type="number" value={value} onChange={changeValue}/>
			</label>


		</div>
	)
}