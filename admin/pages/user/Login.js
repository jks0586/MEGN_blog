import React,{useEffect} from "react";
import Blank from "../../components/Blank";
import Card from "react-bootstrap/Card";
import laxios from "../../config/laxios";
import { routeslink } from "../../config/routeslink";
import { useForm } from "react-hook-form";
import {useRouter} from 'next/router';
import { adminlink } from "../../config/adminlink";
import swal from "sweetalert";
const login = () => {
	const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
		console.log(data);
		// console.log(routeslink.admin.login);
		laxios.post(routeslink.admin.login,data)
		.then((response)=>{
			if(response.name=='AxiosError'){
				console.log(response.response.status);
			} else {
				setTimeout(()=>{
					localStorage.setItem('adminId', response.data.data.adminId);
					localStorage.setItem('email', response.data.data.email);
					localStorage.setItem('letscms_token', response.data.data.token);
					swal("Congratulation","User Logedin Successfully","success").then(()=>{
						router.push(adminlink.admin.all);
					});
				},2000);
			}
			
		}).catch((error)=>{
			console.log(error);
		});
		
	}

    // const handleSubmit=(e)=>{
        
    //     console.log('jjjkjlkjl');
    //     e.prevntDefault();
    //     return false;
    // }

	useEffect(() => {
		if(localStorage.getItem('letscms_token')){
			router.push(adminlink.admin.all);
		}
	}, []);

	return (
		<>
			<Blank>
				<Card className="w-75 m-auto bg-dark bg-gradient h-50 login-top">
					<div className="w-100 m-auto">
						<div className=" w-75 m-auto center">
							<div className="row">
								<div className="col-12 m-100">
                                <h4 className="text-center text-white">Admin Login {process.env.customKey}</h4>
                                </div>
							</div>
							
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="form-group">
									<label className="w-100" htmlFor="exampleInputEmail1"><h5 className="text-white">Email address</h5></label>
									<input
										type="email"
										name="email"
										className="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Enter email"
                                        {...register("email")}
									/>
									<small id="emailHelp" className="form-text text-muted">
										We'll never share your email with anyone else.
									</small>
								</div>
								<div className="form-group mb-3">
									<label  className="w-100" htmlFor="exampleInputPassword1"><h5 className="text-white">Password</h5></label>
									<input
										type="password"
										name="password"
										className="form-control"
										id="exampleInputPassword1"
										placeholder="Password"
                                        {...register("password")}
									/>
								</div>
                                <div className="form-group">
								<button type="submit" className="btn btn-primary" onClick={handleSubmit}>
									Login
								</button>
								<button
									style={{ marginLeft: "25px" }}
									className="btn btn-success"
                                    onClick={handleSubmit}
                                    >
									Signup
								</button>
                                </div>
							</form>
						</div>
					</div>
				</Card>
			</Blank>
		</>
	);
};

export default login;
