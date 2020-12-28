import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../layout/footer";
import Hero from "../components/shared/hero.component";
import ReservationSection from "../components/booking/reservation-section.component";

const BookingPage = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Booking | Dine Restaurant</title>
				<link
					rel="canonical"
					href="https://dine-restaurant.mathcrln.vercel.app/"
				/>
			</Helmet>
			<main>
				<Hero
					page="booking"
					heroTitle="Reservations"
					heroDescription="We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you."
					heroButton="Reserve place"
					heroButtonHide="tablet"
					heroButtonDestination="/"
					classProperties="pt-14 pb-44 laptop:h-150"
				/>
				<ReservationSection />
				<Footer />
			</main>
		</div>
	);
};

export default BookingPage;
