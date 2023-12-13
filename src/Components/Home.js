import React from 'react'
import '../styles/Home.css'
import Profile from '../Images/profile.jpg'

export default function Home() {
  return (
    <div className='Home'>
    <div className='home_image'>
          <img src={Profile} className='profile'></img>
        </div>
    <div className='home_details'>
        <p className='Home_name'>Hi, i`am Swaroop Kumar</p>
        <p className='Home_matter'>Frontend developer</p>  
        <p className='home_content'>💻 Leveraging intermediate expertise in web design, I consistently deliver top-tier quality work. </p>            
    </div>

    
    </div>
  )
}
