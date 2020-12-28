import * as React from "react";
import Container from "../../layout/container";
import Form from "./form/form.component";

const ReservationSection = () => {
	return (
		<section>
			<Container classProperties="flex justify-end">
				<Form />
			</Container>
		</section>
	);
};

export default ReservationSection;
