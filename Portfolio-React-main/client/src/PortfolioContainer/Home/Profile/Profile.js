import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Button, IconButton } from '@mui/material';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Google from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from '../../../utilities/ScrollService';
const Profile = () => {
  return (
    
    <div className='profile-container'>

<div className='profile-parent'>
    <div className='profile-details'> 
    <div className='colz'>
        <div className='colz-icon'>

        <a href='https://www.facebook.com/profile.php?id=100006281558748'>
          <IconButton>
              <Facebook className='svg-icons' />
          </IconButton>
        </a>
        <a href='https://www.instagram.com/mr.khan.92/?utm_source=qr'>
        <IconButton>
              <Instagram className='svg-icons' />
          </IconButton>
        </a>
        <a href='#'>
        <IconButton>
              <Google className='svg-icons' />
          </IconButton>
        </a>
        <a href='https://twitter.com/mr_khan92?t=MJS8PX2V3cebzVyKIgdL6Q&s=09'>
        <IconButton>
              <TwitterIcon className='svg-icons' />
          </IconButton>
        </a>

        </div>
    </div>
    <div className='profile-details-name'>
          <span className='name-text'>{""} Hello, I'M
          <span className='highlitghted-text neonText'> Sahil</span>
          </span>
      </div>
      <div className='profile-details-role'>
          <span className='primary-text'>
              {""}
              <h1>
                <Typical 
                loop={Infinity}
                steps={[
                    'Creative Dev💡',
                    1000,
                    'Full Stack Developer💻',
                    1000,
                    'MERN Stack dev🧱',
                    1000,
                    'React/React Native Dev🎗',
                    1000,
                ]}
                wrapper="p"
                />
              </h1>
              <span className='profile-role-tagline'>
                  Knack of creating a Full stack web app with frontend and backend operations.
              </span>
          </span>
      </div>
      <div className='profile-options'>
      
      <Button variant="contained" className="btn hire-me"
      onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>{""} Hire Me</Button>
      <a href='resume.txt' class="btn-flip" data-back="Back" data-front="Front" download='Resume resume.txt'>
       <Button variant="outlined" className='btn get-resume'></Button>
       </a>
      </div>
    </div>
    <div className='profile-picture'>
        <div className='profile-picture-background'>

        </div>
    </div>
    
     
</div>

    
    </div>

  )
}

export default Profile
