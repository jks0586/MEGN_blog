import React,{useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as Fa from 'react-icons/fa';
const Topheader = () => {
    const statusDefault = useRef(true);
    const sidebarTogale=()=>{
        const sidebar=document.getElementById('sidebar').classList;
        const mainarea=document.getElementById('mainarea').classList;
        if(statusDefault.current){
            sidebar.remove('d-none');
            mainarea.remove('col-md-12');
            mainarea.add('col-md-10');
            statusDefault.current=false;
            
        }
        else {
            sidebar.add('d-none');
            mainarea.remove('col-md-10');
            mainarea.add('col-md-12');
            statusDefault.current=true;
        }
    }

  return (
    <>
    {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3"> {expand}
        <Container fluid>
        <Fa.FaBars  onClick={sidebarTogale}/>
            
        </Container>
        </Navbar>
    ))
    }
    </>
  )
}

export default Topheader
