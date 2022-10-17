import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">name</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
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
                <button type='submit' className="btn btn-sm">register</button>
                </div>
            </form>
            <p>Have an account? Please, <Link to='/login' className='text-primary'>login</Link> here</p>
            <div className="divider"></div> 
            <div>
                <button className="btn btn-sm">signin google</button>
            </div>
            
        </div>
    );
};

export default Register;