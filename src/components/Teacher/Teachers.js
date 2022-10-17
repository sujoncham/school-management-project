import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Teachers = () => {
    const navigate = useNavigate();
    const [teachers, setTeachers] = useState([]);

    useEffect(()=>{
        const getTeacher = async() =>{
            const res = await fetch('http://localhost:5000/teacher');
            const data = await res.json();
            setTeachers(data);
        }
        getTeacher();
    }, []);


    const handleTeacherDetail = (id) =>{
        navigate(`/teachers/${id}`)
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {
                    teachers?.map(teacher => <div key={teacher._id} teacher={teacher} className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={teacher.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{teacher.name}</h2>
                        <p>{teacher.subject}</p>
                        <div className="card-actions">
                        <button onClick={()=>handleTeacherDetail(teacher._id)} className="btn btn-sm">see details</button>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Teachers;