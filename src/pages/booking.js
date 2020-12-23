import * as React from "react"
import Footer from '../layout/footer'
import ReservationCTA from '../components/homepage/reservations-cta.component'
import Hero from '../components/shared/hero.component'

const IndexPage = () => {
  return (
    <main>
        <Hero/>
        <h1 className="bg-beaver font-heading-bold font-thin text-5xl text-center">Reservation</h1>
        <ReservationCTA/>
        <Footer/>
      </main>
  )
}

export default IndexPage
