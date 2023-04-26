import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Providers/AuthProviders';

const Login = () => {
    const { user, signInUser,googleSignIn } = useContext(UserContext);
    // console.log(signInUser);

    const handleLogIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

const handleGoogle = () => {
    googleSignIn()
    .then(result => {
        const googleUser = result.user;
    })
    .catch(error => {
        console.log(error.message);
    })
}
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Please Login!!!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <label className="label">
                        <Link to='/register'> <button className="m-6 label-text-alt link link-hover">New to this Website? Please Register!</button></Link>
                    </label>
                    <button onClick={handleGoogle} className="btn btn-primary">Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;