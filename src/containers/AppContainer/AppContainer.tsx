import React from 'react';

const AppContainer: React.FC = () => {
    return (
        <div className='overflow-y-hidden h-[100vh] w-[100vw]'>
            <img className='w-max' src="https://wallpaperaccess.com/full/45634.png" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 opacity-90 w-[80vw] h-[90vh]'>

            </div>
        </div>
    );
}

export { AppContainer };