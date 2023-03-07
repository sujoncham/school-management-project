import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const StudentsList = ({id}) => {
    const navigate = useNavigate();

    const [students, setStudents] = useState([]);
    console.log(students)
        useEffect(()=>{
            const getData = async () => {
                const data = await axios.get(`http://localhost:5000/api/students/`);
                
                setStudents(data.data.data);
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
        <>
      
            <div className='flex justify-between items-center py-5'>
                <div className=''>
                    <Link to={`/addStudent/${id}`} className="border-2 bg-purple-400 px-2 py-2 rounded-md">Add Student</Link>
                </div>
                <div className="form-control">
                    <h3>Search By Id</h3>
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <FaSearch className="h-6 w-6" />
                        </button>
                    </div>
                </div>
                <div className="form-control">
                    <h3>Search By name</h3>
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <FaSearch className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="mb-14">
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
                
                        { students.map((student, index) => student.classes[0]._id === id && <tr key={student._id}>
                            <th>{index + 1}</th>
                            <td>{student.fullname}</td>
                            <td>{student.classes[0].classname}</td>
                            <td>{student.studentId}</td>
                            <td>
                                <button onClick={()=>handleStudentDetails(student._id)} className='btn btn-sm'>see detail</button> 
                                <button onClick={()=>handleStudentData(student._id)} className='btn btn-sm'>add data</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default StudentsList;