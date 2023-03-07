import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const AddStudent = () => {
	const {classId} = useParams()
	const [file, setFile] = useState('')
	const [fullname, setFullname] = useState('')
	const [studentId, setStudentId] = useState('')
	const [father, setFather] = useState('')
	const [mother, setMother] = useState('')
	const [address, setAddress] = useState('')
	const [gender, setGender] = useState('')
	const [phone, setPhone] = useState('')
	const [joinDate, setJoinDate] = useState('')
	const [section, setSection] = useState('')
	const [birthDate, setBirthDate] = useState('')
	const [description, setDescription] = useState('')
	const [group, setGroup] = useState('')

	// console.log(group, address, gender, section, birthDate, description, mother, father, fullname, studentId, phone, joinDate, file)

	
    const handleAddStudent = async (event) =>{
    event.preventDefault();

	const formData = new FormData();
	formData.append('image', file);
	formData.append('fullname', fullname);
	formData.append('studentId', studentId);
	formData.append('father', father);
	formData.append('mother', mother);
	formData.append('birthDate', birthDate);
	formData.append('address', address);
	formData.append('section', section);
	formData.append('gender', gender);
	formData.append('phone', phone);
	formData.append('joinDate', joinDate);
	formData.append('group', group);
	formData.append('description', description);
	formData.append('classId', classId);
	
	

    let url = `http://localhost:5000/api/students/addStudent`;
	await axios.post(url, formData)
	.catch((err)=>{
		console.log(err)
	}).then(res =>{
		console.log(res.data)
		console.log("add successfull")
	})
   
    }

    return (

		<div className="container mx-auto">
			
			<h3 className="text-2xl text-center">Add Student!</h3>
			<form method='post' onSubmit={handleAddStudent} className="px-8 pt-6 pb-8 mb-4 bg-white rounded" encType="multipart/form-data">
				<div className="flex justify-center px-6 my-12 gap-10">

					<div className="w-[50%]">
					
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fullName">
								Full mame
							</label>
							<input
								className="leading-tight text-gray-700 border-2 border-purple-500 rounded w-full py-1 px-2"
								name="fullname"
								type="text"
								placeholder="full name"
								onChange={(e)=>setFullname(e.target.value)}
								
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fatherName">
								Father's name
							</label>
							<input
								className="text-gray-700 border-2 border-purple-500 rounded w-full py-1 px-2"
								name="father"
								type="text"
								placeholder="father's name"
								onChange={(e)=>setFather(e.target.value)}
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="motherName">
								Mother's name
							</label>
							<input
								className="w-full py-1 px-2 text-gray-700 border-2 border-purple-500 rounded"
								name="mother"
								type="text"
								placeholder="mother's name"
								onChange={(e)=>setMother(e.target.value)}
							/>
						</div>
						<div className="mb-4 md:mr-2 md:mb-0">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="group">
								SubjectsGroup
							</label>
							<select name="group" onChange={(e)=>setGroup(e.target.value)} className='border-2 border-purple-500 rounded w-full py-2 px-2'>
								<option>select one</option>
								<option value="science">Science</option>
								<option value="humanities">Humanities</option>
								<option value="b-studies">Business Studies</option>
								<option value="technical">Technical School</option>
							</select>
						</div>
						<div className="">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="gender">
								Gender
							</label>
							<select name="gender" onChange={(e)=>setGender(e.target.value)} className='border-2 border-purple-500 rounded w-full py-2 px-2'>
								<option>select one</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="others">Others</option>
							</select>
						</div>
						<div className="">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="joinDate">
								Admit Date
							</label>
							<input
								className="w-full px-3 py-2 text-gray-700 border-2 border-purple-500 rounded"
								name="joinDate"
								type="date"
								placeholder="join date"
								onChange={(e)=>setJoinDate(e.target.value)}
							/>
							
						</div>
						<div className="">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="description">
								Description
							</label>
							<input
								className="w-full px-3 py-2 mb-3 text-gray-700 border-2 border-purple-500 rounded"
								name="description"
								type="text"
								placeholder="description"
								onChange={(e)=>setDescription(e.target.value)}
							/>
									
						</div>
					</div>
					
					<div className="w-[50%]">
						<div className="mb-4 md:mr-2 md:mb-0">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="section">
								Class Section
							</label>
							<select name="section" onChange={(e)=>setSection(e.target.value)} className='border-2 border-purple-500 rounded w-full py-2 px-2'>
								<option>select one</option>
								<option value="Boys">Boys</option>
								<option value="Girls">Girls</option>
							</select>
						</div>
						
						<div className="mb-4 md:mr-2 md:mb-0">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="StudentId">
								StudentId
							</label>
							<input
								className="w-full px-3 py-2 mb-3 text-gray-700 border-2 border-purple-500 rounded"
								name="studentId"
								type="number"
								placeholder="student id"
								onChange={(e)=>setStudentId(e.target.value)}
							/>
						</div>
						<div className="mb-4 md:mr-2 md:mb-0">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
								Address
							</label>
							<input
								className="w-full px-3 py-2 mb-3 text-gray-700 border-2 border-purple-500 rounded"
								name="address"
								type="text"
								placeholder="address"
								onChange={(e)=>setAddress(e.target.value)}
							/>
						</div>
						<div className="mb-4 md:mr-2 md:mb-0">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="phone">
								Phone
							</label>
							<input
								className="w-full px-3 py-2 mb-3 text-gray-700 border-2 border-purple-500 rounded"
								name="phone"
								type="text"
								placeholder="phone"
								onChange={(e)=>setPhone(e.target.value)}
							/>
						</div>
						<div className="mb-4 md:mr-2 md:mb-0">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="birthDate">
								Date of birth
							</label>
							<input
								className="w-full px-3 py-2 mb-3 text-gray-700 border-2 border-purple-500 rounded"
								name="birthDate"
								type="date"
								placeholder="date of birth"
								onChange={(e)=>setBirthDate(e.target.value)}
							/>
						</div>
						<div className="mb-4 md:mr-2 md:mb-0">
							<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="image">
								Student's Photo
							</label>
							<input
								className="w-full px-3 py-2 mb-3 text-gray-700 border-2 border-purple-500 rounded"
								type="file"
								name='image'
								onChange={(e)=>setFile(e.target.files[0])}
							/>
						</div>
						<div className="mb-6 text-center">
							<button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
								Add Student
							</button>
						</div>
						
					</div>
				</div>
			</form>
		</div>
    );
};

export default AddStudent;