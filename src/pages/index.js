import React, { useState } from 'react'
import Footer from '../components/footer'
import Hero from '../components/heroSection'
import Info from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/navbar'
import Services from '../components/services'
import Sidebar from '../components/sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero />
            <Info {...homeObjOne} />
            <Info {...homeObjTwo} />
            <Services />
            <Info {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
