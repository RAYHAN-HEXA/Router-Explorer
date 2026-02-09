import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Rootlayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Navbar></Navbar>
          <main className='min-h-[calc(100vh-287px)]' >
<Outlet></Outlet>
          </main>
          <Footer></Footer>
        </div>
    );
};

export default Rootlayout;