import React from "react";

type PropsType = {
	title: string
	func: () => void
}


export const ButtonFC: React.FunctionComponent<PropsType> =  ({title, func}) => {

	return (
		<button
			 onClick={func}
		>{title}</button>
	)

}
