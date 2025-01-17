import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => { 
    const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate()
    const handleForm = (e) =>{
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');
        // console.log(name, email, photo, password) 

        createNewUser(email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            updateUserProfile({displayName:name, photoURL:photo})
            .then(()=>{
                navigate("/")
            })
            .catch((err)=>{
                // console.log(err);
            })
        })
        .catch(error =>{
            // console.log('Error', error.message);
        })
    }
    return (
        <div className='min-h-screen my-10 flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                <form onSubmit={handleForm} className="card-body">
                    <h2 className="font-semibold text-center my-10 text-3xl">Register your account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-url</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo-url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className='my-6 text-center'>Dont't Have An Account ? <Link to="/auth/login" className='text-[#F75B5F]'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;