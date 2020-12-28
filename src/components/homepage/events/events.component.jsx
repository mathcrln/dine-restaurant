import * as React from "react";
import Container from "../../../layout/container";
import Button from "../../shared/button-link.component";
import SectionText from "../section-text.component";

const Events = () => {
	return (
		<section>
			<Container classProperties="py-20">
				<SectionText
					title="Family Gathering"
					description="We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
					classProperties="py-10"
				/>
				<Button
					callToAction="Book a table"
					onLight={true}
					destination="/booking/"
				/>
			</Container>
		</section>
	);
};

export default Events;
