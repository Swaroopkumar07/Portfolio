import React from 'react'
import '../styles/Contact.css'

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';





const emailadress = 'painamswaroopkumar@gmail.com'

export default function () {
  return (
    <div>
      <p className='skills_heading'>Contact</p>


      <div className='bottombar'>
        <a href='https://www.facebook.com/profile.php?id=100078837712551&mibextid=ViGcVu' >
          <FacebookIcon style={{ color: '#FFFFFF' }} fontSize="large" />
        </a>
        <a href='https://instagram.com/swaroop.kumar___?igshid=MmVlMjlkMTBhMg==' >
          <InstagramIcon style={{ color: '#FFFFFF' }} fontSize="large" />
        </a>

        <a href='https://www.linkedin.com/in/swaroopkumar-painam-321577222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' >
          <LinkedInIcon style={{ color: '#FFFFFF' }} fontSize="large" />
        </a>
        <a href={'mailto:${emailadress}'}>
          <EmailIcon style={{ color: '#FFFFFF' }} fontSize="large" />
        </a>
        <a href='https://github.com/Swaroopkumar07' >
          <GitHubIcon style={{ color: '#FFFFFF' }} fontSize="large" />
        </a>



      </div>
    </div>
  )
}
