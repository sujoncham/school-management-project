import axios from "axios";
import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import girl from '../../images/beauty.jpg';

const AddTeacher = () => {
  const [file, setFile] = useState('')
  const [fullname, setFullname] = useState('')
  const [position, setPosition] = useState('')
  const [joinDate, setJoinDate] = useState('')
  const [subject, setSubject] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')
  console.log(file)
 
  
    const addUserData = async (e) => {
      e.preventDefault();
      
      // const name = e.target.fname.value;
      // const position = e.target.position.value;
      // const joinDate = e.target.joinDate.value;
      // const subject = e.target.subject.value;
      // const description = e.target.description.value;

      const formData = new FormData();
      formData.append('photo', file);
      formData.append('fullname', fullname);
      formData.append('position', position);
      formData.append('address', address);
      formData.append('phone', phone);
      formData.append('joinDate', joinDate);
      formData.append('subject', subject);
      formData.append('description', description);
      console.log(formData)
    
  
      await axios.post("http://localhost:5000/api/teachers/addTeacher", formData, {
        headers:{
          "Content-Type" : "multipart/form-data"
        }
      })
      .catch((err)=>console.log(err))
      .then(data=>{
        console.log(data)
        console.log('post successfully')
      })
  
    }
  
    return (
      <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{backgroundImage: `url(${girl})`}}
              ></div>
              
              <div className="w-full lg:w-7/12 bg-white rounded-lg lg:rounded-l-none">
                <form className="w-96 shadow-lg px-4 py-5 rounded-md" method="post" onSubmit={addUserData} encType="multipart/form-data">
                    <div className="flex flex-col mt-5">
                        <label htmlFor="fname">Full name</label>
                        <input type="text" name='fullname' onChange={(e)=>setFullname(e.target.value)} placeholder="full name" className='border-2 px-2 py-2 w-72 rounded-md' />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="position">Designation</label>
                        <input type="text" name='position' onChange={(e)=>setPosition(e.target.value)} placeholder="designation" className='border-2 px-2 py-2 w-72 rounded-md' />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="date">Joining Date</label>
                        <input type="date" name='joinDate' onChange={(e)=>setJoinDate(e.target.value)} placeholder="date" className='border-2 px-2 py-2 w-72 rounded-md' />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" name='subject' onChange={(e)=>setSubject(e.target.value)} placeholder="subject" className='border-2 px-2 py-2 w-72 rounded-md' />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="description">Description</label>
                        <textarea type="text" name="description" onChange={(e)=>setDescription(e.target.value)} placeholder="subject" className='border-2 px-2 py-2 w-72 rounded-md'></textarea>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="address">Address</label>
                        <textarea type="text" name="address" onChange={(e)=>setAddress(e.target.value)} placeholder="address" className='border-2 px-2 py-2 w-72 rounded-md'></textarea>
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" onChange={(e)=>setPhone(e.target.value)} placeholder="phone" className='border-2 px-2 py-2 w-72 rounded-md' />
                    </div>
                    <div className="flex flex-col mt-5">
                        <label htmlFor="file">Teacher Photo</label>
                        <input type="file" name='photo' onChange={(e)=>setFile(e.target.files[0])} className='border-2 px-2 py-2 w-72 rounded-md' />
                    </div>
                    <button type="submit" className='bg-red-500 px-2 py-2 rounded-md mt-5 text-white hover:bg-red-700 hover:text-black'>create</button>
                </form>
            </div>
          </div>
        </div>
    </div>
    );
};

export default AddTeacher;