import * as React from "react"
import Footer from '../layout/footer'
import Feature from '../components/homepage/features/feature.component'
import ReservationCTA from '../components/homepage/reservations-cta.component'
import Hero from '../components/shared/hero.component'
const IndexPage = () => {
  return (
    <main>
        <Hero/>
        <Feature 
            title={<span>Enjoyable place <br/> for all the family</span>} 
            description="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
            srcImage="enjoyable-place-desktop"
            orientation="image-left"
        />
        <Feature 
            title={<span>The most locally<br/> sourced food</span>} 
            description="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
            srcImage="locally-sourced-desktop"
            orientation="image-right"
        />
        
        <ReservationCTA/>
        <Footer/>
      </main>
  )
}

export default IndexPage
