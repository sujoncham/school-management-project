import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Teachers = () => {
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);
    // console.log(teachers)

    useEffect(()=>{
        const getTeacher = async() =>{
            const res = await fetch('http://localhost:5000/api/teachers');
            const data = await res.json();
            setTeachers(data.data);
        }
        getTeacher();
    }, []);


    const handleTeacherDetail = (id) =>{
        navigate(`/teachers/${id}`)
    }

    const handleDelete = async(id)=>{
        const delConfirm = window.confirm('are you sure to delete this teacher?');
        if(delConfirm){
            await axios.delete(`http://localhost:5000/api/teachers/${id}`)
            .then(()=>{
                navigate('/teacher')
            })
            .catch((err)=>console.log(err))
        }
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {
                    teachers?.map(teacher => <div key={teacher._id} teacher={teacher} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={teacher.img} alt="teachers" className="rounded-xl w-full h-[350px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{teacher.name}</h2>
                        <p>{teacher.position} Teacher of {teacher.subject} Department</p>
                        <div className="card-actions">
                        <button onClick={()=>handleTeacherDetail(teacher._id)} className="btn btn-sm">see details</button>
                        <button onClick={()=>handleDelete(teacher._id)} className="btn btn-sm bg-primary">Delete</button>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Teachers;