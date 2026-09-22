import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Rooms from './components/sections/Rooms'
import Amenities from './components/sections/Amenities'
import WhyStay from './components/sections/WhyStay'
import Gallery from './components/sections/Gallery'
import Location from './components/sections/Location'
import BookingBand from './components/sections/BookingBand'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <WhyStay />
        <Gallery />
        <Location />
        <BookingBand />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
