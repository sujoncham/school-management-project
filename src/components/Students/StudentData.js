import React from 'react';
import { useParams } from 'react-router-dom';

const StudentData = () => {
    const {id} = useParams()
    return (
        <div className='mb-10'>
            <h1>Student Data {id}</h1>
            <div>
                <form>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Bangla</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Bangla</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Bangla</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Bangla</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Bangla</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Bangla</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentData;