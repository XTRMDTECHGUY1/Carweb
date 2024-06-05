"use client"
import React from 'react'
import Image from 'next/image'
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import Telegram from '../images/Telegram.png';
import Tiktok from '../images/Tiktok.png';
import twitter from '../images/twitter.png';
import youtube from '../images/youtube.png';


export function Project () {
  return (
    <div className='footer'>
    <div className='sb_footer section_padding'>
    <div className='sb_footer-links'>
    <div className='sb_footer-links_div'>
    <h4 className='font'> Lets Keep in touch!</h4>
  
        <p> Find us on any of this plaforms, we response 1-2 business days</p>


    <div className='socialmedia'>
<p className='social'> <Image src={facebook} alt="" /></p>
<p className='social'> <Image src={instagram} alt="" /></p>
<p className='social'> <Image src={Telegram} alt="" /></p>
<p className='social'> <Image src={Tiktok} alt="" /></p>
<p className='social'> <Image src={twitter} alt="" /></p>
<p className='social'> <Image src={youtube} alt="" /></p>
</div>
    </div>

    <div className='sb_footer-links_div'>
    <h4 className='font'> USEFUL LINK</h4>
    <a href='/employer'>
        <p> About us</p>
    </a>
    <a href='/employer'>
        <p> Blog</p>
    </a>
    <a href='/employer'>
        <p> Github</p>
    </a>
    <a href='/employer'>
        <p> Free Products</p>
    </a>
    </div>

    
    <div className='sb_footer-links_div'>
    <h4 className='font'> OTHER RESOURCES</h4>
    <a href='/license'>
        <p> License</p>
    </a>
    <a href='/terms'>
        <p>Term and Conditions</p>
    </a>
    <a href='/privacy'>
        <p> Privacy & Policy</p>
    </a>
    <a href='/contact'>
        <p> Contact Us</p>
    </a></div>


 

    
        
    </div>

    

   <hr/>
   <div className='sb_footer-below'>
    <div className='sb_footer-copyright'>
        <p> 
        @{new Date().getFullYear()} Xtrmtech. All right reserved.        
        </p>
    </div>
   </div>
    </div>


    </div>
  )
};