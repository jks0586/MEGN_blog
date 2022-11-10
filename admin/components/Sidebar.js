import React,{useEffect,useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
const Sidebar = (props) => {
    // console.log(props.props.size.innerHeight);
   
  return (
    //style={{props.size.innerHeight+'px'}}
    <div  expand="lg" variant="light" className='bg-dark' style={{height:props.props.size.innerHeight+'px'}}>
      <Container>
      <Nav>
      <Nav.Item className='w-100'>
                <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item className='w-100'>
                <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>

      <Nav.Item className='w-100'>
                <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>

      <Nav.Item className='w-100'>
                <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>

      <Nav.Item className='w-100'>
                <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
        <Nav.Item  className='w-100'>
        <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
    
        <Nav.Item  className='w-100'>
      <Nav.Link href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item  className='w-100'>
      <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item  className='w-100'>
      <Nav.Link href="#home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item  className='w-100'>
      <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      </Nav>
      </Container>
    </div>
    
  )
}

export default Sidebar