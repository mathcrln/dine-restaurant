import * as React from "react";
import { Link } from "gatsby";
import LogoDine from "../../assets/logo.svg";

const Logo = () => {
	return (
		<Link to="/">
			<img
				src={LogoDine}
				alt="Dine Restaurant"
				className="logo w-max-w m-auto tablet:m-0 h-8 laptop:h-10"
			/>
		</Link>
	);
};

export default Logo;
