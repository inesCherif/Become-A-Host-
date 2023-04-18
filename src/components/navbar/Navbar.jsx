import React, { useState } from 'react'
import './Navbar.css'
import WhiteLogo from '../../images/logo/HomeLogoWhite.png'

const Navbar = ({ selectedNavItem, selectedNavStep }) => {
  return (
    <div className="nav-container">
      <div className="body navbar">
        <div>
            <img src={WhiteLogo} alt="Tabaani White Logo" className='white-logo' />
            <h1 className='header3 h3'>Your Hosting <br />
                Application Process
            </h1>
        </div>    
        <div>
            <ul>
                <li className={selectedNavStep === 'step1' ?'bold-text step' :'bold-text step completed-step'}>STEP 01:ABOUT YOU</li>

                <span style={{ display: selectedNavStep=== 'step1' ? '' : 'none' }}>

                <div className={selectedNavItem === 'profile-info' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'profile-info' ? 'li selected-nav-text' : 'li'}>Profile information</li>
                </div>
                <div  className={selectedNavItem === 'profile-photo' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'profile-photo' ? 'li selected-nav-text' : 'li'}>Profile photo</li>
                </div>
                <div className={selectedNavItem === 'location' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'location' ? 'li selected-nav-text' : 'li'}>Location</li>
                </div>
                <div className={selectedNavItem === 'languages' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'languages' ? 'li selected-nav-text' : 'li'}>Languages</li>
                </div>
                <div className={selectedNavItem === 'passions' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'passions' ? 'li selected-nav-text' : 'li'}>Passions</li>
                </div>

                </span>

                <li className={selectedNavStep==='step2' ? 'activated-step2 type16 disabled-steps' : selectedNavStep === 'step3' || selectedNavStep === 'step4'? 'bold-text step completed-step completed-step2' : 'type16 disabled-steps'}>STEP 02: What we're looking for</li>

                <span style={{ display: selectedNavStep === 'step2' ? '' : 'none' }}>

                <div className={selectedNavItem === 'overview' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'overview' ? 'li selected-nav-text' : 'li'}>Overview</li>
                </div>
                <div  className={selectedNavItem === 'expertise' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'expertise' ? 'li selected-nav-text' : 'li'}>Expertice</li>
                </div>
                <div className={selectedNavItem === 'access' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'access' ? 'li selected-nav-text' : 'li'}>Access</li>
                </div>
                <div className={selectedNavItem === 'Connection' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'Connection' ? 'li selected-nav-text' : 'li'}>Connection</li>
                </div>

                </span>

                <li className={selectedNavStep==='step3' ? 'activated-step2 type16 disabled-steps' : selectedNavStep === 'step4'? 'bold-text step completed-step completed-step' : 'type16 disabled-steps'}>STEP 03: Your Idea</li>
                <span style={{ display: selectedNavStep === 'step3' ? '' : 'none' }}> 

                <div className={selectedNavItem === 'theme' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'theme' ? 'li selected-nav-text' : 'li'}>Your theme</li>
                </div>
                <div  className={selectedNavItem === 'title' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'title' ? 'li selected-nav-text' : 'li'}>Title</li>
                </div>
                <div className={selectedNavItem === 'do' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'do' ? 'li selected-nav-text' : 'li'}>What we’ll do</li>
                </div>
                <div className={selectedNavItem === 'provide' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'provide' ? 'li selected-nav-text' : 'li'}>What I’ll provide
</li>
                </div>
                <div  className={selectedNavItem === 'requirements' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'requirements' ? 'li selected-nav-text' : 'li'}>Guest requirements
</li>
                </div>
                <div  className={selectedNavItem === 'locations' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'locations' ? 'li selected-nav-text' : 'li'}>Location</li>
                </div>
                <div  className={selectedNavItem === 'photos' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'photos' ? 'li selected-nav-text' : 'li'}>Photos
</li>
                </div>

                </span>

                <li className={selectedNavStep==='step4' ? 'activated-step2 type16 disabled-steps' :'type16 disabled-steps'}>STEP 04: Contacts</li>
                <span style={{ display: selectedNavStep === 'step4' ? '' : 'none' }}> 

                <div className={selectedNavItem === 'groupsize' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'groupsize' ? 'li selected-nav-text' : 'li'}>Group size</li>
                </div>
                <div  className={selectedNavItem === 'availability' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'availability' ? 'li selected-nav-text' : 'li'}>Availability
</li>
                </div>
                <div className={selectedNavItem === 'pricing' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'pricing' ? 'li selected-nav-text' : 'li'}>Guest pricing</li>
                </div>
                <div className={selectedNavItem === 'bookings' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'bookings' ? 'li selected-nav-text' : 'li'}>bookings
</li>
                </div>
                <div  className={selectedNavItem === 'review' ? 'nav-element active-nav-element' : 'nav-element'}>
                    <li className={selectedNavItem === 'review' ? 'li selected-nav-text' : 'li'}>Review and Submit
</li>
                </div>

                </span>
            </ul>
        </div>      
      </div>
    </div>
  );
}

export default Navbar
