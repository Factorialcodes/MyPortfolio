import React, { useState } from 'react'
import { FrontView , MyContact} from '../Hero/data'
import Hero from '../Hero/hero.components'
import Navbar from '../Navbar/navbar.component'
import { AboutInfo, ServicesInfo } from '../Services/data'
import SideBar from '../SideBar/sidebar.component'
import About from '../Services/about.components'
import Contact from '../Contact/contact.component'
import Hireme from '../HireMe/hireme.component'

const Home = () => {
    const[isOpen, setIsOpen] = useState()
    const toggle =() =>{
        setIsOpen(!isOpen);
    }
  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Hero {...FrontView}/>
        <About {...ServicesInfo}/>
        <About {...AboutInfo}/>
        <Contact {...MyContact}/>
        <Hireme/>
    </>
  )
}

export default Home