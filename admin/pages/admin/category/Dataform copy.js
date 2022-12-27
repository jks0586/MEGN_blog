import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import dynamic from "next/dynamic";
const Dataform = () => {
	const [editorLoaded, setEditorLoaded] = useState(false);
	const [data, setData] = useState({
		'name':'',
		'slug':'',
		'description':'',
		'image':'',
		'status':'',
		'top':'',
	});
	const Editor = dynamic(() => import("./../../../components/Editor"), {
		ssr: false,
	});
	useEffect(() => {
		setEditorLoaded(true);
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);
	};
	const handleChange=(e)=>{
		setData({...data,[e.target.name]:e.target.value});
	}
	const onDescriptionChange = (dataname, datachange) => {
		// console.log(datachange);
        setData({...data,dataname:datachange});
        // setData(name, datachange);
    };

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
					dataname="description"
					datavalue={data.description}
					className='description'
					onReadyData={editor => {
						onDescriptionChange('description', data.description);
						document.getElementsByClassName('ck-editor__editable')[0].innerHTML = data.description;
						// console.log('ffffffff');
					}}
					onChangeData={(event, dd) => {
						console.log(dd);
						// onDescriptionChange('description', dd);
					}}
					onBlurData={(event, dd) => {
						// onDescriptionChange('description', dd);
						console.log(dd);
					}}
					onFocusData={(event, dd) => {
						// onDescriptionChange('description', dd);
						console.log(dd);
					}}
					
					editorLoaded={editorLoaded}
				/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Dataform;
