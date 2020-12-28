import * as React from "react";
import Container from "../../layout/container";
import BookingForm from "./form/booking-form.component";

const ReservationSection = () => {
	return (
		<section>
			<Container classProperties="flex justify-end">
				<BookingForm />
			</Container>
		</section>
	);
};

export default ReservationSection;
