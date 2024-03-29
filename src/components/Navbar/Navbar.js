import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    
const myMenu = (
<>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/teachers">Teachers</Link></li>
    <li><Link to="/classes">Classes</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/dashboard">Dashboard</Link></li>
</>
);

    return (
        <header className="bg-slate-500 sticky top-0 z-50">
            <div className="container mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {myMenu}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">SMS Solution</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    {myMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn btn-sm">Login</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;