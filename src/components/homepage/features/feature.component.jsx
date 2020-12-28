import * as React from "react";
import Container from "../../../layout/container";
import TextWithSeparator from "../text-with-separator.component";

const Feature = ({ title, description, srcImage, orientation }) => {
	const isRight = orientation === "image-right";
	const mobile = require(`../../../assets/homepage/${srcImage.toLowerCase()}-mobile@2x.jpg`);
	const tablet = require(`../../../assets/homepage/${srcImage.toLowerCase()}-tablet@2x.jpg`);
	const laptop = require(`../../../assets/homepage/${srcImage.toLowerCase()}-desktop@2x.jpg`);

	return (
		<section>
			<Container
				classProperties={`flex justify-between flex-col ${
					isRight ? "laptop:flex-row-reverse" : "laptop:mb-30"
				} laptop:flex-row`}
			>
				<div className="laptop:w-1/2 max-w-max min-w-min m-auto">
					<picture>
						<source srcSet={laptop} media="(min-width: 1040px)" />
						<source srcSet={tablet} media="(min-width: 640px)" />
						<img
							src={mobile}
							alt=""
							className={`${isRight ? "laptop:-mb-18" : "-mt-18"}`}
						/>
					</picture>
					{/* <img
						src={mobile}
						srcSet={`${mobile} 654w, ${tablet} 1146w, ${laptop} 1080w`}
						sizes="(max-width: 640px) 100px"
						// sizes="(min-width: 1024px) 540px, (min-width: 640px) 573px, 327px"
						alt=""
						className={`${isRight ? "laptop:-mb-18" : "-mt-18"}`}
					/> */}
				</div>
				{/* <div className={`flex flex-col justify-items-start items-center laptop:items-start laptop:w-1/2  ${isRight? "mt-50 laptop:pr-27.5" : " mt-44 laptop:pl-27.5" }`}>
                    <img src={Divider} alt="" className="mb-12"/>
                    <SectionText title={title} description={description}/>
                </div> */}
				<TextWithSeparator
					title={title}
					description={description}
					classProperties={`my-20 ${
						isRight
							? "laptop:mt-50 laptop:pr-27.5"
							: " laptop:mt-44 laptop:pl-27.5"
					}`}
				/>
			</Container>
		</section>
	);
};

export default Feature;
