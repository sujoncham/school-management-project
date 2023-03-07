import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
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
        <div className='mb-5'>
            <div className='bg-purple-500 py-10'>
                <h1 className='text-5xl text-center text-white uppercase'>About</h1>
            </div>
            <div className='container mx-auto py-10'>
                <div className='flex justify-between gap-5'>
                    <div className="w-[100%] md:w-[50%] lg:w-[50%] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Our Mission</h2>
                            <p>A mission statement is a short summary of an organization's core purpose, focus, and aims. This usually includes a brief description of what the organization does and its key objectives.</p>
                            <div className="card-actions">
                            <button className="btn btn-primary">see more</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[50%] lg:w-[50%] bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Our Vision</h2>
                            <p>A vision statement is a short description of an organization's aspirations and the wider impact it aims to create. It should be a guiding beacon to everyone within the organization and something which underpins internal decision-making and determines the intended direction of the organization.</p>
                            <div className="card-actions">
                            <button className="btn btn-primary">see more</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='bg-purple-500 py-10'>
                        <h1 className='text-5xl text-center text-white uppercase'>School Standing Commitee</h1>
                    </div>
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
                
            </div>
        </div>
    );
};

export default About;