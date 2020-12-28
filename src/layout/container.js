import * as React from "react";

const Container = (props) => {
	return (
		<div
			className={`
		            w-10.5/12 m-auto ${props.classProperties} text-center
		            tablet:text-left
                    laptop:w-77
                    `}
		>
			{props.children}
		</div>
	);
};

export default Container;
