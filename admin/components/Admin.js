import React,{useEffect,useState} from "react";
import Sidebar from "./Sidebar";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
const Admin = (props) => {
    
    //const [height, setHeight] = React.useState(0);
    React.useEffect(() => {
        //setHeight(window.innerHeight);
        //console.log(height);
    });
    //console.log(height);
    console.log(props.size.innerHeight);
	return (
		<>
			<Container className="p-0" fluid>
				<Row>
					<Col md={3} style={{ height:props.size.innerHeight+'px'}}>
						<Sidebar props={props}/>
					</Col>
					<Col md={9}>
						<div>{props.children}</div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Admin;
