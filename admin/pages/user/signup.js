import React from 'react';
import Blank from '../../components/Blank';
import Card from 'react-bootstrap/Card';
const signup = () => {
  return (
    <>
    <Blank>
    <Card className="w-75 m-auto bg-dark bg-gradient h-50">
        <div className="w-100 m-auto">
                <div className=" w-75 m-auto center">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input  type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit"  class="btn btn-primary">Login</button>
                        <button  style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>
                    </form>
                </div>
            </div>
        </Card>
    </Blank>
    </>
  )
}

export default signup