import React from 'react';

import { SelectBar, Pokemon } from '../../components';

const AppContainer: React.FC = () => {
    return (
        <div className='overflow-y-hidden h-[100vh] w-[100vw]'>
            <img className='w-max' src="https://wallpaperaccess.com/full/45634.png" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900/90 w-max h-[70vh]'>
                <div className='flex flex-col lg:flex-row xl:flex-row justify-start gap-12 items-center lg:justify-start lg:items-start xl:justify-start xl:items-start w-full h-full p-8 sm:p-4 md:p-12 lg:p-12 xl:px-28 xl:py-12'>
                    <SelectBar />
                    <Pokemon />
                </div>
            </div>
        </div>
    );
}

export { AppContainer };