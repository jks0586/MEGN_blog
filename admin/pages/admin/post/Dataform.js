import React, { useState, useEffect,useRef } from "react";
import { Button, Form,Image,Alert } from "react-bootstrap";
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
		'description':''
	});
	// const Editor = dynamic(() => import("./../../../components/Editor"), {
	// 	ssr: false,
	// });
	useEffect(() => {
		setEditorLoaded(true);
	}, []);
	const  handleSubmit = async (e) => {
		e.preventDefault();
		const submiturl=routeslink.post.save;
		
		if(data._id){
			submiturl=routeslink.post.edit.replace(':id',data._id);
			await laxios.put(submiturl, data)
			.then(response => {
				console.log(response);
				if(response.status==200){
					swal("Congratulations!", "You have created Post!", "success").then((value) => {
						// router.push(adminlink.post.all);
					});;
				}
			}).catch(error => {
				console.log(error);
			});
		}  else {
			await laxios.post(submiturl, data)
			.then(response => {
				console.log(response);
				if(response.status==200){
					swal("Congratulations!", "You have created Post!", "success").then((value) => {
						// router.push(adminlink.post.all);
					});;
				}
			}).catch(error => {
				// console.log(error.response.data.errors,'uuuuu');
				const removeclassElements=document.getElementsByClassName('alert');
				if(removeclassElements.length>0){
					for (var i = removeclassElements.length - 1; i >= 0; --i) {
						removeclassElements[i].classList.add('d-none');
					  }
				}
				if (error.response.data.errors) {
					Object.entries(error.response.data.errors).map((value, index) => {
						// console.log(value[1],index);
						// console.log(Object.keys(value[1])[0]);
						// console.log(Object.values(value[1])[0]);
						const errelement=document.getElementById('error'+Object.keys(value[1])[0]);
						
						// console.log(errelement);

						errelement.innerHTML=Object.values(value[1])[0];
						errelement.classList.remove("d-none");
						// let diverror = document.createElement('div');
						// diverror.textContent = Object.values(value[1])[0];
						// diverror.classList.add('alert', 'alert-danger');
						// let element = document.getElementsByName(Object.keys(value[1])[0]);
						// let nextelement = (element!=undefined)?element.nextElementSibling:'';
						// if(nextelement){
						// 	nextelement.remove();
						// }
						// // console.log(element);
						// if(element!=undefined){
						// 	element[0].after(diverror);
						// }
		
					});
		
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
			 laxios.get(routeslink.post.one.replace(":id",id))
			.then(response => {
				setData({_id:response.data._id,'name':response.data.name,'description':response.data.description});
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
					<Alert key='danger' className="d-none" id="errorname" variant='danger'></Alert>
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
					<Alert key='danger' className="d-none" id="errordescription" variant='danger'></Alert>
				</Form.Group>
				
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Dataform;
