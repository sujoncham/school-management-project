import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link, Outlet } from 'react-router-dom';
import MobileView from './MobileView';
import Sidebar from './Sidebar';

const Dashboard = () => {
    const [openTab, setOpenTab] = useState(1);
    const [show, setShow] = useState(false)
    const [toggleShow, setToggleShow] = useState(false)
    const [dashboard, setDashboard] = useState(false)
    return (
        <section className='dashboard flex'>
            <div className={` ${!show === true ? "w-[15%]" : "w-[5%]"} bg-blue-600 h-[100%] hidden md:block lg:block`}>
            
                <div className='flex justify-start items-center gap-3 bg-blue-500 p-4'>
                    <span onClick={()=>setShow(!show)}  className='text-white cursor-pointer'>
                    {
                    !show ? <FaAngleLeft size={40} className='text-white cursor-pointer'/>
                    : 
                    <FaAngleRight size={40} className='text-white cursor-pointer'/>
                    }
                    </span>
                    {!show ? <h1 className='text-3xl font-bold text-white'>Tanda</h1> : ""}
                </div>

                <Sidebar openTab={openTab} setOpenTab={setOpenTab} show={show} />

            </div>
            <div className={` ${!show === true ? "w-[85%]" : "w-[95%]"} w-[100%] md:block lg:block `}>
                <div className='flex justify-between bg-blue-300 py-[2px]'>
                    <div className='p-2 relative'>
                        <div onClick={()=>setDashboard(!dashboard)} className='flex justify-start items-center gap-3 border-[1px] rounded-full border-white py-1 relative cursor-pointer hover:bg-blue-400 px-2 hover:rounded-full md:hidden lg:hidden'>
                            { !dashboard ? <FaAngleRight size={40} className='text-white cursor-pointer'/>
                            :
                            <FaAngleLeft size={40} className='text-white cursor-pointer'/>
                            }
                        </div>
                        {dashboard ? <MobileView openTab={openTab} setOpenTab={setOpenTab} show={show} /> : ""}
                    </div>
                    <div className='p-2 flex justify-end items-center gap-5'>
                        <div>
                            <Link to='/'>Home</Link>
                        </div>
                        <div onClick={()=>setToggleShow(!toggleShow)} className='flex justify-start items-center gap-3 border-[1px] rounded-full border-white relative cursor-pointer hover:bg-blue-400 px-2 hover:rounded-full'>
                            <span>Hi, Laura Jane</span>
                            <img src={'/assets/teacher2.jpg'} className="rounded-full" width={50} height={50} alt='' />
                        {toggleShow ? <div className='absolute top-14 z-10 bg-blue-500 p-5 flex flex-col rounded-lg'>
                            <Link to='/' className='border-b-[1px] py-2'>Profile</Link>
                            <Link to='/' className='border-b-[1px] py-2'>Accounting Setting</Link>
                            <Link to='/' className='border-b-[1px] py-2'>Logout</Link>
                        </div>: ""}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="">
                        
                        <Outlet />
                    </div>
                
                </div>
            </div>
            
        </section>
    );
};

export default Dashboard;