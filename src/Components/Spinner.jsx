import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div>
            <p className=' flex justify-center items-center min-h-[calc(100vh-287px)]'><PacmanLoader></PacmanLoader></p>
        </div>
    );
};

export default Spinner;