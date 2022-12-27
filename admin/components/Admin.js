import React,{useEffect,useState} from "react";
import Sidebar from "./Sidebar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { ReactSVG } from 'react-svg'
import { ThemeProvider } from "react-bootstrap";
import Topheader from "./Topheader";
const Admin = (props) => {
    
    //const [height, setHeight] = React.useState(0);
    React.useEffect(() => {
        //setHeight(window.innerHeight);
        //console.log(height);
    });
    //console.log(height);
    // console.log(props.size.innerHeight);
	return (
		<>
		<ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
		minBreakpoint="xxs">
			<Container className="p-0" fluid>
				<Row>
					<Col id="sidebar" md={2} className="bg-dark p-0">
						<Sidebar props={props}/>
					</Col>
					<Col id="mainarea" md={10} className="bg-secondary p-0">
					
					<div>
					<Topheader />
					{props.children}
					</div>
					</Col>
				</Row>
			</Container> 
			</ThemeProvider>
		</>
	);
};

export default Admin;
