import React from 'react'
import img from "../../assets/img1.jpg"

function Home() {
  return (
    <div>
        <div className='bg-cover w-screen h-screen' style={{backgroundImage:`url(${img})`}}>
          <ul className='sm:flex justify-around text-white font-thin text-base bg-yellow-950'>
            <li className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
</svg>
SQUARE SPACE</li>
           <li>
            <button className='w-52 border-b-2 flex justify-center'>SEARCH DOMAIN<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</button>
           </li>
           <li>LOG IN</li>
           <li><button className='w-40 bg-yellow-600'>CREATE A SITE</button></li>
          </ul>

          <div className='text-white font-thin  p-48'>
            <h1 className='text-6xl'>MAKE IT FRESH <br /><span className='text-3xl'>MAKE YOUR OWN WEBSITE.</span></h1><br /><br />
            <button className='bg-white text-black w-52'>Join Our Team</button>
          </div>

        </div>
      
    </div>
  )
}

export default Home
