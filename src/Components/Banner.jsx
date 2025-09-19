import React from 'react';

const Banner = () => {
  return (
    
    <div className='relative  h-[80vh]'>

 <div className="bg-[url('/images/more/3.png')] bg-cover bg-center h-full relative z-0">
    <div className="text-white  pt-24  z-20 absolute ml-[750px] mt-40" >
      <h1 className='text-3xl font-bold' >
      Would you like a Cup of Delicious Coffee?
      </h1>
      <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! <br />
        Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
       <button  className='bg-[#E3B577] btn text-white border-[#331A15]'>Explore more <span className='text-[#331A15]'> </span></button>
    </div>
  </div>

      
    </div>
  );
};

export default Banner;