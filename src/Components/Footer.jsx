
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (

        <>
               <footer className="footer sm:footer-horizontal bg-[url('/images/more/10.png')] text-base-content p-10 items-center justify-around">
  <nav>
     <img className='w-14 h-20' src="/public/images/more/logo1.png" alt="" />
    <h6 className="text-[#331A15] text-3xl">Espresso Emporium</h6>
    <p>Always ready to be your friend. Come & Contact <br /> with us to share your memorable moments, <br /> to share with your best companion.</p>
    <div className='flex gap-2'>
     <FaFacebook size={30}></FaFacebook>
     <FaInstagram size={30}></FaInstagram>
     <FaTwitter size={30}></FaTwitter>
     <FaLinkedinIn size={30}></FaLinkedinIn>
    </div>
    <h6 className="text-[#331A15] text-3xl">Get in touch</h6>
    <a className="link link-hover">+88 01533 333 333</a>
    <a className="link link-hover">info@gmail.com</a>
    <a className="link link-hover">72, Wall street, King Road, Dhaka</a>
  </nav>
 
  <form>
    <h6 className="text-[#331A15] text-3xl">Contact With Us</h6>
    <fieldset className="w-80">
      
      <div className="space-y-2">
        <input
          type="text"
          placeholder="name"
          className="input  focus:outline-none focus:ring-2 focus:ring-[#E3B577] focus:border-none" /> <br />
        <input
          type="email"
          placeholder="email"
         className="input  focus:outline-none focus:ring-2 focus:ring-[#E3B577] focus:border-none" /> <br />
          <textarea className="textarea  focus:outline-none focus:ring-2 focus:ring-[#E3B577] focus:border-none" placeholder="message"></textarea> <br />
       
        <button className="btn rounded-full hover:bg-[#331A15] hover:text-white border-1 text-[#331A15] border-[#331A15]">Send message</button>
      </div>
    </fieldset>
  </form>
</footer>
<div className='bg-[linear-gradient(to_right,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url("/images/more/8.png")] bg-center bg-cover p-4'>


     <h1 className='text-white text-center '>Copyright Espresso Emporium ! All Rights Reserved</h1>
</div>
   

        
        
        </>

    );
};

export default Footer;