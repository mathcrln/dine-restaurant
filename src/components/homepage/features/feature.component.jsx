import * as React from 'react'
import Container from '../../../layout/container'
import TextWithSeparator from '../text-with-separator.component'

const Feature = ({title, description, srcImage, orientation}) => {
    const isRight = (orientation === "image-right");
    const mobile = require(`../../../assets/homepage/${srcImage.toLowerCase()}-mobile@2x.jpg`);
    const tablet = require(`../../../assets/homepage/${srcImage.toLowerCase()}-tablet@2x.jpg`);
    const laptop = require(`../../../assets/homepage/${srcImage.toLowerCase()}-desktop@2x.jpg`);
    return(
        <div>
            <Container classProperties={`flex justify-between flex-col ${isRight? "laptop:flex-row-reverse" : "laptop:mb-30" } laptop:flex-row`}>
                <div className="laptop:w-1/2 max-w-max min-w-min m-auto">
                    <img 
                        srcSet={`${mobile} 327w, ${tablet} 573w, ${laptop} 540w`} 
                        sizes="(max-width: 640px) 327px, (max-width: 1024px) 573px, 540px"
                        src={mobile}
                        alt="" 
                        className={`${isRight? "laptop:-mb-18" : "-mt-18" }`}
                    />
                </div>
                {/* <div className={`flex flex-col justify-items-start items-center laptop:items-start laptop:w-1/2  ${isRight? "mt-50 laptop:pr-27.5" : " mt-44 laptop:pl-27.5" }`}>
                    <img src={Divider} alt="" className="mb-12"/>
                    <SectionText title={title} description={description}/>
                </div> */}
                <TextWithSeparator title={title} description={description} classProperties={`my-20 ${isRight? "laptop:mt-50 laptop:pr-27.5" : " laptop:mt-44 laptop:pl-27.5" }`}/>
            </Container>

        </div>

    )

}

export default Feature