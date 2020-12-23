import * as React from 'react'
import Logo from '../components/shared/logo.component'
import Container from '../layout/container'

const Footer = () => {
    return(
        <footer className="bg-codGray min-h-full py-12 text-white">
            <Container classProperties="grid laptop:grid-cols-3 laptop:gap-2">
            <Logo/>
                <div className="text-heading--4">
                    MARTHWAITE, SEDBERGH <br/>
                    CUMBRIA<br/>
                    +00 44 123 4567
                </div>
                <div className="text-heading--4">
                    OPEN TIMES <br/>
                    MON - FRI: 09:00 AM - 10:00 PM<br/>
                    SAT - SUN: 09:00 AM - 11:30 PM
                </div>
            </Container>
        </footer>

    )

}

export default Footer