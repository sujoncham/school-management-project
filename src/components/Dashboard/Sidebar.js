import React from 'react';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = ({openTab, setOpenTab, show}) => {
    return (
        <div className="flex flex-col h-screen">
            <div onClick={() => setOpenTab(1)}
                className={` ${openTab === 1 ? "bg-blue-800 px-5 py-3 text-white" : " px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaHome size={20} className='text-white' />
                    {!show ? <Link to='/dashboard'>Dashboard</Link>: ""}
            </div>
            <div onClick={() => setOpenTab(2)}
                className={` ${openTab === 2 ? "bg-blue-800 px-5 py-3 text-white" : " px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaHome size={20} className='text-white' />
                    {!show ? <Link to='/dashboard/addStudent'>AddStudent</Link>: ""}
            </div>
            <div onClick={() => setOpenTab(3)}
                className={` ${openTab === 3 ? "bg-blue-800 px-5 py-3 text-white" : " px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaHome size={20} className='text-white' />
                    {!show ? <Link to='/dashboard/addTeacher'>AddTeacher</Link>: ""}
            </div>
            <div onClick={() => setOpenTab(4)}
                className={` ${openTab === 4 ? "bg-blue-800 px-5 py-3 text-white" : " px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaHome size={20} className='text-white' />
                    {!show ? <Link to='/dashboard/addClassname'>AddClass</Link>: ""}
            </div>
    </div>
    );
};

export default Sidebar;