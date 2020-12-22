import * as React from 'react'
import Button from '../shared/button.component'
import Container from '../../layout/container'

const ReservationCTA = (props) => {
    return(
        <div className="bg-reservation-cta-image bg-cover p-20">
            <Container classProperties="flex items-center justify-between">
                <h3 className="text-white font-bold">Ready to make a reservation?</h3>
                <Button callToAction="Book a table" onLight={false} destination="/booking/"/>
            </Container>

        </div>

    )

}

export default ReservationCTA