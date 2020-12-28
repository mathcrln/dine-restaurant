import * as React from "react";
import Footer from "../layout/footer";
import Feature from "../components/homepage/features/feature.component";
import ReservationCTA from "../components/homepage/reservations-cta.component";
import Menu from "../components/homepage/menu/menu.component";
import Events from "../components/homepage/events/events.component";
import Hero from "../components/shared/hero.component";
import { Helmet } from "react-helmet";

const IndexPage = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Dine Restaurant</title>
				<link
					rel="canonical"
					href="https://dine-restaurant.mathcrln.vercel.app/"
				/>
			</Helmet>
			<main>
				<Hero
					page="homepage"
					heroTitle={
						<span>
							Exquisite dining <br />
							since 1989
						</span>
					}
					heroDescription="Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse."
					heroButton="Book a table"
					heroButtonDestination="/booking"
					classProperties="pt-56 laptop:h-90"
				/>
				<Feature
					title={
						<span>
							Enjoyable place <br /> for all the family
						</span>
					}
					description="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
					srcImage="enjoyable-place"
					orientation="image-left"
				/>
				<Feature
					title={
						<span>
							The most locally
							<br /> sourced food
						</span>
					}
					description="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
					srcImage="locally-sourced"
					orientation="image-right"
				/>
				<Menu />
				<Events />
				<ReservationCTA />
				<Footer />
			</main>
		</div>
	);
};

export default IndexPage;
