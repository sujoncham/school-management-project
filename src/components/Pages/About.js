import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <h1 className='text-5xl'>About</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
                <div className="w-[100%] md:w-[50%] lg:w-[50%] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Our Mission</h2>
                        <p>A mission statement is a short summary of an organization's core purpose, focus, and aims. This usually includes a brief description of what the organization does and its key objectives.</p>
                        <div className="card-actions">
                        <button className="btn btn-primary">see more</button>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] md:w-[50%] lg:w-[50%] bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Our Vision</h2>
                        <p>A vision statement is a short description of an organization's aspirations and the wider impact it aims to create. It should be a guiding beacon to everyone within the organization and something which underpins internal decision-making and determines the intended direction of the organization.</p>
                        <div className="card-actions">
                        <button className="btn btn-primary">see more</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;