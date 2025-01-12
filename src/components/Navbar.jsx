
import { Link } from 'react-router-dom';
import loginIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';

const Navbar = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div className="">
                {user && user.email}
            </div>
            <div className="text-[#706F6F] text-lg justify-center flex flex-1 space-x-4">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className=" flex gap-4 items-center">
                <div className=''>
                    <img src={loginIcon} alt="" className='w-full' />
                </div>
                <Link to={'/auth/login'} className='bg-[#403F3F] font-bold text-white px-5 py-2'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;