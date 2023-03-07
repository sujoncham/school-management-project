import axios from 'axios';
import React, { useState } from 'react';

const AddClassname = () => {
  const [classname, setClassname] = useState('')

    const addUserData = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('classname', classname);
  
        await axios.post("http://localhost:5000/api/classname/addClassname", formData, {
            headers:{
              "Content-Type" : "application/json"
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
            <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" >
                <img src="/assets/teacher1.jpg" alt="" />
            </div>
            
            <div className="w-full lg:w-7/12 bg-white rounded-lg lg:rounded-l-none">
              <form className="w-96 shadow-lg px-4 py-5 rounded-md" onSubmit={addUserData}>
                  <div className="flex flex-col mt-5">
                      <label htmlFor="fname">Full name</label>
                      <input type="text" name='classname' onChange={(e)=>setClassname(e.target.value)} placeholder="full name" className='border-2 px-2 py-2 w-72 rounded-md' />
                  </div>
                  <button type="submit" className='bg-red-500 px-2 py-2 rounded-md mt-5 text-white hover:bg-red-700 hover:text-black'>create</button>
              </form>
          </div>
        </div>
      </div>
  </div>
    );
};

export default AddClassname;