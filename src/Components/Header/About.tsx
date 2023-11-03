import React from 'react'
import img2 from "../../assets/img2.jpg"

function About() {
  return (
    <div className=' bg-yellow-950 w-screen h-screen p-28 '>
      <div className=' bg-yellow-200 flex '>
        <div><img className=' w-[50%] ' src={img2}/></div>
        <div className=' flex flex-col items-center justify-center '>
          <h1 className='text-3xl'>FULL STACK DEVELOPER</h1>
          <p>BECOME A FULLSTACK DEVELOPER</p>
          <br /><br /><p className=' text-center'>Instructors from around the world teach <br /> millions of learners on Udemy. We provide  <br />the tools and skills to teach what you love.
</p> <br /> <br />
          <ul>
            <li>ANGULAR</li>
            <li>FLUTTER</li>
            <li>RECT</li> <br />
            <li><button className='bg-white w-64'>JOIN NOW</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
