import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

const LoginWith = () => {
    const { user, signUpWithGoogle } = useContext(AuthContext);
    const handleLogInWithGoogle = async (e) => {
        e.preventDefault();
        const res = await signUpWithGoogle()
    }
    return (
        <div>
            <h2 className="font-bold text-lg">Login With</h2>
            <div className='flex flex-col mt-4 gap-2'>
                {
                    <button onClick={handleLogInWithGoogle}
                        className="py-2 rounded-lg hover:border-blue-300 hover:text-blue-400 hover:bg-white border-slate-400 text-black-500 border-2 btn">
                        <FaGoogle></FaGoogle>
                        Login with google
                    </button>
                }

                <button className="py-2 rounded-lg hover:border-blue-300 hover:text-blue-400 hover:bg-white border-slate-400 text-black-500 border-2 btn"><FaGithub></FaGithub> Login with github</button>
            </div>
        </div>
    );
};

export default LoginWith;