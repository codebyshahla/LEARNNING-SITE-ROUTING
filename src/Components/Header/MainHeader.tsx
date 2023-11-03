import React from 'react'
import Home from './Home'
import About from './About'
import Content from './Content'
import {Routes,Route,NavLink} from "react-router-dom"


function MainHeader() {
  return (
    <div>
        <ul className='flex justify-around  text-black '>
            <li>
                <NavLink to="/"> Home</NavLink>
            </li>
            <li>
                <NavLink to="About"> About Us</NavLink>
            </li>
            <li>
                <NavLink to="Content"> Content</NavLink>
            </li>
        </ul>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Content' element={<Content/>}/>
      </Routes>
    </div>
  )
}

export default MainHeader
