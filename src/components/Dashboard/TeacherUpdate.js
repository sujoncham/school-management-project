import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const TeacherUpdate = () => {
    const [detail, setDetail] = useState();
    const navigate = useNavigate();
    const {updateId} = useParams();
    console.log(detail)

    const [inputs, setInputs] = useState({
        name: "", description: "", photo: "", address: "", phone: "", position: "", subject: "", joinDate: ""
    });

    const handleChange = (e)=>{
        setInputs((prevState)=>({
           ...prevState,
           [e.target.name] : e.target.value,
        }))
    }

    useEffect(()=>{
        const getData = async () =>{
            const res = await axios.get(`http://localhost:5000/api/teachers/teacherDetail/${updateId}`).catch((err)=>console.log(err));
            const data = await res.data;
            setDetail(data);
            setInputs({
                name:data?.data?.name,
                description:data?.data?.description,
                address:data?.data?.address,
                position:data?.data?.position,
                subject:data?.data?.subject,
                phone:data?.data?.phone,
                joinDate:data?.data?.joinDate,
                photo:data?.data?.img,
            })
        }
        getData();
    }, [updateId]);
    console.log(detail);

    const getData = async () =>{
        const res = await axios.patch(`http://localhost:5000/api/teachers/teacherUpdate/${updateId}`, {
            name:inputs.name,
            description:inputs.description,
            address:inputs.address,
            position:inputs.position,
            subject:inputs.subject,
            phone:inputs.phone,
            joinDate:inputs.joinDate,
            img:inputs.photo,
        }).catch((err)=>console.log(err));
        const data = await res.data;
        return data;
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        getData().then(data=>{
            console.log(data)
            navigate(`/blog/${updateId}`)
        });
     }
    return (
        <div className="bg-purple-300">
            <h1>{updateId}</h1>
            <div className="container mx-auto py-10 flex justify-center gap-10">
               <img className='w-[50%]' src="/images/banner.png" alt="" />
               <form className="w-[50%] bg-white shadow-lg px-10 py-5 rounded-md" onSubmit={handleSubmit} action="">
                  <div className="flex flex-col mt-5">
                     <label htmlFor="fullname">Full Name</label>
                     <input type="text" name='name' value={inputs.name} onChange={handleChange} className='border-2 px-2 py-2 w-full rounded-md' />
                  </div>
                  <div className="flex flex-col mt-5">
                     <label htmlFor="subject">Subject</label>
                     <input type="text" name='subject' value={inputs.subject} onChange={handleChange} className='border-2 px-2 py-2 w-full rounded-md' />
                  </div>
                  <div className="flex flex-col mt-5">
                     <label htmlFor="address">Address</label>
                     <input type="text" name='address' value={inputs.address} onChange={handleChange} className='border-2 px-2 py-2 w-full rounded-md' />
                  </div>
                  <div className="flex flex-col mt-5">
                     <label htmlFor="phone">phone</label>
                     <input type="text" name='phone' value={inputs.phone} onChange={handleChange} className='border-2 px-2 py-2 w-full rounded-md' />
                  </div>
                  <div className="flex flex-col mt-5">
                     <label htmlFor="joinDate">Join Date</label>
                     <input type="date" name='joinDate' value={inputs.joinDate} onChange={handleChange} className='border-2 px-2 py-2 w-full rounded-md' />
                  </div>
                  <div className="flex flex-col mt-5">
                     <label htmlFor="position">position</label>
                     <input type="text" name='position' value={inputs.position} onChange={handleChange} className='border-2 px-2 py-2 w-full rounded-md' />
                  </div>
                  <div className="flex flex-col mt-5">
                     <label htmlFor="description">Description</label>
                     <textarea type="text" value={inputs.description} name="description" onChange={handleChange} cols="30" rows="10" className='border-2 px-2 py-2 w-full rounded-md'></textarea>
                  </div>
                  <div className="flex flex-col mt-5">
                     <label htmlFor="fname">Teacher Image</label>
                     <input type="file" name='photo' value={inputs.img} onChange={handleChange} />
                  </div>
                  <button type='submit' className='bg-red-500 px-2 py-2 rounded-md mt-5'>create blog</button>
               </form>
            </div>
         </div>
    );
};

export default TeacherUpdate;