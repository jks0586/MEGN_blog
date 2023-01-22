import React, { useState, useEffect,useRef } from "react";
import { Button, Form } from "react-bootstrap";
// import Loadable from 'react-loadable';
import { optionsdata } from "../../../config/common";
import laxios from '../../../config/laxios';
import swal from 'sweetalert';
import {useRouter} from 'next/router'
import { routeslink } from "../../../config/routeslink";
import { adminlink } from "../../../config/adminlink";

const Dataform = () => {

	const router = useRouter();
	const postload= useRef(true);
	const intialval={
		'username':'',
		'email':'',
		'password':'',
		'status':false
	  };
	const { id } = router.query;
	// console.log(id);
	// const [editorLoaded, setEditorLoaded] = useState(false);
	// const [editordata, setEditordata] = useState('');
	const [data, setData] = useState(intialval);
	// const Editor = dynamic(() => import("./../../../components/Editor"), {
	// 	ssr: false,
	// });

	
	
	const  handleSubmit = async (e) => {
		e.preventDefault();
		const submiturl=routeslink.user.save;
		console.log(data);
		if(data._id){
			submiturl=routeslink.user.edit.replace(':id',data._id);
			await laxios.put(submiturl, data)
			.then(response => {
				// console.log(response.data);
				if(response.status==200){
					swal("Congratulations!", "You have created an admin user!", "success").then((value) => {
						router.push(adminlink.user.all);
					});;
				}
			});
		}  else {
			await laxios.post(submiturl, data)
			.then(response => {
				// console.log(response.data);
				if(response.status==200){
					swal("Congratulations!", "You have created an admin user!", "success").then((value) => {
						router.push(adminlink.user.all);
					});;
				}
			}).catch((error)=>{
				console.log(error);
			});
		}
		
		
	};
	const handleChange=(e)=>{
		setData({...data,[e.target.name]:e.target.value});
	}
 useEffect( (id) => {
	if(postload.current){
		if(id!==undefined){
		// console.log(id);
		// alert(routeslink.catgeory.one);
		laxios.get(routeslink.catgeory.one.replace(":id",id))
        .then(response => {
			console.log(response.data);
			setData({_id:response.data._id,'username':response.data.username,'email':response.data.email,'status':response.data.status});
			// if(response.status==200){
			// 	swal("Congratulations!", "You have created an admin user!", "success").then((value) => {
			// 		router.push("/admin/admin");
			// 	  });;
			// }
		});
	}
	}
	
}, [id])
	return (
		<div className="container">
			<Form id="adminform" onSubmit={handleSubmit} method="POST">
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
					<Form.Select  DefaultValuue={data.status} aria-label="Default select example"  name="status" onChange={handleChange}>
					{optionsdata.status.map((value,index)=>{
						return (
							<option key={index++} selected={(value.value==data.status)?'selected':''} value={value.value} >{value.label}</option>
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
