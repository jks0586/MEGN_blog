import React, { useState, useEffect,useRef } from "react";
import { Button, Form,Image } from "bootstrap";
import Loadable from 'react-loadable';
import { optionsdata } from "../../../config/common";
import laxios from '../../../config/laxios';
import { adminlink } from "../../../config/adminlink";
import { routeslink } from "../../../config/routeslink";
import axios from "axios";
import { useRouter } from "next/router";
import swal from "sweetalert";
const Editor = Loadable({
	loader: () => import('../../../components/Editor'),
	loading() {
	  return <div>Loading...</div>
	}
  });
  
const Dataform = () => {
	const router = useRouter();
	const postload= useRef(true);
	const { id } = router.query;

	const [editorLoaded, setEditorLoaded] = useState(false);
	const [imageShow, setImageShow] = useState(false);
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
		const submiturl=routeslink.category.save;
		
		if(data._id){
			submiturl=routeslink.category.edit.replace(':id',data._id);
			await laxios.put(submiturl, data)
			.then(response => {
				// console.log(response.data);
				if(response.status==200){
					swal("Congratulations!", "You have created Catgeory!", "success").then((value) => {
						router.push(adminlink.category.all);
					});;
				}
			});
		}  else {
			await laxios.post(submiturl, data)
			.then(response => {
				// console.log(response.data);
				if(response.status==200){
					swal("Congratulations!", "You have created Catgeory!", "success").then((value) => {
						router.push(adminlink.category.all);
					});;
				}
			});
		}
	};
	const handleChange=(e)=>{
		setData({...data,[e.target.name]:e.target.value});
	}

	const onDescriptionChange = (dataname,datachange) => {
		
        setData({...data,[dataname]:datachange});
       
    }
	useEffect(() => {
		if(postload.current){
			if(id!==undefined){
			// console.log(id);
			 laxios.get(routeslink.category.one.replace(":id",id))
			.then(response => {
				// console.log(response.data);
				setData({_id:response.data._id,'name':response.data.name,'slug':response.data.slug,'description':response.data.description,'image':response.data.image,'status':response.data.status,'top':response.data.top});
				(response.data.image)?setImageShow(true):setImageShow(false);
			});
		}
		}
	}, [id]);

	const handleFileChange = async (e)=>{
		const formdata = new FormData();
		formdata.append('file', e.target.files[0]);
		await laxios.post(routeslink.upload.file,formdata).then((res)=>{
			setData({...data,['image']:res.data.path});
			// console.log(res.data.path);
		});
		// setData({...data,[e.target.name]:e.target.files[0]});
		// console.log(e.target.files[0]);
		// setData('image',e.target.files[0]);
	}

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
					<Form.Control name="image"  type="file" onChange={handleFileChange} placeholder="Enter Image" />
					{(imageShow)?<Image src={routeslink.imageurl+data.image} width="50" height="50" />:''}
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Description</Form.Label>
					<Editor 
					value={data.description}
					onReady={(datareturn)=>{
						document.getElementsByClassName('ck-editor__editable')[0].innerHTML=datareturn;
					}}
					onChange={(datareturn) => {
						onDescriptionChange('description',datareturn);
					}}

					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Status</Form.Label>
					<Form.Select aria-label="Default select example" defaultValue="" name="status" onChange={handleChange}>
					<option key="10">Select Status</option>
					{optionsdata.status.map((value,index)=>{
						return (
							<>
							<option selected={(value.value==data.status)?'selected':''} key={value.value} value={value.value}>{value.label}</option>
							</>
						)
					})}
					
					
					</Form.Select>
				</Form.Group>


				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Top</Form.Label>
					<Form.Select aria-label="Select Top" name="top" defaultValue="" onChange={handleChange}>
					<option key="10">Select Position</option>
					{optionsdata.status.map((value,index)=>{
						return (
							<>
							<option selected={(value.value==data.top)?'selected':''} key={value.value} value={value.value}>{value.label}</option>
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
