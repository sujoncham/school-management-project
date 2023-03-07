import React from 'react';
import { FaClinicMedical, FaFileMedical, FaFileSignature, FaHome, FaMailBulk, FaUsersCog, FaUserSecret, FaWhmcs } from "react-icons/fa";

const MobileView = ({openTab, setOpenTab, show}) => {
    return (
        <div className="flex flex-col shadow-lg absolute w-[180px] top-16 z-40 bg-blue-300 lg:hidden">
            <div onClick={() => setOpenTab(1)}
                className={` ${openTab === 1 ? "bg-blue-800 px-5 py-3 text-white" : " px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaHome size={20} className='text-white' />
                    {!show ? <span>Dashboard</span>: ""}
            </div>
                
            <div onClick={() => setOpenTab(2)}
                className={` ${openTab === 2 ? "bg-blue-800 px-5 py-3 text-white" : "px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaClinicMedical size={20} className='text-white' />
                    {!show ? <span>Hero Section</span> :""}
            </div>
            <div onClick={() => setOpenTab(3)}
                className={` ${openTab === 3 ? "bg-blue-800 px-5 py-3 text-white" : "px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaWhmcs size={20} className='text-white' />
                    {!show ? <span>Our Services</span> : ""}
            </div>
            <div onClick={() => setOpenTab(4)}
                className={` ${openTab === 4 ? "bg-blue-800 px-5 py-3 text-white" : "px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaUsersCog size={20} className='text-white' />
                    {!show ? <span>Team Members</span> : ""}
            </div>
            <div onClick={() => setOpenTab(5)}
                className={` ${openTab === 5 ? "bg-blue-800 px-5 py-3 text-white" : "px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaFileSignature size={20} className='text-white' />
                    {!show ? <span>Testimonial</span> : ""}
            </div>
            <div onClick={() => setOpenTab(6)}
                className={` ${openTab === 6 ? "bg-blue-800 px-5 py-3 text-white" : "px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaUserSecret size={20} className='text-white' />
                    {!show ? <span>Our Clients</span> : ""}
            </div>
            <div onClick={() => setOpenTab(7)}
                className={` ${openTab === 7 ? "bg-blue-800 px-5 py-3 text-white" : "px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaFileMedical size={20} className='text-white' />
                    {!show ? <span>Our Blog</span> : ""}
            </div>
            <div onClick={() => setOpenTab(8)}
                className={` ${openTab === 8 ? "bg-blue-800 px-5 py-3 text-white" : "px-5 py-3"} flex justify-start items-center gap-2 cursor-pointer border-b-[1px]`}>
                    <FaMailBulk size={20} className='text-white' />
                    {!show ? <span>Message</span> : ""}
            </div>
    </div>
    );
};

export default MobileView;