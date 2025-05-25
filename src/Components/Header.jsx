import React from 'react';

const Header = () => {
    return (
        <div className='bg-[url("https://i.ibb.co/jvB0xmwX/Rectangle-1.png")] bg-cover bg-center'>
            <div className='flex justify-center items-center gap-2'>
                <img className='w-14 h-20' src="/public/images/more/logo1.png" alt="" />
                <h1 className='text-white text-4xl'>Espresso Emporium</h1>
            </div>
            
        </div>
    );
};

export default Header;