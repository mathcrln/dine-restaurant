import * as React from "react";

const BasicInput = ({
	name,
	type,
	id,
	errorStatus,
	errorMessage,
	handleChange,
}) => {
	return (
		<div className="text-left mb-10">
			<input
				placeholder={name}
				type={type}
				id={id}
				className="border-b border-codGray pl-6 pb-4 mb-4 h-14 w-full focus:outline-none ring-0 *"
				onChange={handleChange}
			/>
			{errorStatus ? (
				<p className="text-errorRed pl-6 text-xs">{errorMessage}</p>
			) : (
				""
			)}
		</div>
	);
};

export default BasicInput;
