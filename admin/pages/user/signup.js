import React from "react";
import Blank from "../../components/Blank";
import Card from "react-bootstrap/Card";
import { useForm } from "react-hook-form";
const signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // const handleSubmit=(e)=>{
        
    //     console.log('jjjkjlkjl');
    //     e.prevntDefault();
    //     return false;
    // }

	return (
		<>
			<Blank>
				<Card className="w-75 m-auto bg-dark bg-gradient h-50 login-top">
					<div className="w-100 m-auto">
						<div className=" w-75 m-auto center">
							<div className="row">
								<div className="col-12 m-100">
                                <h4 className="text-center text-white">Admin Login</h4>
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

export default signup;
