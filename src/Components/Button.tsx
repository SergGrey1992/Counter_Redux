import React from "react";

type PropsType = {
	title: string
	disabled: boolean
	func: () => void
}

export const ButtonFC: React.FunctionComponent<PropsType> =  ({title, func, disabled}) => {

	return (
		<button
			 onClick={func}
			 disabled={disabled}
		>{title}</button>
	)
}
