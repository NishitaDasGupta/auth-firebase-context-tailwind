import React, { useContext } from 'react';
import { UserContext } from '../Providers/AuthProviders';


const Home = () => {
 const {user} = useContext(UserContext);
console.log(user);
    return (
        <div>
          <h2>home </h2>  
        </div>
    );
};

export default Home;