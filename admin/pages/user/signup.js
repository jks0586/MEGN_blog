import React from "react";
import Blank from "../../components/Blank";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
import laxios from "../../config/laxios";
import { routeslink } from "../../config/routeslink";
import {useRouter} from 'next/router';
import { adminlink } from "../../config/adminlink";
const signup = () => {
	const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
		console.log(data);
		laxios.post(routeslink.admin.signup,data).then((response)=>{
			console.log(response);
			localStorage.setItem('adminId', response.data.data.adminId);
			localStorage.setItem('email', response.data.data.email);
			localStorage.setItem('letscms_token', response.data.data.token);
			router.push(adminlink.admin.all);
		}).catch((error)=>{
			console.log(error);
		});

	}


	return (
		<>
			<Blank>
				<Card className="w-75 m-auto bg-dark bg-gradient h-50 login-top">
					<div className="w-100 m-auto">
						<div className=" w-75 m-auto center">
							<div className="row">
								<div className="col-12 m-100">
                                <h4 className="text-center text-white">Admin Register</h4>
                                </div>
							</div>
							<form onSubmit={handleSubmit(onSubmit)}>

							<div className="form-group">
									<label className="w-100" htmlFor="exampleInputUsername"><h5 className="text-white">User Name</h5></label>
									<input
										type="text"
										name="username"
										className="form-control"
										id="exampleInputUsername"
										aria-describedby="emailHelp"
										placeholder="Enter Username"
                                        {...register("username")}
									/>
									
								</div>


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

export default signup;
