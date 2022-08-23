import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Languages from './components/Languages'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css'
import AcademicProjects from './components/AcademicProjects'

const App = () => {
  return (
   
    <div className='app'>

<Router>

           <Navbar/>    
    
      <Switch>
      <Route  exact path="/"> <Home/>
      </Route>
      <Route exact path="/Languages">
      <Languages/>
      </Route>
      <Route exact path="/AcademicProjects">
      <AcademicProjects/>
      </Route>

   </Switch>
   </Router>
         </div>
         
  )
}

export default App
