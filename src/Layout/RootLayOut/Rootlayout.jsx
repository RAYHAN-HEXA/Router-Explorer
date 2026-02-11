import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Spinner from '../../Components/Spinner';

const Rootlayout = () => {
    const navigation  = useNavigation();
    console.log(navigation)
    return (
        <div className='w-10/12 mx-auto'>
            <Navbar></Navbar>
         {
            /* Dynamic Content */
             navigation.state === 'loading'? <Spinner></Spinner> : (<main className='min-h-[calc(100vh-287px)]' >
<Outlet></Outlet>
          </main>

         )}
          <Footer></Footer>
        </div>
    );
};

export default Rootlayout;