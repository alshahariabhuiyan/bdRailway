import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo/logo.png'

const Navbar = () => {
    const li = <>
        <li><Link>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link>Train Information</Link></li>
        <li><Link>Contact Us</Link></li>

    </>
    return (
        <div className="navbar bg-stone-100 shadow-lg p-5 px-36 fixed top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {li}
                    </ul>
                </div>
                <img className="w-[60px]" src={logo} alt="" />
                <span className="text-[#DA924E] font-bold text-xl">Bangladesh <br/> Railway</span>
            </div>
            <div className="navbar-end hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {li}
                </ul>
            </div>
            {/* <div className="navbar-end text-black">
                <Link>Login</Link>
            </div> */}
        </div>
    );
};

export default Navbar;