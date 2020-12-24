import * as React from 'react'
import Container from '../../layout/container'
import Header from '../../layout/header'
import Button from './button.component'

const Hero = () => {
    return(
        <header className="bg-codGray text-white bg-center bg-no-repeat bg-cover pb-44 laptop:h-90
                            bg-homepage-heeader-mobile
                            laptop:bg-homepage-heeader 
                            tablet:bg-homepage-heeader-tablet 
                            "
        >
            <Container>
                <Header/>
                <div>
                    <div>
                        <h2 className="mb-8 text-heading--1 laptop:mb-5">Exquisite dining <br/>since 1989</h2>
                        <p className="text-body--1 mb-10 laptop:w-2/5">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                        <Button callToAction="Book a table" destination="/booking/"/>
                    </div>
                </div>
            </Container>
        </header>

    )

}

export default Hero