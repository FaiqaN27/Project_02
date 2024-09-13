import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import About from './About'
import Products from './Products'
import Contact from './Contact'
import Footer from './Footer'
import FAQ from './FAQ'

const Home = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <About />
            <Products />
            <Contact />
            <FAQ />
            <Footer />

        </>
    )
}

export default Home