"use client"
import React from 'react'
import Image from 'next/image'
import { Container, Row, Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import wave from '../images/waving-hand.svg'
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
import cars from '../images/car 1.png'

export const Hero = () => {
  return (
    <Container id='hero'>
        <Row>


    <Col xs={12} md={6} xl={7} className='first'>
    
    <h3 style={{fontSize: '20px'}}> Hello there! <Image src={wave} alt=''className='wave'/> </h3>
    <h1 style={{fontSize: '70px'}}> <b>A better way</b> <br/> <b style={{color: 'skyblue'}}>to sell cars. </b></h1>
    <Button variant='primary'style={{borderRadius: '15px'}}> Get yours today</Button>
    <Button variant='primary'style={{borderRadius: '15px', marginLeft: '10px'}}> Be a car owner!</Button>
    
    <div className='contacts'>
        <h3 style={{fontSize: '35px', marginLeft:'10px',fontFamily: 'Embassy BT Regular'}}> Contact us...</h3>
        <FaFacebook className='butt'/> <FaInstagram className='butt'/> <FaWhatsapp className='butt'/> <FaTwitter className='butt'/>
    </div>
    </Col>

    <Col  xs={12} md={6} xl={5}className='first'>
    
    <div className='cards'>
    <div className='cardsinner'>
        <Image src={cars} alt=''className='cars'/>
    </div>


        </div>

    </Col>















        </Row>
    </Container>
  )
};