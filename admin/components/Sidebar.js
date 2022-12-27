import React,{useEffect,useState} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import * as Fa from 'react-icons/fa';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Sidebar = (props) => {
    // console.log(props.props.size.innerHeight);
   useEffect(() => {
    console.log(window.innerHeight);
    document.getElementById('leftsidebar').style.height=window.innerHeight+'px';
   }, [])
  return (
    //style={{props.size.innerHeight+'px'}}
    <div id="leftsidebar" expand="lg" variant="light" className='bg-dark'>
      <Container className='p-0'>
      <Nav>
      <Nav.Item className='w-100'>
                <Nav.Link href="/admin/category" className='ms-2 text-white'> <Fa.FaList /> Category</Nav.Link>
      </Nav.Item>
      <Nav.Item className='w-100'>
                <Nav.Link href="/admin/user" className='ms-2 text-white'> <Fa.FaUsers /> Users</Nav.Link>
      </Nav.Item>

      <Nav.Item className='w-100'>
                <Nav.Link href="/admin/product" className='ms-2 text-white'><Fa.FaShoppingBag /> Products</Nav.Link>
      </Nav.Item>

      </Nav>
      </Container>
    </div>
    
  )
}

export default Sidebar