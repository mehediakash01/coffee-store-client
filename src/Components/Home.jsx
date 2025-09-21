import React, { useState } from 'react';
import CardDetails from './CardDetails';
import { useLoaderData, useNavigate } from 'react-router';
import Banner from './Banner';
import { BsFillCupFill } from 'react-icons/bs';
import Gellery from './Gellery';
import SpecialItems from './SpecialItems';
import PopularMenu from './PopularMenu';
import Hero from './Hero';

const Home = () => {
    const navigate = useNavigate();
   
    const InitialCoffees = useLoaderData();
 const [coffeeData,setCoffeeData] = useState(InitialCoffees);
    return (
        <div >
            {/* <Banner></Banner> */}
            <Hero></Hero>
            <div className='bg-[url("/images/more/1.png")] p-22  bg-contain bg-no-repeat'>
            <div className='text-center space-y-2'>
                <p>--- Sip & Savor ---</p>
                <h1 className='text-[#331A15] text-4xl'>Our Popular Products</h1>
                <button onClick={()=> navigate('/addCoffee')} className='bg-[#E3B577] btn text-white border-[#331A15]'>Add Coffee <span className='text-[#331A15]'><BsFillCupFill /></span></button>
            </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 items-center  p-5'>
                    {
                        coffeeData.map(coffee=>  <CardDetails coffee={coffee} setCoffeeData={setCoffeeData} key={coffee._id} ></CardDetails>)
                    }
                
                </div>
            </div>
            <SpecialItems></SpecialItems>
            <PopularMenu></PopularMenu>
            <Gellery></Gellery>
            
        </div>
    );
};

export default Home;