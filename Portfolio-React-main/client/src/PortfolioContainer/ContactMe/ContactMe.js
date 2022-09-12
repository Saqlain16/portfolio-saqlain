import React, { useState } from 'react'
import Typical from 'react-typical'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import imgBack from './mail.jpg'
import ScreenHeading from '../../utilities/SubHeading/ScreenHeading'
import './ContactMe.css'
import { IconButton } from '@mui/material';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Google from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import axios from 'axios'
import {toast} from 'react-toastify'

import loading from './loading.gif'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ContactMe = (props) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [banner, setBanner] = useState('');
    const [bool, setBool] = useState(false);

    const handleName =(e) =>{
        setName(e.target.value)
    }
    const handleEmail =(e) =>{
        setEmail(e.target.value)
    }
    const handleMessage =(e) =>{
        setMessage(e.target.value)
    }
    
    const submitForm = async (e) =>{
        e.preventDefault();
        try{
            let data ={
                name,
                email,
                message,
            };
            setBool(true)
            const res = await axios.post('contact', data);
            if(name.length === 0 || email.length === 0|| message.length === 0){
                setBanner(res.data.msg)
                toast.error(res.data.msg)
                setBool(false)
            }else if(res.status === 200){
                setBanner(res.data.msg)
                toast.success(res.data.msg)
                setBool(false)


                setName("")
                setEmail("")
                setMessage("")
                
            }

        }catch(error){
            console.log(error)
        }

        
    }

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
    
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    

  return (
    <div className='main-container' id={props.id || " "}>
      <ScreenHeading
      subHeading={"Lets Keep In Touch"}
      title={"Contact Me"} />
      <div className='central-form'>
          <div className=''col>
          <h2 className='contact-me-title'>
                <Typical 
                loop={Infinity}
                steps={[
                    'Get In Touch 🤝',
                    1000,
                    'Email me & ',
                    1000,
                    'get your job done',
                    1000,
                    
                ]}
                wrapper="p"
                />
              </h2>
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
          <div className='back-form'>
              <div className='img-back'>
                  <h4>Send Your Email Here!</h4>
                  <img src={imgBack} alt='img not found' />
              </div>
              <form onSubmit={submitForm}>
                  <p>{banner}</p>
                  <label htmlFor='name'>Name</label>
                  <input type='text'
                  onChange={handleName}
                  value={name}
                  />

                  <label htmlFor='email'>Email</label>
                  <input type='email' 
                  onChange={handleEmail}
                  value={email}
                  />

                  <label htmlFor='message'>Message</label>
                  <textarea type='text' 
                  onChange={handleMessage}
                  value={message}
                  />

                  <div className='send-btn'>
                      <button type='submit'>
                          Send<i className='fa fa-paper-plane' />
                          {bool? (<b className='load'>
                              <img src={loading} alt="..." />
                          </b>):("")}
                      </button>
                  </div>
              </form>
          </div>
      </div>
      <div className='home-icon fade-in'>
      <IconButton className='svg-icon' 
      onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
       <KeyboardArrowUpIcon className='up-icon' />
      </IconButton>
      </div>
    </div>
  )
}

export default ContactMe
