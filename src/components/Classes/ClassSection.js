import React from 'react';
import { useParams } from 'react-router-dom';
import StudentsList from '../Students/StudentsList';

const ClassSection = () => {
    const {id} = useParams();

    return (
        <div className="container mx-auto px-10">
            <h1>Class: {id}</h1>
            {/* <h1>Class: {getStudent}</h1> */}
            
            <StudentsList id={id} />
        </div>
    );
};

export default ClassSection;