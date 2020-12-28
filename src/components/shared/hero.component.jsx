import * as React from "react";
import Container from "../../layout/container";
import Header from "../../layout/header";
import Button from "./button-link.component";

const Hero = ({
	page = "homepage",
	heroTitle,
	heroDescription,
	heroButton = undefined,
	heroButtonHide,
	heroButtonDestination = undefined,
	classProperties,
}) => {
	return (
		<section
			className={`laptop:pt-16 
                          bg-codGray text-white bg-no-repeat bg-top bg-cover laptop:bg-center laptop:bg-cover 
                            bg-${page}-hero-mobile
                            laptop:bg-${page}-hero-desktop 
							tablet:bg-${page}-hero-tablet 
							${classProperties}
                            `}
		>
			<Container>
				<Header />
				<div>
					<div>
						<h2 className="mb-3 text-heading--1 laptop:mb-5">{heroTitle}</h2>
						<p className="text-body--1 mb-6 tablet:mb-10 laptop:w-2/5">
							{heroDescription}
						</p>

						{heroButton ? (
							<Button
								callToAction={heroButton}
								destination={`${heroButtonDestination}`}
								classProperties={
									heroButtonHide ? `${heroButtonHide}:hidden` : ""
								}
							/>
						) : (
							""
						)}
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
