import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-96 mx-auto mt-14 mb-14'>
            <form>
     
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">email</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">password</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <button type='submit' className="btn btn-sm mt-10">Login</button>
                </div>
            </form>
            <p>Have not an account? Please, <Link to='/register' className='text-primary'>create account</Link> here</p>
            <div className="divider"></div> 
            <div>
                <button className="btn btn-sm">signin google</button>
            </div>
            
        </div>
    );
};

export default Login;