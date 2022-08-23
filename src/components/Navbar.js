import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>

    <div className='navbar'>
        <div className='navbar-left'> 
          
          <h1>
          <Link to='/' className='links'>
         
          Shoaib Chouhdry
         
          </Link>
          </h1>
        </div>
      <ul className='list'>
        <Link  to="/" className='links'>
          Home 
        </Link>
        <Link to="/Languages"className='links' >
        <li>Language</li>
        </Link>
        <Link to="/AcademicProjects" className='links' >
        <li>Academic projects </li>
        </Link>
        
      </ul>
      </div>
      
    </div>
  )
}

export default Navbar
