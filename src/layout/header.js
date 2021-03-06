import * as React from "react";
import Logo from "../components/shared/logo.component";

const Header = () => {
	return (
		<header>
			<h1 className="pb-11 laptop:pb-40">
				<Logo />
			</h1>
		</header>
	);
};

export default Header;
