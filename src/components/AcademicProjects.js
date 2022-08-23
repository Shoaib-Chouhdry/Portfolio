import React from 'react'
import './Academicprojects.css'

const AcademicProjects = () => {
  return (
    <div className='main'>
      <div className='heading'> 
        <h1>Academic Projects</h1>
      </div>
      <div>  
        <ol>
         <h3> <li>information security management system</li></h3>
         <p>C# and My SQL is used to built this project.ISMS is basically a software used to secure the information  of Assets in an organization.Assets includes Laptop,Desktop,people etc.
          it stores Asset's threats ,vulnerabilities , risk and assign policies regarding that risk according to ISO standard 27001  </p>
          
          <p>GITHUB LINK</p>
          <h3><li>Portfolio website in react js</li> </h3>
          <p>HTML,CSS and Javascript is used to built this website.</p>
        </ol>
      </div>
        
    </div>
  )
}

export default AcademicProjects
