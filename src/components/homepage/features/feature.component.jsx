import * as React from 'react'
import Container from '../../../layout/container'
import FeatureText from '../descriptive-text.component'
import Divider from '../../../assets/patterns/pattern-divide.svg'

const Feature = ({title, description, srcImage, orientation}) => {
    const isRight = (orientation === "image-right");
    return(
        <div>
            <Container classProperties={`flex justify-between flex-col ${isRight? "laptop:flex-row-reverse" : "mb-30" } laptop:flex-row`}>
                <div className="laptop:w-1/2 max-w-max">
                    <img src={require(`../../../assets/homepage/${srcImage.toLowerCase()}.jpg`)}
                    alt="" 
                    className={`${isRight? "laptop:-mb-18" : "-mt-18" }`}
                    />
                </div>
                <div className={`flex flex-col justify-items-start items-center laptop:items-start laptop:w-1/2  ${isRight? "mt-50 laptop:pr-27.5" : " mt-44 laptop:pl-27.5" }`}>
                    <img src={Divider} alt="" className="mb-12"/>
                    <FeatureText title={title} description={description}/>
                </div>
            </Container>

        </div>

    )

}

export default Feature