import React, { useState } from 'react'
import {TOTAL_SCREENS, GET_SCREEN_INDEX} from '../../../utilities/commonUtils'
import ScrollService from '../../../utilities/ScrollService'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Header.css'

const Header = () => {

    const [selectedScreen, setSelectedScreen] = useState(0)
   const [showHeaderOptions, setShowHeaderOptions] = useState(false)
   

   const updateCurrentScreen = (currentScreen) =>{
       if(!currentScreen || !currentScreen.screenInView)
       return;
       let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
       if(screenIndex < 0)
       return
   }

   let currentScreenBroadCaster = ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen)
   

   const getHeaderOptions = () =>{
       return(
           TOTAL_SCREENS.map((screen, i)=>(
               <div key={screen.screen_name} className={getHeaderOptionsClass(i) }
               onClick={() => switchScreen(i,screen)}>
                   <span className='options-span'>{screen.screen_name}</span>
               </div>
           ))
       )
   }


const getHeaderOptionsClass = (index) =>{
    let classes = "header-options";

    if(index < TOTAL_SCREENS.length -1)
    classes += "header-options-seperator";
    


    if(selectedScreen === index)
    classes += "selected-header-option";
    return 
}   



const switchScreen = (index, screen) =>{
    let screenComponenet = document.getElementById(screen.screen_name);
    if(!screenComponenet) return;

    screenComponenet.scrollIntoView({behavior: "smooth"});
    setSelectedScreen(index);
    setShowHeaderOptions(false);
}

  
  return (
        <div className='header-container' onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
            <div className='header-parent'>
                <div className="header-hamburger" onClick={()=> setShowHeaderOptions(!showHeaderOptions)}>
                    <FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />                 
                </div>
                <div className='header-logo'>
                    <span className='logo'><span className='word'>M</span><span className='word'>r</span>. <span className='word'>K</span><span className='word'>h</span><span className='word'>a</span><span className='word'>n</span></span>
                </div>
                <div className={showHeaderOptions? "header-options show-hamburger-options":"header-options"}>
                    {getHeaderOptions()}
                </div>
            </div>
        </div>
  )
}

export default Header
