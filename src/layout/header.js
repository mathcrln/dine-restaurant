import * as React from 'react'
import Logo from '../components/shared/logo.component'
import Container from '../layout/container'
import Button from '../components/shared/button.component'

const Header = () => {
    return(
        <header className="bg-codGray text-white bg-homepage-heeader bg-no-repeat bg-cover h-90">
            <Container>
                <h1 className="pt-16 pb-40">
                    <Logo/>
                </h1>

                <div>
                    <div>
                        <h2 className="mb-6">Exquisite dining <br/>since 1989</h2>
                        <p className="text-body--1 mb-11 w-2/5">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
                        <Button callToAction="Book a table" destination="/booking/"/>
                    </div>
                </div>



            </Container>
        </header>

    )

}

export default Header