"use client"
import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import lambo from '../images/lambo.png'
import fer from '../images/fer.png'
import toyo from '../images/toyo.png'
import toyo1 from '../images/toyo1.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiArrowFromRight } from 'react-icons/bi'


export const Slider = () => {

  const responsive = {

  superLargeDeskop: {
    breakpoint: { max: 4000, min: 300 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
  
};


  return (
   <section className="skill" id="skills">
    <Container>
        <Row>

<Col>

<div className='carol '>
<h1 className='carss'> Our Cars </h1>
<p> <i>Dont miss our cars, excellent you can get anywhere </i> </p>


<Carousel responsive={responsive} infinite={true} className='slider'>


<div className='item'>
<Image src={lambo} alt='' className='imga'/>
<h5> Lambogini</h5>
</div>

<div className='item'>
<Image src={fer} alt='' className='imga'/>
<h5> Ferari</h5>
</div>

<div className='item'>
<Image src={toyo} alt='' className='imga'/>
<h5> Toyota</h5>
</div>

<div className='item'>
<Image src={toyo1} alt='' className='imga'/>
<h5> Masda</h5>
</div>

<div className='item'>
<Image src={toyo1} alt='' className='imga'/>
<h5> Nissan</h5>
</div>

  
</Carousel>
</div>
</Col>



























        </Row>
    </Container>
    <BiArrowFromRight className='left'/>
   </section>
  )
};