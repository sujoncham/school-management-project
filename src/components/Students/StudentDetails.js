import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ResultsOne from '../Results/ResultsOne';
import ResultsThree from '../Results/ResultsThree';
import ResultsTwo from '../Results/ResultsTwo';

const StudentDetails = () => {
    const {id} = useParams();
    const [student, setStudent] = useState({});
    useEffect(()=>{
        const getData = async() =>{
            const res = await fetch(`http://localhost:5000/students/${id}`);
            const data = await res.json();
            setStudent(data)
        }
        getData()
    }, [id])
    return (
        <div className='w-full'>
            <h1>Student Id: {id}</h1>
            <div className='flex justify-between items-center gap-10'>
                <div className='w-[30%]'>
                    <h1>Name: {student.name}</h1>
                    <h1>Roll Id: {student.studentId}</h1>
                    <h1>Class: {student.class}</h1>
                </div>
                <div className='w-[30%]'>
                    <h1>Section: {student.section}</h1>
                    <h1>Group: {student.group ? student.group: 'no data'}</h1>
                    <h1>Session: {student.session ? student.session: 'no data'}</h1>
                </div>
                <div className='w-[30%] flex justify-end items-end'>
                    <img src={student.img} alt="" className='w-[20%] rounded-md' />
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <ResultsOne></ResultsOne>
                <ResultsTwo></ResultsTwo>
                <ResultsThree></ResultsThree>
            </div>
        </div>
    );
};

export default StudentDetails;