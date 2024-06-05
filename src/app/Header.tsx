"use client"
import React from 'react'
import Image from 'next/image'
import { Navbar, NavbarBrand, Nav, Container } from 'react-bootstrap';
import logo from './images/logo.png';
import { FaSearch } from 'react-icons/fa'


export const Header = () => {


  return (
    
      <Navbar className='navbar'>
      <Container>
       <NavbarBrand href='#home'>
         <Image src={logo} alt=''className='logo' /></NavbarBrand>

       <Nav className='me-auto d-flex justify-content-center'>
        <Nav.Link href='/' className='text-white txt'>Home  </Nav.Link>
       <Nav.Link href='/' className='text-white txt'>Packages </Nav.Link >
       <Nav.Link href='' className='text-white txt '>Jobs </Nav.Link>
       <Nav.Link href='' className='text-white txt'>Contact </Nav.Link>
       
       </Nav>

       <div className='sign d-flex justify-content-end'>
        <form>
       <input type='search' placeholder='Cars Search' name='text'className='input'/>
       <button type='submit'className='but' ><FaSearch /></button>
       </form>
       </div>
       
      

       </Container>
       
    </Navbar>
   
  )
};
