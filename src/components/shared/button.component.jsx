import * as React from "react";

const Button = ({
	callToAction = "Empty button",
	type = "button",
	onLight,
	classProperties,
}) => {
	let properties;
	onLight === true
		? (properties = `btn btn--onLight ${classProperties}`)
		: (properties = `btn btn--onDark ${classProperties}`);

	return (
		<button className={properties} type={type}>
			{callToAction.toUpperCase()}
		</button>
	);
};

export default Button;
