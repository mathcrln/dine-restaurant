import * as React from 'react'
import Button from '../shared/button.component'
import Container from '../../layout/container'

const ReservationCTA = (props) => {
    return(
        <div className=" bg-cover py-20 laptop:p-20 bg-center bg-reservation-cta-mobile tablet:bg-reservation-cta-tablet laptop:bg-reservation-cta-desktop">
            <Container classProperties="flex items-center justify-between flex-col laptop:flex-row">
                <h3 className="text-white font-bold mb-6 laptop:mb-0">Ready to make a reservation?</h3>
                <Button callToAction="Book a table" onLight={false} destination="/booking/"/>
            </Container>

        </div>

    )

}

export default ReservationCTA