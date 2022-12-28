import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Loadable from 'react-loadable';
import { optionsdata } from "../../../config/common";
import laxios from '../../../config/laxios';
import axios from "axios";
const Editor = Loadable({
	loader: () => import('../../../components/Editor'),
	loading() {
	  return <div>Loading...</div>
	}
  });
const Dataform = () => {
	const [editorLoaded, setEditorLoaded] = useState(false);
	const [editordata, setEditordata] = useState('');
	const [data, setData] = useState({
		'name':'',
		'slug':'',
		'description':'',
		'image':'',
		'status':'',
		'top':'',
	});
	// const Editor = dynamic(() => import("./../../../components/Editor"), {
	// 	ssr: false,
	// });
	useEffect(() => {
		setEditorLoaded(true);
	}, []);
	const  handleSubmit = async (e) => {
		e.preventDefault();
		await laxios.post('/category/save', data)
        .then(response => {
			console.log(response);
		});
	};
	const handleChange=(e)=>{
		setData({...data,[e.target.name]:e.target.value});
	}

	const onDescriptionChange = (dataname,datachange) => {
		
        setData({...data,[dataname]:datachange});
       
    }
	useEffect(() => {
		// console.log(process.env.API_URL);
		laxios.get('/category/all').then(res=>{
			console.log(res);
		})
	}, [])

	return (
		<div className="container">
			<Form onSubmit={handleSubmit} method="POST">
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control name="name" value={data.name} type="text" onChange={handleChange} placeholder="Enter Name" />
				</Form.Group>
		
				<Form.Group className="mb-3" controlId="formBasicSlug">
					<Form.Label>Slug</Form.Label>
					<Form.Control name="slug" value={data.slug} type="text" onChange={handleChange} placeholder="Enter Slug" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicImage">
					<Form.Label>Image</Form.Label>
					<Form.Control name="image" value={data.image} type="text" onChange={handleChange} placeholder="Enter Image" />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Description</Form.Label>
					<Editor 
					onChange={(datareturn) => {
						onDescriptionChange('description',datareturn);
					}}

					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Status</Form.Label>
					<Form.Select aria-label="Default select example" name="status" onChange={handleChange}>
					<option>Select Status</option>
					{optionsdata.status.map((value,index)=>{
						return (
							<>
							<option value={value.value}>{value.label}</option>
							</>
						)
					})}
					
					
					</Form.Select>
				</Form.Group>


				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Top</Form.Label>
					<Form.Select aria-label="Select Top" name="top" onChange={handleChange}>
					<option>Select Position</option>
					{optionsdata.status.map((value,index)=>{
						return (
							<>
							<option value={value.value}>{value.label}</option>
							</>
						)
					})}
					</Form.Select>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Dataform;
