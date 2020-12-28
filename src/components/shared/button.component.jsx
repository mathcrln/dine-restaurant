import * as React from "react";

const Button = ({
	callToAction = "Empty button",
	onLight,
	classProperties,
}) => {
	let properties;
	onLight === true
		? (properties = `btn btn--onLight ${classProperties}`)
		: (properties = `btn btn--onDark ${classProperties}`);

	return <button className={properties}>{callToAction.toUpperCase()}</button>;
};

export default Button;
