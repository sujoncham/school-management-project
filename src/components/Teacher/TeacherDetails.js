import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TeacherDetails = () => {
    const {id} = useParams();

    const [teacher, setTeacher] = useState({});

    useEffect(()=>{
        const getTeacher = async() =>{
            const res = await fetch(`http://localhost:5000/teacher/${id}`);
            const data = await res.json();
            setTeacher(data);
        }
        getTeacher();
    }, [id]);
    return (
        <div>
            <h1>Teacher Id: {id}</h1>
            <div className="w-full bg-base-100 shadow-xl flex justify-around">
                <div className='w-[50%] border'>
                    <figure className="px-10 pt-10 mx-auto">
                        <img src={teacher.img} alt="Shoes" className="rounded-xl w-[50%] mx-auto" />
                    </figure>
                    <div className="card-body items-center text-center p-10">
                        <h2 className="text-3xl font-bold">{teacher.name}</h2>
                        <p>Professor of Math Department</p>
                        
                    </div>
                </div>
                <div className='w-[50%] border'>
                    <h2 className="text-3xl font-bold p-5">Life History:</h2>
                   <div className='p-5'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi incidunt praesentium ducimus enim velit similique, repudiandae quas impedit delectus optio nulla veritatis non, libero hic reiciendis dignissimos ipsum, repellendus maxime! Dolores non reprehenderit fuga, error nulla dolor quod iure est alias sunt, tenetur modi dolorem eaque quidem ea enim nisi architecto, optio ut cum odio nobis ipsum. Cumque aut similique aperiam architecto iusto modi quas delectus, assumenda unde vero cum quasi, placeat odio perferendis atque eaque consectetur ipsa eligendi eveniet? Eveniet, id provident. Suscipit, recusandae magnam! Eveniet quibusdam deserunt quia reprehenderit at libero voluptates molestias, architecto, veniam excepturi explicabo.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga excepturi incidunt praesentium ducimus enim velit similique, repudiandae quas impedit delectus optio nulla veritatis non, libero hic reiciendis dignissimos ipsum, repellendus maxime! Dolores non reprehenderit fuga, error nulla dolor quod iure est alias sunt, tenetur modi dolorem eaque quidem ea enim nisi architecto, optio ut cum odio nobis ipsum. Cumque aut similique aperiam architecto iusto modi quas delectus, assumenda unde vero cum quasi, placeat odio perferendis atque eaque consectetur ipsa eligendi eveniet? Eveniet, id provident. Suscipit, recusandae magnam! Eveniet quibusdam deserunt quia reprehenderit at libero voluptates molestias, architecto, veniam excepturi explicabo.</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherDetails;