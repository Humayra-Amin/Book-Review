import { NavLink } from "react-router-dom";

const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listedbooks">Listed Books</NavLink></li>
        <li><NavLink to="/pagestoread">Pages to Read</NavLink></li>
    </>
    return (
        <div className="navbar container mx-auto my-5 w-10/12 lg:w-4/5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost lg:text-4xl text-[15px]">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 lg:gap-4 lg:mr-36">
                    {links}
                </ul>
            </div>
            <div className="lg:gap-5 gap-1 lg:ml-28 ml-6">
                <div className="navbar-end">
                    <a className="btn bg-[#23BE0A] text-white lg:w-[68px] w-[60px]">SignIn</a>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#59C6D2] text-white lg:w-[68px] w-[60px]">SignUp</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;