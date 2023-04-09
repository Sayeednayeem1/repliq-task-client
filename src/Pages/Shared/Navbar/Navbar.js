import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Time from '../../../Time/Time';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    // todo logout statement
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    };

    const navItems = <React.Fragment>
        <li className="text-xl font-bold"><Link to='/'>Home</Link></li>
        <li className="text-xl font-bold"><Link to='/productList'>Product List</Link></li>
        {
            user?.uid ?
                <>
                    <li className="text-xl font-bold"><Link to='/dashboard'>DashBoard</Link></li>
                    <li className="text-xl font-bold"><button onClick={handleLogout}>Log Out</button></li>
                </>
                :
                <li className="text-xl font-bold"><Link to='/login'>Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost normal-case text-xl">RepLiq</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.displayName ?
                            <h1 className='text-xl font-bold'>{user?.displayName}</h1>
                            :
                            <Time className="text-xl font-bold"></Time>
                    }
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden navbar-end ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;