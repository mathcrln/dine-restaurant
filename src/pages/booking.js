import * as React from "react"
import Footer from '../layout/footer'
import ReservationCTA from '../components/homepage/reservations-cta.component'
import Header from '../layout/header'
const IndexPage = () => {
  return (
    <main>
        <Header/>
        <h1 className="bg-beaver font-heading-bold font-thin text-5xl text-center">Reservation</h1>
        <ReservationCTA/>
        <Footer/>
      </main>
  )
}

export default IndexPage
