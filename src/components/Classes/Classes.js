import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Classes = () => {
    const navigate = useNavigate();

    const [rooms, setRooms] = useState([]);
    useEffect(()=>{
        const getData = async() => {
            const res = await fetch('http://localhost:5000/class');
            const data = await res.json();
            setRooms(data);
        }
        getData();
    }, [])

    const handleStudentList = (id) =>{
        navigate(`/classes/${id}`)
    }

    return (
        <div className='mt-14 mb-14'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                {
                    rooms.map(room => <div key={room._id} room={room} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center text-3xl font-bold">{room.class}</h2>
                        <div className="card-actions justify-center">
                            <button onClick={() => handleStudentList(room._id)} className="btn btn-primary">List of Student</button>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Classes;