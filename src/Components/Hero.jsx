import React from 'react';

const Hero = () => {
    return (
       <div className="bg-[url('https://kofi-demo.myshopify.com/cdn/shop/files/beans-1.png?v=1635847936')] bg-cover bg-center bg-[#f1f1f1] p-6" >
        <div className='w-11/12 mx-auto flex justify-between items-center py-12'>
            <div className='mx-6 '>
                <p className='opacity-80 text-2xl my-3'>Black Coffee brings Life</p>
                <h1 className='text-7xl font-extrabold my-5'>TIME DISCOVER <br />
               COFFEE HOUSE</h1>
               <p>Experience the decibels like your ears deserve to. Safe for <br />
                the ears, very for the heart. A treat to your ears.
               </p>
                <button  className='bg-[#E3B577] btn text-white border-[#331A15] my-4'>Explore more <span className='text-[#331A15]'> </span></button>
            </div>
            <img className='w-[540px] ' src="https://kofi-demo.myshopify.com/cdn/shop/files/slider_1.png?v=1636629775" alt="" />
        </div>
    
       
        
  
      </div>
    );
};

export default Hero;