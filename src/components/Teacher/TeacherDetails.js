import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TeacherDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate()

    const [teacher, setTeacher] = useState({});
    // console.log(teacher)

    useEffect(()=>{
        const getTeacher = async() =>{
            const res = await fetch(`http://localhost:5000/api/teachers/teacherDetail/${id}`);
            const data = await res.json();
            setTeacher(data.data);
        }
        getTeacher();
    }, [id]);

    const handleUpdate = (id) =>{
        navigate(`/teachers/teacherUpdate/${id}`)
    }

    return (
        <div>
            <h1 className='text-center py-10'>Teacher Id: {id}</h1>
            <div className="w-full bg-base-100 shadow-xl flex justify-around">
                <div className='w-[50%] border'>
                    <button onClick={()=>handleUpdate(teacher._id)} className='bg-purple-500 py-1 px-2 rounded-sm'>edit</button>
                    <figure className="px-10 pt-10 mx-auto">
                        <img src={teacher.img} alt="Shoes" className="rounded-xl w-[50%] mx-auto" />
                    </figure>
                    <div className="card-body items-center text-center p-10">
                        <h2 className="text-3xl font-bold">{teacher.name}</h2>
                        <p>{teacher.position} Teacher of {teacher.subject} Department</p>
                        
                    </div>
                </div>
                <div className='w-[50%] border'>
                    <h2 className="text-3xl font-bold p-5">Life History:</h2>
                   <div className='p-5'>
                        <p>{teacher.description}</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherDetails;