import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(UserContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                {
                    user &&
                    <div>
                        <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
                    </div>
                }

                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>


                {
                    user ?
                        <div>
                            <span>{user.email}</span>
                            <button className="btn btn-xs" onClick={handleLogOut}>Sign Out</button>
                        </div>
                        :
                        // <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                        <></>
                }
            </div>
        </div>
    );
};

export default Header;