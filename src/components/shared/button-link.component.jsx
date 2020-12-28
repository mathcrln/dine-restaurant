import * as React from "react";
import { Link } from "gatsby";
import Button from "./button.component";

const ButtonLink = ({
	callToAction,
	destination,
	onLight,
	classProperties,
}) => {
	return (
		<Link to={destination}>
			<Button
				callToAction={callToAction}
				onLight={onLight}
				classProperties={classProperties}
			/>
		</Link>
	);
};

export default ButtonLink;
