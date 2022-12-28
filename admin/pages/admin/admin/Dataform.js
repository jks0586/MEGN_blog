import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
// import Loadable from 'react-loadable';
import { optionsdata } from "../../../config/common";
import laxios from '../../../config/laxios';
// import axios from "axios";
// const Editor = Loadable({
// 	loader: () => import('../../../components/Editor'),
// 	loading() {
// 	  return <div>Loading...</div>
// 	}
//   });
const Dataform = () => {
	// const [editorLoaded, setEditorLoaded] = useState(false);
	// const [editordata, setEditordata] = useState('');
	const [data, setData] = useState({
		'username':'',
		'email':'',
		'password':'',
	});
	// const Editor = dynamic(() => import("./../../../components/Editor"), {
	// 	ssr: false,
	// });
	
	const  handleSubmit = async (e) => {
		e.preventDefault();
		await laxios.post('/admin/save', data)
        .then(response => {
			console.log(response);
		});
	};
	const handleChange=(e)=>{
		setData({...data,[e.target.name]:e.target.value});
	}

	useEffect(() => {
		
	}, [])

	return (
		<div className="container">
			<Form onSubmit={handleSubmit} method="POST">
				<Form.Group className="mb-3" controlId="username">
					<Form.Label>User Name</Form.Label>
					<Form.Control name="username"  value={data.username} type="text" onChange={handleChange} placeholder="Enter User Name" />
				</Form.Group>
		
				<Form.Group className="mb-3"  controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control name="email"  value={data.email} type="email" onChange={handleChange} placeholder="Enter Email" />
				</Form.Group>

				<Form.Group className="mb-3"  controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control name="password"  value={data.password} type="password" onChange={handleChange} placeholder="Enter Password" />
				</Form.Group>


				<Form.Group className="mb-3"  controlId="status">
					<Form.Label>Status</Form.Label>
					<Form.Select aria-label="Default select example"  name="status" onChange={handleChange}>
					<option>Select Status</option>
					{optionsdata.status.map((value,index)=>{
						return (
							<>
							<option key={value.value} value={value.value}>{value.label}</option>
							</>
						)
					})}
					
					
					</Form.Select>
				</Form.Group>

				<Button variant="primary" type="submit">Save</Button>
			</Form>
		</div>
	);
};

export default Dataform;