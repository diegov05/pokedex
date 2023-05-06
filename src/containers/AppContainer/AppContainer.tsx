import React from 'react';

import { SelectBar } from '../../components';

const AppContainer: React.FC = () => {
    return (
        <div className='overflow-y-hidden h-[100vh] w-[100vw]'>
            <img className='w-max' src="https://wallpaperaccess.com/full/45634.png" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 opacity-90 w-[80vw] h-[90vh]'>
                <div className='w-full h-full p-8 sm:p-4 md:p-8 lg:p-12 xl:px-28 xl:py-12'>
                    <SelectBar />
                </div>
            </div>
        </div>
    );
}

export { AppContainer };