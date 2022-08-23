import React from 'react'
import Intro from './Intro'
import Languages from './Languages'
import'./Home.css'
import Footer from './Footer'
import AcademicProjects from './AcademicProjects'


const Home = () => {

   

  return (
    <div>
        <Intro/>
         <Languages/>
         <AcademicProjects/>
        <Footer/> 
        </div>
  )
}

export default Home
