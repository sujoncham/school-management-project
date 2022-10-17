import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const StudentsList = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [getStudent, setGetStudent] = useState([]);
        useEffect(()=>{
            const getData = async () => {
                const res = await fetch(`http://localhost:5000/students`);
                const data = await res.json();
                setGetStudent(data);
            }
        getData();

}, [])




    const handleStudentDetails = (id) =>{
        navigate(`/student/${id}`)
    }
    const handleStudentData = (id) =>{
        navigate(`/studentData/${id}`)
    }

    return (
        <div className="w-full mx-auto">
            <h1>Class: {id}</h1>
            {/* <h1>Class: {getStudent}</h1> */}
            <div className='flex justify-start items-center gap-10'>
                <div className="form-control mt-14 mb-14">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
                <div>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>select your option</option>
                        <option>Boys</option>
                        <option>Girls</option>
                        <option>English Medium</option>
                    </select>
                </div>
            </div>
            <div className="w-full mb-14">
                <table className="table w-full">
                
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Student Id</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                
                        { getStudent.map((student, index) => <tr index={index} key={student._id} student={student}>
                            <th>{index + 1}</th>
                            <td>{student.name}</td>
                            <td>{student.class}</td>
                            <td>{student.studentId}</td>
                            <td>
                                <button onClick={()=>handleStudentDetails(student._id)} className='btn btn-sm'>see detail</button> 
                                <button onClick={()=>handleStudentData(student._id)} className='btn btn-sm'>add data</button>
                            </td>
                        </tr>)}
                    
                 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentsList;